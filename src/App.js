import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from './pages/Root';
import NotFound from './pages/NotFound';
// import Home from './pages/Home';
import Videos from './pages/Videos';
import VideoDetails from './pages/VideoDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {index: true, element: <Videos />},
      {path: '/videos', element:<Videos />},
      {path: '/videos/:q', element:<Videos />},
      {path: '/videos/watch/:videoId', element:<VideoDetails />}
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
