import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Dashboard} from "./pages/Dashboard/Dashboard";
import {Error} from "./pages/Error";
import {RootLayout} from "./components/RootLayout";
import {Vehicle} from "./pages/Vehicle/Vehicle";
import {Crop} from "./pages/Crop/Crop";
import {Staff} from "./pages/Staff/Staff";
import {Equipment} from "./pages/Equipment/Equipment";
import {Field} from "./pages/Field/Field";
import {MonitorLog} from "./pages/MonitorLog/MonitorLog";
import Log from "./pages/Login/Login"; // CHANGED FROM "./pages/Login/Log"

function App() {

  const routes = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout/>,
      children: [
        {index: true, element: <Dashboard/>},
        {path: '/dashboard', element: <Dashboard/>},
        {path: '/vehicle', element: <Vehicle/>},
        {path: '/crop', element: <Crop/>},
        {path: '/staff', element: <Staff/>},
        {path: '/equipment', element: <Equipment/>},
        {path: '/field', element: <Field/>},
        {path: '/log', element: <MonitorLog/>},
      ]
    },
    {
      path: '/login',
      element: <Log/>,
    },
    {path: '*', element: <Error/>}
  ]);
  
  return (
      <>
        <RouterProvider router={routes}></RouterProvider>
      </>
  )
}

export default App
