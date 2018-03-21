import { ComponentType } from 'react';
import Contact from 'components/Contact/Contact';
import Home from 'components/Home/Home';
import Timeline from 'components/Timeline/Timeline';

const routes: AppRoute[] = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/timeline',
    component: Timeline,
  },
  {
    path: '/contact',
    component: Contact,
  },
];

export interface AppRoute {
  path: string;
  component: ComponentType;
}

export default routes;
