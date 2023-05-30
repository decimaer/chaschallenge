export interface UserData {
   token: string;
   user: {
      _id: string;
      email: string;
      name: string;
   };
   stats: {};
}

export interface UserContextType {
   userState: {};
   setUserState: (userData: UserData) => void;
}
