import { PathParams, ROUTES } from "@/shared/model/routes";
import { useParams } from "react-router";

function PosterPage() {
    const params = useParams<PathParams[typeof ROUTES.POSTER]>();
    return <div>Poster page {params.posterId}</div>
}

export const Component = PosterPage;