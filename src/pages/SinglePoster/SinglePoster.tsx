import { useLoaderData } from "react-router";

export default function SinglePoster() {
    const {poster, id} = useLoaderData();

    return <>
        <h1>{poster.title}</h1>
        <p>{id}</p>
        <p>{poster.body}</p>
    </>
}