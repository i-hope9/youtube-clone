import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from './pages/Root';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Videos from './pages/Videos';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {index: true, element: <Home />},
      {path:'/videos/:q', element:<Videos />}
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
