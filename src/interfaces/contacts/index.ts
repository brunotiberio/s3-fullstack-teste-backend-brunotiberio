export interface IContact {
  id: string;
  fullname: string;
  emails: string[];
  phones: string[];
}

export interface IContactRequest {
  fullname: string;
  emails: string[];
  phones: string[];
}

export interface IContactPatchRequest {
  id: string;
  fullname?: string;
  emails?: string[];
  phones?: string[];
}
