export interface IUser {
  id: string;
  fullname: string;
  username: string;
  password: string;
  emails: string[];
  phones: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface IUserRequest {
  fullname: string;
  username: string;
  password: string;
  emails: string[];
  phones: string[];
}

export interface IUserPatchRequest {
  id: string;
  fullname?: string;
  username?: string;
  password?: string;
  emails?: string[];
  phones?: string[];
}

export interface updateUserReqInfos {
  userId: string;
}

export interface IUserLogin {
  username: string;
  password: string;
}

export interface ResponseLogin {
  body: {
    id: string;
    token: string;
  };
}
