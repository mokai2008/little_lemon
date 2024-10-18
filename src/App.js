import "./App.css";
import Header from "./components/Header";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import BookingPage from "./pages/BookingPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/booking",
    element: <BookingPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
