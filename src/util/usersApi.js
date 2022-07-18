import { v4 as _id } from "uuid";

//Assuming this mock API comes from a database of users already setup with auth, the names are fake but each ID is unique.
export const usersApi = [
  {
    user: "John Doe",
    id: _id(),
    deskNumber: 100,
    currentReservedStatus: true,
    bookedTime: "--",
    users: [],
  },
  {
    user: "Joao Massa",
    id: _id(),
    deskNumber: 101,
    currentReservedStatus: true,
    bookedTime: "--",
    users: [],
  },
  {
    user: "John Pasty",
    id: _id(),
    deskNumber: 102,
    currentReservedStatus: true,
    bookedTime: "--",
    users: [],
  },
  {
    user: "Jane batter",
    id: _id(),
    deskNumber: 103,
    currentReservedStatus: true,
    bookedTime: "--",
    users: [],
  },
  {
    user: "Jean Pates",
    id: _id(),
    deskNumber: 104,
    currentReservedStatus: true,
    bookedTime: "--",
    users: [],
  },
];
