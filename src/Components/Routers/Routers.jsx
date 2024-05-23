import { createBrowserRouter } from "react-router-dom";
import Root from "../LayOut/Root";
import Home from "../Pages/Home/Home";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root>Hello world!</Root>,
    //   errorpage
    children:[
        {
            path:"/",
            element:<Home><h1>hello</h1></Home>,
        }
    ]
    },
  ]);

  export default router;
