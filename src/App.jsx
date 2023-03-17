import "../app.css"
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/home/Home"
import Footer from "./components/Footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Gigs from "./pages/gigs/Gigs";
import Gig from "./pages/gig/Gig";
import Add from "./pages/add/Add"
import Message from "./pages/message/Message"
import Messages from "./pages/messages/Messages"
import MyOrders from "./pages/myOrders/myOrders";
import MyGigs from "./pages/myGigs/MyGigs";

function App() {

  const Layout = () => {
    return (
      <>
      <Navbar/>
      <Outlet/>
      <Footer/>
      </>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/gigs",
          element: <Gigs/>
        },
        {
          path: "/gig/:id",
          element: <Gig/>
        },
        {
          path: "/orders",
          element: <MyOrders/>
        },
        {
          path: "/mygigs",
          element: <MyGigs/>
        },
        {
          path: "/add",
          element: <Add/>
        },
        {
          path: "/messages",
          element: <Messages/>
        },
        {
          path: "/message/:id",
          element: <Message/>
        },
      ]
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
