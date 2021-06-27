
import { IEntry } from './Entry';
export interface IUserData {
  entries: Array<IEntry>,
  projects: Array<string>,
  clients: Array<string>,
  tags: Array<string>
}