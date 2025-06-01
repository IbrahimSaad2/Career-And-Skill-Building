export interface Address {
  street: string;
  city: string;
  country: string;
}

export interface IUser {
  firstName: string;
  lastName: string;
  preferredJobTitle: string;
  resumeUrl: string;
  userGoal: string;
  educationLevel: string;
  userName: string;
  email: string;
  pictureUrl: string;
  address: Address;
  token: string;
}

