export interface ICompany {
  companyName: string;
  size: string;
  industry: string;
  websiteUrl: string;
  userName: string;
  email: string;
  pictureUrl: string;
  address: {
    street: string;
    city: string;
    country: string;
  };
  token: string;
}
