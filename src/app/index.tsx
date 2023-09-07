import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { store } from '../redux/index';
import { Provider } from 'react-redux';

import { MainPage } from "../pages/main-page";
import { BookPage } from "../pages/book-page";
import { ErrorPage } from "../pages/error-page";
import { MainTamplate } from "../pages/template";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage/>,
    errorElement: <ErrorPage />
  },
  {
    path: "/book/:bookID",
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
