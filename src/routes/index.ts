import { ComponentType } from 'react';
import Contact from 'components/views/Contact';
import Home from 'components/views/Home';
import Timeline from 'components/views/Timeline';

const routes: Route[] = [
  {
    path: '/',
    component: Home,
    label: 'Home',
  },
  {
    path: '/timeline',
    component: Timeline,
    label: 'Timeline',
  },
  {
    path: '/contact',
    component: Contact,
    label: 'Contact',
  },
];

export interface Route {
  path: string;
  component: ComponentType;
  label: string;
}

export default routes;
