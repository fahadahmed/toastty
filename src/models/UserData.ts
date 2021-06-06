import { IEntry } from './Entry';
export interface IUserData {
  entries: IEntry[],
  projects: string[],
  clients: string[],
  tags: string[]
}