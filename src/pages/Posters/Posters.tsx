import classes from "./Posters.module.css";

import PosterItem from "../../components/ui/poster/poster";
import { useLoaderData } from "react-router";
import { Link } from "react-router";

export default function Posters() {
  const list = useLoaderData<any[]>();

  return (
    <>
      <section className={classes.box}>
        {list.map((post) => (
          <Link to={`/${post.id}`}>
            <PosterItem key={post.title} title={post.title} text={post.body} />
          </Link>
        ))}
      </section>
    </>
  );
}
