import { Agency } from './agency';

export interface LaunchLight {
  id: number;
  name: string;
  windowstart: string;
  windowend: string;
  net: string;
  status: number;
  tbdtime: number;
  vidURLs?: string[];
  vidURL?: any;
  tbddate: number;
  probability?: number;
  hashtag?: string;
  changed: string;
  lsp: string | Agency;
}
