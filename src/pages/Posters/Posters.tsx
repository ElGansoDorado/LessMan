import classes from "./Posters.module.css"

import PosterItem from "../../components/PosterItem/PosterItem"
import { getAllPosts } from "../../api/getPosts";
import { useEffect, useState } from "react";

export default function Posters() {
    const [posts, setPosts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getAllPosts()
            .then(setPosts)
            .finally(() => setLoading(false));
    }, []);

    return <>
        <section className={classes.box}>

            {loading ? <h1>Loading...</h1> : 
            <>
                {posts.map((post) => (<PosterItem title={post.title} text={post.body}/>))}
            </>
            }
        </section>
    </>
}