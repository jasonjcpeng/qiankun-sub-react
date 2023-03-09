import App from './pages/index/App';
import Team from './pages/team/Team';

export const routers =  [
    {
      path: "/",
      element: <App />,
      loader: async ()=>{ return null},
    },
    {
      path: "team",
      element: <Team />,
      loader:  async ()=>{ return null},
    },
  ]