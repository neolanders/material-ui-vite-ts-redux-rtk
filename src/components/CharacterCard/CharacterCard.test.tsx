import { render, screen } from '@test/test-utils';
import { describe, expect, it } from 'vitest';
import CharacterCard from './CharacterCard';

const mockCharacter = {
  id: 1,
  name: 'Rick Sanchez',
  status: 'Alive',
  species: 'Human',
  location: { name: 'Earth' },
  image: 'https://example.com/rick.jpg'
};

describe('CharacterCard', () => {
  it('renders character information correctly', () => {
    render(<CharacterCard character={mockCharacter} />);

    expect(screen.getByText('Rick Sanchez')).toBeInTheDocument();
    expect(screen.getByText('Alive - Human')).toBeInTheDocument();
    expect(screen.getByText('Earth')).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('src', 'https://example.com/rick.jpg');
  });
});
