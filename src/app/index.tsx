import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { store } from '../redux/index';
import { Provider } from 'react-redux';

import { MainPage } from "../pages/MainPage";
import { BookPage } from "../pages/BookPage";
import { ErrorPage } from "../pages/ErrorPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage/>,
    errorElement: <ErrorPage />
  },
  {
    path: "/book/:bookName",
    element: <BookPage/>
  },
])


function App() {
  return <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
}

export default App;
