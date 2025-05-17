import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledCard = styled(Card)({
  backgroundColor: '#3c3e44',
  color: 'white',
  width: 250,
  marginBottom: '30px'
});

export const StyledCardMedia = styled(CardMedia)(() => ({
  height: 180
})) as typeof CardMedia;

export const StyledCardContent = styled(CardContent)({});

export const CharacterName = styled(Typography)({
  textAlign: 'left',
  marginBottom: 16
});

export const StatusContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  marginBottom: 16
});

export const StatusDot = styled(Box)<{ status: string }>(({ status }) => ({
  backgroundColor: (() => {
    switch (status) {
      case 'Alive':
        return 'green';
      case 'Dead':
        return 'red';
      default:
        return 'gray';
    }
  })(),
  width: '12px',
  height: '12px',
  borderRadius: '12px',
  marginRight: 8
}));

export const StatusText = styled(Typography)({
  color: 'white'
});

export const LocationLabel = styled(Typography)({
  textAlign: 'left',
  color: 'grey.500'
});

export const LocationText = styled(Typography)({
  textAlign: 'left',
  color: 'white',
  marginBottom: 8
});
