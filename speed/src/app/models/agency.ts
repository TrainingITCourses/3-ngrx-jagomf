export interface Agency {
  id: number;
  name: string;
  abbrev: string;
  countryCode: string;
  type: number;
  infoURL?: any;
  wikiURL: string;
  changed: string;
  infoURLs: string[];
}
