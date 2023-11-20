import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Homepage from './screens/home'
import App from './screens/App'
import CardCover from './screens/card-cover'
import CardContent from './screens/card-content'
import CardDetail from './screens/card-detail'
import Payment from './screens/payment'
import reportWebVitals from './reportWebVitals'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './font.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

const router = createBrowserRouter([
    {
        path: '/',
        element: <Homepage />,
    },
    {
        path: '/:name/:type?',
        element: <App />,
    },
    {
        path: '/card-cover/:name/:type?',
        element: <CardCover />,
    },
    {
        path: '/card-content/:name/:type?',
        element: <CardContent />,
    },
    {
        path: '/card-detail/:name/:type?',
        element: <CardDetail />,
    },
    {
        path: '/payment/:name/:type?',
        element: <Payment />,
    },
])

root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
