export interface ParsedActor {
  id: number;
  name: string;
  character: string;
  gender: number;
  profile_path: string | null;
}

export interface TransformedActor {
  id: number;
  name: string;
  character: string;
  profile: {
    src: string;
    alt: string;
  };
}

export interface GetActorsResponse {
  actors: TransformedActor[];
}