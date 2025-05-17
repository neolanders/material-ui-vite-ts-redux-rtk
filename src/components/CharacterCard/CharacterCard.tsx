import { Characters } from '@features/characters/charactersAPI';
import { CardActionArea } from '@mui/material';
import {
  CharacterName,
  LocationLabel,
  LocationText,
  StatusContainer,
  StatusDot,
  StatusText,
  StyledCard,
  StyledCardContent,
  StyledCardMedia
} from './CharacterCard.styles';

type CharacterCardProps = {
  character: Characters;
};

const CharacterCard = ({ character }: CharacterCardProps) => {
  return (
    <StyledCard>
      <CardActionArea>
        <StyledCardMedia component="img" image={character.image} alt={character.name} />
        <StyledCardContent>
          <CharacterName variant="h5">{character.name}</CharacterName>

          <StatusContainer>
            <StatusDot status={character.status} />
            <StatusText variant="body2">{`${character.status} - ${character.species}`}</StatusText>
          </StatusContainer>

          <LocationLabel variant="body2">Last known location:</LocationLabel>
          <LocationText variant="body1">{character.location.name}</LocationText>
        </StyledCardContent>
      </CardActionArea>
    </StyledCard>
  );
};

export default CharacterCard;
