interface User {
  id: number;
  create_at: string;
  profile: {
    name: {
      first: string;
      last: string;
    };
    age: number;
    gebder: string;
    enabled: boolean;
  };
}

type Users = User[];
