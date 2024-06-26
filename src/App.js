import { Provider } from 'react-redux';
import Body from './components/Body';
import Head from './components/Head';
import store from './Utils/store';
import MainContainer from './components/MainContainer'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import WatchPage from './components/WatchPage';
import Check from './components/Check';

const appRouter = createBrowserRouter([{

  path:"/",
  element:<Body/>,
  children:[
    {
      path: "/",
      element: <MainContainer />
    },
    {
      path: "/watch",
      element: <WatchPage />
    },
    {
      path: "check",
      element: <Check />
    },
    

  ]

}])

function App() {
  return (
    <Provider store = {store}>
        <div className="App">
          <Head />
          <RouterProvider router={appRouter}/>
        </div>
    </Provider>
  );
}

export default App;
