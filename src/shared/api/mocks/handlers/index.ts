import { HttpResponse } from "msw";
import { http } from "../http";
import { ApiSchemas } from "../../schema";

const boards: ApiSchemas["Event"][] = [
  {
    id: "event-1",
    organizerId: "",
    createdAt: "",
    updatedAt: "",
    title: "Jazz Festival",
    description: "Annual international jazz event",
    date: "2023-07-15T19:00:00Z",
    location: "Central Park, New York",
    imageUrl: "string",
    price: 25.99,
    category: "festival",
    isPublic: true,
  },
  {
    id: "event-2",
    organizerId: "",
    createdAt: "",
    updatedAt: "",
    title: "rwegerwrewt",
    description: "ewtewtwtwtwetw",
    date: "2023-07-15T19:00:00Z",
    location: "wetewtwtwtwt",
    imageUrl: "wetwtwtewtwet",
    price: 25.99,
    category: "concert",
    isPublic: true,
  },
];

export const handlers = [
  http.get("/events", () => {
    return HttpResponse.json(boards);
  }),
];
