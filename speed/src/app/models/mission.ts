import { Agency } from './agency';
import { Payload } from './payload';
export interface Mission {
  id: number;
  name: string;
  description: string;
  type: number;
  wikiURL: string;
  typeName: string;
  agencies: Agency[];
  payloads: Payload[];
}
