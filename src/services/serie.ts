import { AxiosResponse } from 'axios';
import api from '../utils/api.config';
import { SerieCharacterType } from './types/serie';

const getSeriesCharacter = async (
  id: number,
): Promise<AxiosResponse<SerieCharacterType[]>> =>
  await api.get(`/serie/character/${id}`);

export { getSeriesCharacter };
