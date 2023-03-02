export interface IUser {
  user: IUserInformation | null;
  isLoading: boolean;
}

export interface IUserInformation {
  email: string;
  name: string;
  nickname: string;
  picture: string;
}
