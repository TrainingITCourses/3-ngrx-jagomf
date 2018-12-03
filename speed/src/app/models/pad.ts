// status	Integer (1 Green, 2 Red, 3 Success, 4 Failed)
export interface Pad {
  id: number;
  name: string;
  infoURL: string;
  wikiURL: string;
  mapURL: string;
  latitude: number;
  longitude: number;
  agencies: any[];
}
