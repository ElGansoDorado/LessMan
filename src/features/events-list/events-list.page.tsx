import classes from "./events-list.module.css";

import { rqClient } from "@/shared/api/instance";
import { Link, href } from "react-router";
import { ROUTES } from "@/shared/model/routes";

import PosterItem from "@/components/ui/poster/poster";

function EventsListPage() {
  const eventsQuery = rqClient.useQuery("get", "/events");

  return (
    <section className={classes.box}>
      {eventsQuery.data?.map((item) => (
        <Link to={href(ROUTES.EVENT, { eventId: "24" })}>
          <PosterItem
            key={item.id}
            title={item.title ?? "ну вот так"}
            text={item.description ?? "нужно сдедать обязательным"}
          />
        </Link>
      ))}
    </section>
  );
}

export const Component = EventsListPage;
