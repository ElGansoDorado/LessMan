import "react-router";

export const ROUTES = {
  HOME: "/",
  LOGIN: "/login",
  PROFILE: "/profile",
  REGISTER: "/register",
  POSTERS: "/posters",
  POSTER: "/posters/:posterId",
} as const;

export type PathParams = {
  [ROUTES.POSTER]: {
    posterId: string;
  };
};

declare module "react-router" {
  interface Register {
    params: PathParams;
  }
}