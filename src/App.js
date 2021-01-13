import React from "react";
import { useRoutes, BrowserRouter } from "react-router-dom";

import { Redirect } from "./components/Redirect/Redirect";
import { Question1 } from "./pages/question-1";
import { Question2 } from "./pages/question-2";

const Routes = () => {
  const routes = useRoutes([
    {
      path: "/questions/1",
      element: <Question1 />,
    },
    {
      path: "/questions/2",
      element: <Question2 />,
    },
    {
      path: "/*",
      element: <Redirect to="/questions/1" />,
    },
  ]);

  return <div>{routes}</div>;
};

function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
