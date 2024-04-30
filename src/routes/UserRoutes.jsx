import { Suspense } from "react";
import { ROUTES } from "./routes";
import UserProfile from "../components/user/networking/InnerNetworking";
import Networking from "../components/user/networking/Networking";
import InnerNews from "../components/user/news/InnerNews";
import News from "../components/user/news/News";

export const USER_ROUTES = [
    {
        path: `${ROUTES.USER.INDEX}${ROUTES.USER.NETWORKING}`,
        element: (
           <Suspense>
              <Networking />
           </Suspense>
        ),
     },

     {
        path: `${ROUTES.USER.INDEX}${ROUTES.USER.NETWORKING}${ROUTES.USER.ID}`,
        element: (
           <Suspense>
              <UserProfile />
           </Suspense>
        ),
     },

     {
        path: `${ROUTES.USER.INDEX}${ROUTES.USER.NEWS}`,
        element: (
           <Suspense>
              <News /> 
           </Suspense>
         ),
      },

      {
        path: `${ROUTES.USER.INDEX}${ROUTES.USER.NEWS}${ROUTES.USER.ID}`,
        element: (
           <Suspense>
             <InnerNews /> 
           </Suspense>
         ),
      },

     {
        path: `${ROUTES.USER.INDEX}${ROUTES.USER.NETWORKING}`,
        element: (
           <Suspense>
              <Networking /> 
           </Suspense>
         ),
      }, 

      {
        path: `${ROUTES.USER.INDEX}${ROUTES.USER.NETWORKING}${ROUTES.USER.ID}`,
        element: (
           <Suspense>
             <UserProfile /> 
           </Suspense>
         ),
      },
   ]  