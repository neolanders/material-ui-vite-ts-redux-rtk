import { render, screen, waitFor } from '@test/test-utils';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import App from './App';

describe('App', () => {
  it('renders loading state initially', () => {
    render(<App />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('handles pagination correctly', async () => {
    render(<App />);
    const user = userEvent.setup();

    await waitFor(() => {
      expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
    });

    const nextPageButton = screen.getByRole('button', { name: /go to page 2/i });
    await user.click(nextPageButton);

    // Add assertions for page change
  });
});
