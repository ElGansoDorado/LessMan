import classes from "./Posters.module.css"

import PosterItem from "../../components/PosterItem/PosterItem"
import { useLoaderData } from "react-router";

export default function Posters() {
    const list = useLoaderData<any[]>();

    return <>
        <section className={classes.box}>

            {list.map((post) => (<PosterItem key={post.title} title={post.title} text={post.body}/>))}
        </section>
    </>
}