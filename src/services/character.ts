import { AxiosResponse } from 'axios';
import { PaginateResponse } from '../types/paginate';
import { CharacterEntity } from './types/character';
import api from '../utils/api.config';

export const getCharactersPaginate = async (
  page: number,
): Promise<AxiosResponse<PaginateResponse<CharacterEntity>>> =>
  await api.get<PaginateResponse<CharacterEntity>>(
    `/character/paginate?page=${page}`,
  );
