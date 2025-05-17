import { Alert, AlertTitle, Box, Button } from '@mui/material';
import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';

interface ErrorDisplayProps {
  error: FetchBaseQueryError | SerializedError | undefined;
  onRetry?: () => void;
}

const ErrorDisplay = ({ error, onRetry }: ErrorDisplayProps) => {
  if (!error) return null;

  const getErrorMessage = () => {
    if ('status' in error) {
      // Handle FetchBaseQueryError
      if (error.status === 'FETCH_ERROR') {
        return 'Network error. Please check your internet connection.';
      }
      if (error.status === 'PARSING_ERROR') {
        return 'Error parsing server response.';
      }
      if (typeof error.status === 'number') {
        return `Server error (${error.status}). Please try again later.`;
      }
    }
    // Handle SerializedError
    if ('message' in error) {
      return error.message;
    }
    return 'An unexpected error occurred.';
  };

  return (
    <Box sx={{ width: '100%', mt: 2 }}>
      <Alert
        severity="error"
        action={
          onRetry && (
            <Button color="inherit" size="small" onClick={onRetry}>
              Retry
            </Button>
          )
        }
      >
        <AlertTitle>Error</AlertTitle>
        {getErrorMessage()}
      </Alert>
    </Box>
  );
};

export default ErrorDisplay;
