import React from "react";
import { routerType } from "../types/router.types";

const HomePage = React.lazy(() => import("@/pages/home"))
const LoginPage = React.lazy(() => import("@/pages/login"))
const RegisterPage = React.lazy(() => import("@/pages/register"))
const RandomPage = React.lazy(() => import("@/pages/random"))

const pageTitlePrefix = "BestBooks |"

const pagesData: routerType[] = [
  {
    path: "",
    element: <HomePage title={`${pageTitlePrefix} Home`}/>,
  },
  {
    path: "/login",
    element: <LoginPage title={`${pageTitlePrefix} Login`}/>,
  },
  {
    path: "/register",
    element: <RegisterPage title={`${pageTitlePrefix} Register`}/>,
  },
  {
    path: "/random",
    element: <RandomPage title={`${pageTitlePrefix} Random Book`}/>,
  },
];

export default pagesData;