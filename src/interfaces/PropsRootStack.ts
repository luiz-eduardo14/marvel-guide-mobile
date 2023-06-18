import { CharacterEntity } from '../services/types/character';
import { Screen } from './screen.enum';

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export type RootStackParamList = {
  [Screen.CHARACTER]: CharacterEntity;
  [Screen.HOME]: undefined;
};
