import { PathParams, ROUTES } from "@/shared/model/routes";
import { useParams } from "react-router";
import { rqClient } from "@/shared/api/instance";

function EventPage() {
  const params = useParams<PathParams[typeof ROUTES.EVENT]>();

  const eventsQuery = rqClient.useQuery("get", "/events/{eventId}", {
    params: { path: { eventId: params?.eventId as string } },
  });

  return <div>Poster page {eventsQuery.data?.title}</div>;
}

export const Component = EventPage;
