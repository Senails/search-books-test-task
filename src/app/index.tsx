import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { store } from '../redux/index';
import { Provider } from 'react-redux';

import { MainPage } from "../pages/MainPage";
import { BookPage } from "../pages/BookPage";
import { ErrorPage } from "../pages/ErrorPage";
import { MainTamplate } from "../pages/template";


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
    <MainTamplate>
      <RouterProvider router={router} />
    </MainTamplate>
  </Provider>
}

export default App;
