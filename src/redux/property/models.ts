export interface Property {
  id: string,
  address: Address;
  ownerID: string;
  type: string;
  description: string;
  rent_value: number;
  rooms: number;
  garage_spots: number;
  living_rooms: number;
  suites: number;
  area: number;
  cabinet: boolean;
  floor?: number;
  cond_value?: number;
  concierge24?: boolean;
}

export interface Address {
  cep: string;
  state: State;
  neighborhood: string;
  city: string;
  street: string;
  number: string;
  complement: string;
  reference?: string;
}

export interface PropertyInitialState {
  properties: Property[];
  cityName: string | null;
  error: string | null;
}

export enum property_type {
  HOUSE = "house",
  APARTMENT = "apartment",
}

export enum State {
  MG = "Minas Gerais",
  SP = "São Paulo",
  RJ = "Rio De Janeiro",
}
