import "./App.css";
import Header from "./components/Header";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import BookingPage from "./pages/BookingPage";
import RootLayout from "./pages/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "booking",
        element: <BookingPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
