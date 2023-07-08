import { IMenu } from "../../interfaces/Menu.interface";

export const MENUS: Array<IMenu> = [
  {
    id: 1,
    title: 'Home',
    path: '/',
    testId: 'home-route'
  },
  {
    id: 2,
    title: 'Projetos',
    path: '/projects',
    testId: 'projects-route'
  },
  {
    id: 3,
    title: 'Carreira',
    path: '/carrer',
    testId: 'carrer-route'
  },
  {
    id: 4,
    title: 'Contato',
    path: '/contact',
    testId: 'contact-route'
  },
]