import classes from "./poster.module.css";
import { ApiSchemas } from "@/shared/api/schema";

export default function EventPoster({ event }: { event: ApiSchemas["Event"] }) {
  return (
    <article className={classes.container}>
      <div className={classes.teg}></div>

      <div className={classes.info}>
        <h3>{event.title}</h3>
        <p>{event.description}</p>
      </div>
    </article>
  );
}
