import { useState } from 'react'
import './App.css'
import HomePage from './components/HomePage'
import PostsListPage from './components/PostsListPage'
import Navbar from './components/Navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import PostsDetailPage from './components/PostDetailPage'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Navbar />,
      children: [
        { path: '/', element: <HomePage />, index: true },
        { path: '/posts', element: <PostsListPage /> },
        { path: '/posts/:id', element: <PostsDetailPage /> }
      ]
    }
  ])
  return <RouterProvider router={router} />;
}

export default App
