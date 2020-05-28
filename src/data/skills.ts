import React from 'react';
import antdesignIcon from '@iconify/icons-ant-design/ant-design';
import lessIcon from '@iconify/icons-cib/less';
import sassIcon from '@iconify/icons-cib/sass-alt';
import nodejsIcon from '@iconify/icons-fa-brands/node';
import bootstrapActiveIcon from '@iconify/icons-logos/bootstrap';
import dockerActiveIcon from '@iconify/icons-logos/docker-icon';
import gatsbyActiveIcon from '@iconify/icons-logos/gatsby';
import graphqlActiveIcon from '@iconify/icons-logos/graphql';
import javascriptActiveIcon from '@iconify/icons-logos/javascript';
import lessActiveIcon from '@iconify/icons-logos/less';
import materialuiActiveIcon from '@iconify/icons-logos/material-ui';
import mysqlActiveIcon from '@iconify/icons-logos/mysql';
import nodejsActiveIcon from '@iconify/icons-logos/nodejs';
import postgresqlActiveIcon from '@iconify/icons-logos/postgresql';
import reactActiveIcon from '@iconify/icons-logos/react';
import reduxActiveIcon from '@iconify/icons-logos/redux';
import sassActiveIcon from '@iconify/icons-logos/sass';
import typescriptActiveIcon from '@iconify/icons-logos/typescript-icon';
import webpackActiveIcon from '@iconify/icons-logos/webpack';
import bootstrapIcon from '@iconify/icons-simple-icons/bootstrap';
import dockerIcon from '@iconify/icons-simple-icons/docker';
import gatsbyIcon from '@iconify/icons-simple-icons/gatsby';
import graphqlIcon from '@iconify/icons-simple-icons/graphql';
import javascriptIcon from '@iconify/icons-simple-icons/javascript';
import materialuiIcon from '@iconify/icons-simple-icons/material-ui';
import postgresqlIcon from '@iconify/icons-simple-icons/postgresql';
import reactIcon from '@iconify/icons-simple-icons/react';
import reduxIcon from '@iconify/icons-simple-icons/redux';
import typescriptIcon from '@iconify/icons-simple-icons/typescript';
import webpackIcon from '@iconify/icons-simple-icons/webpack';
import mysqlIcon from '@iconify/icons-whh/mysqltwo';
import { Icon } from '@iconify/react';

export type Skill = {
  name: string;
  default: IconType | ImgType;
  active: IconType | ImgType;
};

export type IconType = {
  icon: React.ComponentProps<typeof Icon>['icon'];
  height: React.ComponentProps<typeof Icon>['height'];
  width?: React.ComponentProps<typeof Icon>['width'];
};

export type ImgType = { filename: string };

export const skills: Skill[] = [
  {
    name: 'React',
    default: { icon: reactIcon, height: '2.25rem' },
    active: { icon: reactActiveIcon, height: '2rem' },
  },
  {
    name: 'Redux',
    default: { icon: reduxIcon, height: '2.09375rem' },
    active: { icon: reduxActiveIcon, height: '2rem' },
  },
  {
    name: 'GraphQL',
    default: { icon: graphqlIcon, height: '2rem' },
    active: { icon: graphqlActiveIcon, height: '2.0025rem' },
  },
  {
    name: 'Gatsby',
    default: { icon: gatsbyIcon, height: '2rem' },
    active: { icon: gatsbyActiveIcon, height: '2rem' },
  },
  {
    name: 'Node.js',
    default: { icon: nodejsIcon, height: '2.6rem' },
    active: { icon: nodejsActiveIcon, height: '2rem' },
  },
  {
    name: 'Material UI',
    default: { icon: materialuiIcon, height: '2.5rem' },
    active: { icon: materialuiActiveIcon, height: '2rem' },
  },
  {
    name: 'Ant Design',
    default: { icon: antdesignIcon, height: '2rem' },
    active: { filename: 'ant-design.png' },
  },
  {
    name: 'Bootstrap',
    default: { icon: bootstrapIcon, height: '2rem' },
    active: { icon: bootstrapActiveIcon, height: '2rem' },
  },
  {
    name: 'JavaScript',
    default: { icon: javascriptIcon, height: '2rem' },
    active: { icon: javascriptActiveIcon, height: '2rem' },
  },
  {
    name: 'TypeScript',
    default: { icon: typescriptIcon, height: '2rem' },
    active: { icon: typescriptActiveIcon, height: '2rem' },
  },
  {
    name: 'PostgreSQL',
    default: { icon: postgresqlIcon, height: '2rem' },
    active: { icon: postgresqlActiveIcon, height: '2rem', width: '2rem' },
  },
  {
    name: 'MySQL',
    default: { icon: mysqlIcon, height: '2rem' },
    active: { icon: mysqlActiveIcon, height: '2rem' },
  },
  {
    name: 'Less',
    default: { icon: lessIcon, height: '2rem' },
    active: { icon: lessActiveIcon, height: '2rem' },
  },
  {
    name: 'Sass',
    default: { icon: sassIcon, height: '2rem' },
    active: { icon: sassActiveIcon, height: '2rem' },
  },
  {
    name: 'Docker',
    default: { icon: dockerIcon, height: '2.77rem' },
    active: { icon: dockerActiveIcon, height: '2rem' },
  },
  {
    name: 'Webpack',
    default: { icon: webpackIcon, height: '2rem' },
    active: { icon: webpackActiveIcon, height: '2.1rem' },
  },
];
