import { createBrowserRouter, RouterProvider } from "react-router";

// Pages
import Landing from './pages/Landing';

const dev = createBrowserRouter([
  {
    path: '/',
    element: <Landing />
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
