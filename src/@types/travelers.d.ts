export interface Travel {
  title: string;
  from: string;
  to: string;
  departureDate: string;
  arrivalDate: string;
  budget: number;
  numberOfTravelers: number;
  id: number;
  organizerId: number;
  organizer: {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
  };
  travelers: {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
  };
  activities: {
    id: number;
    name: string;
    price: number;
    location: string;
    members: number;
    time: string;
    date: string;
    travelId: number;
    categoryId: number;
  };
}

export interface TravelsState {
  travels: Travel[];
}
