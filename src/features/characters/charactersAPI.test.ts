import type { Store } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';
import { renderHook, waitFor } from '@testing-library/react';
import type { ReactNode } from 'react';
import React from 'react';
import { Provider } from 'react-redux';
import { afterAll, beforeAll, describe, expect, it, vi } from 'vitest';
import { charactersAPI } from './charactersAPI';

// Mock store setup
const createWrapper = () => {
  const store = configureStore({
    reducer: {
      [charactersAPI.reducerPath]: charactersAPI.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(charactersAPI.middleware)
  });
  return ({ children }: { children: ReactNode }) =>
    React.createElement(Provider, { store: store as Store, children });
};

// Mock data
const mockCharacters = {
  results: [
    {
      id: 1,
      name: 'Rick Sanchez',
      status: 'Alive',
      species: 'Human',
      image: 'https://example.com/rick.jpg',
      location: { name: 'Earth' }
    }
  ],
  info: {
    count: 1,
    pages: 1
  }
};

describe('charactersAPI', () => {
  beforeAll(() => {
    // Mock fetch
    vi.stubGlobal('fetch', vi.fn());
  });

  afterAll(() => {
    vi.restoreAllMocks();
  });

  it('should fetch characters successfully', async () => {
    // Mock successful response
    const mockResponse = new Response(JSON.stringify(mockCharacters), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

    vi.mocked(fetch).mockResolvedValueOnce(mockResponse);

    const { result } = renderHook(() => charactersAPI.endpoints.fetchCharacters.useQuery(1), {
      wrapper: createWrapper()
    });

    // Initial state
    expect(result.current.isLoading).toBe(true);
    expect(result.current.data).toBeUndefined();

    // Wait for the query to complete
    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
    });

    // Check the data
    expect(result.current.data).toEqual(mockCharacters);
    expect(result.current.error).toBeUndefined();
  });

  it('should handle network errors', async () => {
    // Mock network error
    vi.mocked(fetch).mockRejectedValueOnce(new Error('Network error'));

    const { result } = renderHook(() => charactersAPI.endpoints.fetchCharacters.useQuery(1), {
      wrapper: createWrapper()
    });

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
    });

    expect(result.current.error).toBeDefined();
    expect(result.current.data).toBeUndefined();
  });

  it('should handle server errors', async () => {
    // Mock server error
    const mockErrorResponse = new Response(JSON.stringify({ message: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });

    vi.mocked(fetch).mockResolvedValueOnce(mockErrorResponse);

    const { result } = renderHook(() => charactersAPI.endpoints.fetchCharacters.useQuery(1), {
      wrapper: createWrapper()
    });

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
    });

    expect(result.current.error).toBeDefined();
    expect(result.current.data).toBeUndefined();
  });

  it('should handle parsing errors', async () => {
    // Mock invalid JSON response
    const mockInvalidResponse = new Response('invalid json', {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

    vi.mocked(fetch).mockResolvedValueOnce(mockInvalidResponse);

    const { result } = renderHook(() => charactersAPI.endpoints.fetchCharacters.useQuery(1), {
      wrapper: createWrapper()
    });

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
    });

    expect(result.current.error).toBeDefined();
    expect(result.current.data).toBeUndefined();
  });
});
