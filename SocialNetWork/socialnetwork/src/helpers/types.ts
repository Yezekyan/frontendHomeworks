export interface User {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
}
type Receiver = {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  avatar: string;
  bio: string;
  isAccountPrivate: boolean;
};

type Sender = {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  avatar: string;
  bio: string;
  isAccountPrivate: boolean;
};

type Post = {
  id: number;
  text: string;
  createdAt: string;
};

export interface Posts {
  posts: Post;
}

export interface Followings {
  receiver: Receiver;
}

export interface Followers {
  sender: Sender;
}

export interface Account extends User {
  id: number;
  avatar: string;
  bio: string;
  isAccountPrivate: boolean;
  followings: Followings[];
  followers: Followers[];
  posts: Posts[];
}

export interface Context {
  user: Account;
  setUser: (user: Account) => void;
}
