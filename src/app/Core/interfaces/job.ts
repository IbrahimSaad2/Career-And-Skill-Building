export interface Skill {
  category: string;
  id: number;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string | null;
}

export interface Location {
  street: string;
  city: string;
  country: string;
}

export interface Job {
  id: number;
  name: string;
  description: string;
  location: Location;
  expiresAt: string | null;
  employmentType: string;
  minSalary: number;
  maxSalary: number;
  companyEmail: string;
  skills: Skill[];
  createdAt: Date;
  updatedAt: Date | null;
}
