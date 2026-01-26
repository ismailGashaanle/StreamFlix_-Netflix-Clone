import React, { Children } from 'react'
import Header from './Components/Header'
import Body from './Components/Body'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Login from './Components/Login'
import NotFound from './Components/NotFound'
import Browser from './Components/Browser'
import { Provider } from 'react-redux'
import AppStore from './redux/AppStore'



const AppLayout=()=>{
  return(
    <>
    <Body/>
    <Outlet/>
    </>
  )
}


const App = () => {


  const AppRouter=createBrowserRouter([

    {
      path:"/",
      element:<AppLayout/>,
      errorElement:<NotFound/>,
      children:[
      
        {
          index:true,
          element:<Login/>,
          
        },
        {
          path:"/login",
          element:<Login/>,
          
        },
        {
          path:"/browser",
          element:<Browser/>

        }
      ]
    },
    

  ])

  return (
    <div>
    <Provider store={AppStore}>
       <RouterProvider router={ AppRouter}/>
    </Provider>

    </div>
  )
}

export default App
