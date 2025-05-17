import CharacterCard from '@components/CharacterCard';
import ErrorDisplay from '@components/ErrorDisplay';
import ThemeToggle from '@components/ThemeToggle/ThemeToggle';
import { Characters, useFetchCharactersQuery } from '@features/characters/charactersAPI';
import { usePagination } from '@hooks/usePagination';
import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material';
import Pagination from '@mui/material/Pagination';

const App = () => {
  const { currentPage, handlePageChange } = usePagination();
  const { data, error, isLoading, refetch } = useFetchCharactersQuery(currentPage);

  if (isLoading) {
    return (
      <Container>
        <Typography>Loading...</Typography>
      </Container>
    );
  }

  return (
    <Box sx={{ 
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      bgcolor: 'background.default'
    }}>
      <AppBar position="static" elevation={0}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Rick and Morty Characters
          </Typography>
          <ThemeToggle />
        </Toolbar>
      </AppBar>

      <Container sx={{ flex: 1, py: 4 }}>
        <Box sx={{ my: 4 }}>
          <ErrorDisplay error={error} onRetry={refetch} />

          {data && (
            <>
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                  gap: 2
                }}
              >
                {data.results.map((character: Characters) => (
                  <CharacterCard key={character.id} character={character} />
                ))}
              </Box>

              <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                <Pagination
                  count={data.info.pages}
                  page={currentPage}
                  onChange={handlePageChange}
                  color="primary"
                />
              </Box>
            </>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default App;
