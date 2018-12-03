import { Pad } from './pad';
export interface Location {
  pads: Pad[];
  id: number;
  name: string;
  infoURL: string;
  wikiURL: string;
  countryCode: string;
}
