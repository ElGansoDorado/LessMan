import { ROUTES } from "@/shared/model/routes";
import { useSession } from "@/shared/model/session";
import { Navigate, Outlet } from "react-router";

export function ProtectedRoute() {
    const {session} = useSession();

    if (!session) {
        <Navigate to={ROUTES.LOGIN} />
    }

    return <Outlet />
}