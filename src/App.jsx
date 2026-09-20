import { createBrowserRouter, RouterProvider } from "react-router";

import Layout from "./pages/templates/Layout";
import PagesTemplate from "./pages/templates/PagesTemplate";
// Pages
import Landing from './pages/Landing';
import About from "./pages/About";

const dev = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Landing />
      },
      {
        element: <PagesTemplate Title="About Us"/>,
        children: [
          {
            path: 'about',
            element: <About />
          }
        ]
      }
    ]
  }
]);

function App() {
  return (
    <>
      <RouterProvider router={ dev } />
    </>
  )
}

export default App
