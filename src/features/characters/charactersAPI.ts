import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface Characters {
  id: number;
  name: string;
  status: string;
  species: string;
  image: string;
  location: { name: string };
}

interface CharacterResponse {
  results: Characters[];
  info: {
    count: number;
    pages: number;
  };
}

export const charactersAPI = createApi({
  reducerPath: 'charactersAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://rickandmortyapi.com/api',
    prepareHeaders: headers => {
      headers.set('Accept', 'application/json');
      return headers;
    }
  }),
  endpoints: builder => ({
    fetchCharacters: builder.query<CharacterResponse, number>({
      query(page = 1, limit = 10) {
        return `/character?page=${page}&limit=${limit}`;
      },
      extraOptions: {
        maxRetries: 3
      },
      transformErrorResponse: response => {
        if (response.status === 'FETCH_ERROR') {
          return { message: 'Network error. Please check your internet connection.' };
        }
        if (response.status === 'PARSING_ERROR') {
          return { message: 'Error parsing server response.' };
        }
        if (typeof response.status === 'number') {
          return { message: `Server error (${response.status}). Please try again later.` };
        }
        return { message: 'An unexpected error occurred.' };
      }
    })
  })
});

export const { useFetchCharactersQuery } = charactersAPI;
