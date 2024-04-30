import { Suspense, lazy } from "react";
import { ROUTES } from "./routes";


const News = lazy(() => import("../components/admin/news/News"));
const InnerNews = lazy(() => import( "../components/user/news/InnerNews"));

export const ADMIN_ROUTES = [
  { 
    path: `${ROUTES.ADMIN.INDEX}${ROUTES.ADMIN.NEWS}`,
    element: (
      <Suspense>
        <News /> 
      </Suspense>
    )
  },
  
  { 
    path: `${ROUTES.ADMIN.INDEX}${ROUTES.ADMIN.NEWS}${ROUTES.ADMIN.ID}`, 
    element: (
      <Suspense>
        <InnerNews /> 
      </Suspense>
    )
  },
];
