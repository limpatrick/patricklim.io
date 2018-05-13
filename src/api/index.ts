import * as moment from 'moment';

import { Event, Tag } from './typings';

import { find } from 'lodash';
import { v4 } from 'uuid';

interface Database {
  events: Event[];
}

const tags: Tag[] = [
  { label: 'AngularJS', weight: 40 },
  { label: 'Bootstrap', weight: 60 },
  { label: 'C++', weight: 40 },
  { label: 'Cogito', weight: 25 },
  { label: 'git', weight: 50 },
  { label: 'IBM Watson', weight: 25 },
  { label: 'Java', weight: 25 },
  { label: 'JavaScript', weight: 60 },
  { label: 'JSS', weight: 20 },
  { label: 'Less', weight: 25 },
  { label: 'Lodash', weight: 30 },
  { label: 'Material Design', weight: 25 },
  { label: 'Material UI', weight: 20 },
  { label: 'Node.js', weight: 25 },
  { label: 'PHP', weight: 25 },
  { label: 'React', weight: 20 },
  { label: 'Redux', weight: 20 },
  { label: 'REST API', weight: 25 },
  { label: 'RxJS', weight: 30 },
  { label: 'SOAP', weight: 20 },
  { label: 'SQL', weight: 25 },
  { label: 'TypeScript', weight: 50 },
  { label: 'UI/UX', weight: 25 },
  { label: 'Velocity.js', weight: 20 },
  { label: 'webpack', weight: 20 },
  { label: 'Wordpress', weight: 20 },
  { label: 'Zend Framework 2', weight: 25 },
];

const competences: Tag[] = [
  { label: 'Informatics', weight: 25 },
  { label: 'Information systems architecture', weight: 25 },
  { label: 'Processus modeling', weight: 25 },
  { label: 'Knowledge engineering', weight: 25 },
  { label: 'Information systems security', weight: 25 },
  { label: 'Iterative design', weight: 25 },
  { label: 'Rapid prototyping of softwares', weight: 25 },
  { label: 'Software quality', weight: 25 },
  { label: 'Services oriented architecture', weight: 25 },
];

const getSkill = (label: string) => find(tags, (tag) => tag.label === label) as Tag;

const dateFormat = 'MM/YYYY';

const database: Database = {
  events: [
    {
      id: v4(),
      date: moment('06/2014', dateFormat),
      duration: moment.duration(2, 'years'),
      title: 'Diploma in IT',
      labels: ['Diploma'],
      organization: 'University Institute of Technology of Paris Descartes',
      description: `Two year university programme leading to an Higher National Diploma in IT`,
      skills: [getSkill('Java'), getSkill('C++'), getSkill('PHP'), getSkill('JavaScript')],
    },
    {
      id: v4(),
      date: moment('07/2014', dateFormat),
      duration: moment.duration(10, 'months'),
      title: 'Web developer',
      labels: ['Internship', 'Full time'],
      organization: 'Equinoa',
      description: `Development of various projects under PHP on behalf of several clients (pharmaceutical, investment 
        funds, ...) within a digital web agency.`,
      skills: [getSkill('PHP'), getSkill('Bootstrap'), getSkill('SOAP'), getSkill('Wordpress')],
    },
    {
      id: v4(),
      date: moment('01/2016', dateFormat),
      duration: moment.duration(7, 'months'),
      title: 'Web developer',
      labels: ['Internship', 'Full time'],
      organization: 'Wedoogift',
      description: `Maintenance and improvement of the first version of a web platform in PHP for a start-up company 
      specialized in dematerialization of gift vouchers. Design and development of their new frontend application in 
      JavaScript.`,
      skills: [
        getSkill('JavaScript'),
        getSkill('git'),
        getSkill('Bootstrap'),
        getSkill('Zend Framework 2'),
        getSkill('PHP'),
        getSkill('UI/UX'),
      ],
    },
    {
      id: v4(),
      date: moment('07/2017', dateFormat),
      duration: moment.duration(6, 'months'),
      title: 'Software engineer',
      labels: ['Internship'],
      organization: 'Sopra Banking Software',
      description: `Development of proof of concept in the banking sector integrating solutions in artificial 
      intelligence (IBM Watson, Cogito Expert System) on topics of chatbots and automation of the KYC process within 
      their digital innovation pole.`,
      skills: [
        getSkill('AngularJS'),
        getSkill('Material Design'),
        getSkill('Node.js'),
        getSkill('IBM Watson'),
        getSkill('Cogito'),
        getSkill('REST API'),
      ],
    },
    {
      id: v4(),
      date: moment('09/2017', dateFormat),
      duration: moment.duration(3, 'years'),
      title: `Master's Degree in Engineering`,
      labels: ['Engineering degree'],
      organization: 'University of Technology of Troyes',
      description: `Master's Degree in Engineering in the field of informatics and information systems with a 
      specialization in software management.`,
      skills: [getSkill('Node.js'), getSkill('JavaScript'), getSkill('Java'), getSkill('SQL'), ...competences],
    },
    {
      id: v4(),
      date: moment('02/2018', dateFormat),
      duration: moment.duration(5, 'months'),
      title: 'Front end developer',
      labels: ['Full time'],
      organization: 'Societe Generale Corporate and Investment Banking',
      description: `Intervention on the internal CRM of Societe Generale and development on the laboratory part of the 
      CRM, realization of POC on topics of mass mailing and a dashboard around the KYC process.`,
      skills: [
        getSkill('AngularJS'),
        getSkill('TypeScript'),
        getSkill('Bootstrap'),
        getSkill('RxJS'),
        getSkill('Lodash'),
        getSkill('Less'),
      ],
    },
    {
      id: v4(),
      date: moment('04/2018', dateFormat),
      duration: moment.duration(0, 'months'),
      title: 'patricklim.fr',
      labels: ['Project'],
      description: `Development of my personal website.`,
      skills: [
        getSkill('React'),
        getSkill('TypeScript'),
        getSkill('Material UI'),
        getSkill('Redux'),
        getSkill('Lodash'),
        getSkill('Velocity.js'),
        getSkill('webpack'),
        getSkill('JSS'),
      ],
    },
  ],
};

export const fetchEvents = () => new Promise<Event[]>((resolve) => resolve(database.events));
