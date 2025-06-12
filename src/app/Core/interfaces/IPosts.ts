export interface IPosts {
 id: number;
  name: string;
  description: string;
  createdAt: Date;
  updatedAt: string | null;
  expiresAt: string;
  employmentType: "FullTime" | "PartTime" | "Contract" | "Internship" | string;
  minSalary: number;
  maxSalary: number;
  companyEmail: string;
  companyName: string;
  companyLogoUrl: string;
  websiteUrl: string | null;
  location: {
    street: string;
    city: string;
    country: string;
  };
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
