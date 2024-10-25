import "./App.css";
import Header from "./components/Header";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import BookingPage from "./pages/BookingPage";
import RootLayout from "./pages/RootLayout";
import ConfirmedBookingPage from "./pages/ConfirmedBookingPage";

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
      {
        path: "confirmed",
        element: <ConfirmedBookingPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
