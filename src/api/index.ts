import * as moment from 'moment';

import { Event, Tag } from './typings';

import { find } from 'lodash';
import { v4 } from 'uuid';

interface Database {
  events: Event[];
  tags: Tag[];
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
  { label: 'Lodash', weight: 30 },
  { label: 'Material Design', weight: 25 },
  { label: 'Node.js', weight: 25 },
  { label: 'PHP', weight: 25 },
  { label: 'REST API', weight: 25 },
  { label: 'RxJS', weight: 30 },
  { label: 'SOAP', weight: 20 },
  { label: 'SQL', weight: 25 },
  { label: 'TypeScript', weight: 50 },
  { label: 'UI/UX', weight: 25 },
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

export const database: Database = {
  events: [
    {
      id: v4(),
      date: moment('06/2014', 'MM/YYYY'),
      duration: moment.duration(2, 'years'),
      title: 'IT Diploma',
      labels: ['Diploma'],
      organization: 'University Institute of Technology of Paris Descartes',
      description: `Two year university programme leading to an Higher National Diploma in IT`,
      skills: [getSkill('Java'), getSkill('C++'), getSkill('PHP'), getSkill('JavaScript')],
    },
    {
      id: v4(),
      date: moment('07/2014', 'MM/YYYY'),
      duration: moment.duration(10, 'months'),
      title: 'Web PHP developer',
      labels: ['Internship', 'Full time'],
      organization: 'Equinoa',
      description: `Development of various projects under PHP on behalf of several clients (pharmaceutical, investment 
        funds, ...) within a digital web agency.`,
      skills: [getSkill('PHP'), getSkill('Bootstrap'), getSkill('SOAP'), getSkill('Wordpress')],
    },
    {
      id: v4(),
      date: moment('01/2016', 'MM/YYYY'),
      duration: moment.duration(7, 'months'),
      title: 'Full-stack developer',
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
      date: moment('07/2017', 'MM/YYYY'),
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
      date: moment('09/2017', 'MM/YYYY'),
      duration: moment.duration(3, 'years'),
      title: 'Engineering school',
      labels: ['Engineering degree'],
      organization: 'University of Technology of Troyes',
      description: `Master's Degree in Engineering in the field of informatics and information systems with a 
      specialization in software management.`,
      skills: [getSkill('Node.js'), getSkill('JavaScript'), getSkill('Java'), getSkill('SQL'), ...competences],
    },
    {
      id: v4(),
      date: moment('02/2018', 'MM/YYYY'),
      duration: moment.duration(5, 'months'),
      title: 'Front end developer',
      labels: ['Full time'],
      organization: 'Société Générale',
      description: `Development of a dashboard in the field of the KYC process and which is integrated within an 
      internal CRM of the bank.`,
      skills: [
        getSkill('AngularJS'),
        getSkill('TypeScript'),
        getSkill('Bootstrap'),
        getSkill('RxJS'),
        getSkill('Lodash'),
      ],
    },
  ],
  tags,
};

export const fetchEvents = () => new Promise<Event[]>((resolve) => resolve(database.events));
