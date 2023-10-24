import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import reporWebVitals from './reportWebVitals';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';

ReactDOM.render(
    <React.StrictMode>
        <RouterProvider
            router={router}
        />
    </React.StrictMode>,
    document.getElementById('root')
);
reporWebVitals();