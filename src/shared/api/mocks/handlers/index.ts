import { HttpResponse } from "msw";
import { http } from "../http";
import { ApiSchemas } from "../../schema";

const events: ApiSchemas["Event"][] = [
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
  },
  {
    id: "event-2",
    organizerId: "org-123",
    createdAt: "2023-05-10T14:30:00Z",
    updatedAt: "2023-06-01T09:15:00Z",
    title: "Rock Legends Live",
    description: "Performance by legendary rock bands of the 80s",
    date: "2023-08-20T20:00:00Z",
    location: "Madison Square Garden, New York",
    imageUrl: "https://example.com/rock-concert.jpg",
    price: 89.99,
    category: "concert",
  },
  {
    id: "event-3",
    organizerId: "org-456",
    createdAt: "2023-04-05T10:00:00Z",
    updatedAt: "2023-05-20T16:45:00Z",
    title: "International Food Festival",
    description: "Taste cuisines from around the world",
    date: "2023-09-10T12:00:00Z",
    location: "Downtown Square, Chicago",
    imageUrl: "https://example.com/food-festival.jpg",
    price: 15.5,
    category: "other",
  },
];

export const handlers = [
  http.get("/events", () => {
    return HttpResponse.json(events);
  }),

  http.get("/events/{eventId}", ({ params }) => {
    const { eventId } = params;
    const index = events.findIndex((event) => event.id === eventId);

    if (index === -1) {
      return HttpResponse.json(
        { message: "Event not found", code: "NOTE_FOUND" },
        { status: 404 },
      );
    }

    return HttpResponse.json(events[index]);
  }),
];
