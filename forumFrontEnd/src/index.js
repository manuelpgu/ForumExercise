import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
//USEPARAMS BUSCAR EN GOOGLE

import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import "./index.css";
import ForumApp from './components/Student/ForumApp';
import CategoryBySelectedThread from './components/Student/CategoryBySelectedThread';
import CreatePostForm from './components/Student/CreatePostForm';


const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <ForumApp/>,
  },

  {
    path: "/forumApp",
    element: <ForumApp/>,
  },

  {
    path: "/posts/new",
    element: <CreatePostForm />
  },

  {
    path: "/selectedThead/:thead",
    element: <CategoryBySelectedThread/>
  }
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
