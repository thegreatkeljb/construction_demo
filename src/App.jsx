import { createBrowserRouter, RouterProvider } from "react-router";

import Layout from "./pages/templates/Layout";
import PagesTemplate from "./pages/templates/PagesTemplate";
import ScrollToTop from "./pages/components/ScrollToTop";
// Pages
import Landing from './pages/Landing';
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Services from "./pages/Services";

const dev = createBrowserRouter([
  {
    path: '/',
    element: 
    <>
      <ScrollToTop />
      <Layout />
    </>,
    children: [
      {
        index: true,
        element: <Landing />
      },
      {
        element: <PagesTemplate Title="About Us"/>,
        children: [
          {
            path: '/about',
            element: <About />
          },
        ]
      },
      {
        element: <PagesTemplate Title="Our Portfolio"/>,
        children: [
          {
            path: '/portfolio',
            element: <Portfolio />
          },
        ]
      },
      {
        element: <PagesTemplate Title="Our Capabilities"/>,
        children: [
          {
            path: '/services',
            element: <Services />
          },
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
