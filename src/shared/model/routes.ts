import "react-router";

export const ROUTES = {
  HOME: "/",
  LOGIN: "/login",
  PROFILE: "/profile",
  REGISTER: "/register",
  EVENTS: "/events",
  EVENT: "/events/:eventId",
} as const;

export type PathParams = {
  [ROUTES.EVENT]: {
    eventId: string;
  };
};

declare module "react-router" {
  interface Register {
    params: PathParams;
  }
}