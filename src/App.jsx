import { createBrowserRouter, RouterProvider } from "react-router";

import Layout from "./pages/templates/Layout";
// Pages
import Landing from './pages/Landing';

const dev = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Landing />
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
