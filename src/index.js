import './public-path';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import {routers} from './router';
import './index.css';


const router = createBrowserRouter(routers,{
  basename:window.__POWERED_BY_QIANKUN__ ? '/react' : '/'
});


function render(props) {
  const root = ReactDOM.createRoot(props.container ? props.container:document.getElementById('root'));

  root.render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}
if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}

export async function bootstrap() {
  console.log('react app bootstraped');
}

export async function mount(props) {
  window.proxy.apppp = 'react'
  console.log('react WINDOW',window.WINDOW);
  console.log('react proxy',window.proxy);
  console.log('react props', props);
  render(props);
}

export async function unmount(props) {
}