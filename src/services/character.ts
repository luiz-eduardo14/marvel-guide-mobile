import { AxiosResponse } from 'axios';
import { PaginateResponse } from '../types/paginate';
import { CharacterEntity } from './types/character';
import api from '../utils/api.config';

const getCharactersPaginate = async (
  page: number,
): Promise<AxiosResponse<PaginateResponse<CharacterEntity>>> =>
  await api.get<PaginateResponse<CharacterEntity>>(
    `/character/paginate?page=${page}`,
  );

const getAllCharacters = async (): Promise<AxiosResponse<CharacterEntity[]>> =>
  await api.get('/character');

export { getCharactersPaginate, getAllCharacters };
