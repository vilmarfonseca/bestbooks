import React from "react";
import { routerType } from "../types/router.types";

const HomePage = React.lazy(() => import("@/pages/home"))
const LoginPage = React.lazy(() => import("@/pages/login"))
const RegisterPage = React.lazy(() => import("@/pages/register"))
const CategoryPage = React.lazy(() => import("@/pages/category"))
const SingleBookPage = React.lazy(() => import("@/pages/book"))


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
    path: "/category",
    element: <CategoryPage title={`${pageTitlePrefix} `}/>,
  },
  {
    path: "/book",
    element: <SingleBookPage title={`${pageTitlePrefix} `}/>,
  },
];

export default pagesData;