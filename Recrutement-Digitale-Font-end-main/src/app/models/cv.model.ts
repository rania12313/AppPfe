import { SafeResourceUrl } from '@angular/platform-browser';

export interface CvModel {
  id: number;
  nom: string;
  uuid: string;
  url: string;
  data: string;
  uploadDate: Date;
  deletionDate: Date | null;
  safeUrl?: SafeResourceUrl;
  skillsFound: Array<string>;
  score: number;
  specialite: string;
  user: any;
  acceptedBySystem: boolean;
  archived: boolean;
  offre: any;
}
