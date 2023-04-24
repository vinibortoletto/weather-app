import { ICity } from './ICity';

interface ILink {
  rel: string;
  href: string;
}

interface IMetadata {
  currentOffset: number;
  totalCount: number;
}

export interface ICityResponse {
  data: ICity[];
  links: ILink[];
  metadata: IMetadata[];
}
