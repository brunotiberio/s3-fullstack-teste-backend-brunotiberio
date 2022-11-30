export interface IContact {
  id: string;
  fullname: string;
  emails: string[];
  phones: string[];
}

export interface IUserRequest {
  fullname: string;
  emails: string[];
  phones: string[];
}

export interface IUserPatchRequest {
  fullname?: string;
  emails?: string[];
  phones?: string[];
}
