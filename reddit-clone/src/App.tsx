import { createContext } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import './App.css'

import MessageBoard from "./MessageBoard.tsx";
import AllPosts from "./AllPosts.tsx";
import PostView from "./PostView.tsx";
import Welcome, { welcomeLoader } from "./Welcome.tsx";
import NavBar from "./NavBar.tsx"
import { SupashipUserInfo, useSession } from "./use-session"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <MessageBoard />,
        children: [
          {
            path: ":pageNumber",
            element: <AllPosts />,
          },
          {
            path: "post/:postId",
            element: <PostView />,
          },
        ],
      },
      {
        path: "welcome",
        element: <Welcome />,
        loader: welcomeLoader,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />
}

export default App;

export const UserContext = createContext<SupashipUserInfo>({
  session: null,
  profile: null,
});

function Layout() {
  const supashipUserInfo = useSession();
  return (
    <>
      <UserContext.Provider value={supashipUserInfo}>
        <NavBar />
        <Outlet />
      </UserContext.Provider>
    </>
  );
}
