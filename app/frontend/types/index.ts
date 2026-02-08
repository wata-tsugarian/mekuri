export type FlashData = {
  notice?: string
  alert?: string
}

export type SharedProps = {}

export type UserProps = {
  id: string;
  name: string;
  email: string;
  uid: string;
  avatar_url: string | null;
  provider: string;
}