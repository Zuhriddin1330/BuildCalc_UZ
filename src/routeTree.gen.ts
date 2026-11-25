import { Route as rootRoute } from "./routes/__root";
import { Route as indexRouteImport } from "./routes/index";

const indexRoute = indexRouteImport.update({
  id: "/",
  path: "/",
  getParentRoute: () => rootRoute,
});

export const routeTree = rootRoute.addChildren([indexRoute]);