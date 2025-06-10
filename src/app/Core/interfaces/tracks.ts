export interface Tracks {
    id: number;
  name: string;
  description: string;
  durationInHours: number;
  difficultyLevel: string;
  coverUrl: string;
  createdAt: string;  // ISO 8601 date-time format
  updatedAt: string | null; 
}