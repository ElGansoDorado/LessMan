import classes from "./events-list.module.css";

import { rqClient } from "@/shared/api/instance";
import { Link, href } from "react-router";
import { ROUTES } from "@/shared/model/routes";

import EventPoster from "@/components/ui/poster/poster";

function EventsListPage() {
  const eventsQuery = rqClient.useQuery("get", "/events");

  return (
    <section className={classes.box}>
      {eventsQuery.data?.map((item) => (
        <Link key={item.id} to={href(ROUTES.EVENT, { eventId: `${item.id}` })}>
          <EventPoster event={item} />
        </Link>
      ))}
    </section>
  );
}

export const Component = EventsListPage;
