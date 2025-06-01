export interface IPosts {
  id: number;
  name: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  location: {
    street: string;
    city: string;
    country: string;
  };
  expiresAt: Date;
  employmentType: string;
  minSalary: number;
  maxSalary: number;
  companyEmail: string;
  skills: Skill[];
}

export interface Skill {
  id: number;
  name: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  category: string;
}
