import classes from "./poster.module.css";

type Prop = {
  title: string;
  text: string;
};

export default function PosterItem({ title, text }: Prop) {
  return (
    <article className={classes.container}>
      <div className={classes.teg}>
        <p className={classes.new}>new</p>
      </div>

      <div className={classes.info}>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </article>
  );
}
