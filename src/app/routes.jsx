import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import CounterApp from "../pages/CounterApp";
import LandingPage from "../components/LandingPage";
import Dashboard from "../components/Dashboard";
import Error from "../components/Error";
import ToggleButton from "../pages/ToggleButton";
import CharacterCounter from "../pages/CharacterCounter";
import ControlledForm from "../pages/ControlledForm";
import TodoList from "../pages/TodoList";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "counter-app",
        element: <CounterApp />,
      },
      {
        path: "toggle-button",
        element: <ToggleButton />,
      },
      {
        path: "character-counter",
        element: <CharacterCounter />,
      },
      {
        path: "form-validation",
        element: <ControlledForm />,
      },
      {
        path: "todo-crud",
        element: <TodoList />,
      },
    ],
  },
]);
