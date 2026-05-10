export interface IPetData {
  petName: string;
  species: string;
  age: number;
  vaccinated: boolean;
  size: 'small' | 'medium' | 'large';
  temperament: {
    docile: boolean;
    active: boolean;
    protective: boolean;
  };
  shelterInfo: {
    shelterName: string;
    shelterCity: string;
  };
  bio: string;
}
