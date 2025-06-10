export interface Course {
  Name: string;
  Skills: string[];
  URL: string;
  courseDifficulty: string;
  orderInTrack: number;
}

export interface LearningTrack {
  Courses: Course[]; 
  Details: string[];
  Name: string;
  Skills: string[];
  URL: string;
  difficultyLevel: string;
  prerequisite: string;
  providerName: string;
  trackImgURL: string;
}