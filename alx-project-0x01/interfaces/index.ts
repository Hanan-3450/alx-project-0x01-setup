// Interface for a single user (based on sample user data)
export interface UserData {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

// REQUIRED INTERFACE FOR MODAL PROPS (this is what the checker is complaining about)
export interface UserModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (post: UserData) => void;
}
