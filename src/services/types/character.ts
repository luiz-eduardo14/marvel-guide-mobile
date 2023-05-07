export interface CharacterEntity {
  id: number;

  id_origin: number;

  description: string | null;

  modified?: Date;

  imageURL: string;

  resourceURI: string;

  name: string;
}
