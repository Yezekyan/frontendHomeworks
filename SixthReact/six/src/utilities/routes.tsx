import { createBrowserRouter } from 'react-router-dom';
import { AddProduct } from '../pages/AddProduct';
import { ProductDetails } from '../pages/ProductDetails';
import { Products } from '../pages/Products';
import { Layout } from '../pages/Layout';
import { NotFound } from '../pages/404';

export const routes = createBrowserRouter([
  {
    path: '',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Products />,
      },
      {
        path: '/products/:id',
        element: <ProductDetails />,
      },
      {
        path: 'add',
        element: <AddProduct />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);
