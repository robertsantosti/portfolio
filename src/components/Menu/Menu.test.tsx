import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { MenuComponent } from './Menu.component'
import { BrowserRouter } from 'react-router-dom'

describe('MenuComponent Tests', () => {
  beforeEach(() => {
    render(<MenuComponent/>, {wrapper: BrowserRouter})
  })

  it(`Shoud be able to render MenuComponent`, () => {
    expect(screen.getByTestId('menu')).toBeInTheDocument();
  })

  it(`Shoud be able to render MenuItem 'Home'`, () => {
    expect(screen.getByTestId('home-route')).toBeInTheDocument();
  })

  it(`Shoud be able to render MenuItem 'Projetos'`, () => {
    expect(screen.getByTestId('projects-route')).toBeInTheDocument();
  })

  it(`Shoud be able to render MenuItem 'Carreiras'`, () => {
    expect(screen.getByTestId('carrer-route')).toBeInTheDocument();
  })

  it(`Shoud be able to render MenuItem Contact`, () => {
    expect(screen.getByTestId('contact-route')).toBeInTheDocument();
  })

  it(`Shoud be MenuItem 'Home' redirect to '/'`, () => {
    const trigger = screen.getByTestId('home-route');
    expect(trigger).toHaveAttribute('href', '/')
  })

  it(`Shoud be MenuItem 'Projects' redirect to '/projects'`, () => {
    const trigger = screen.getByTestId('projects-route');
    expect(trigger).toHaveAttribute('href', '/projects')
  })

  it(`Shoud be MenuItem 'Carrer' redirect to '/carrer'`, () => {
    const trigger = screen.getByTestId('carrer-route');
    expect(trigger).toHaveAttribute('href', '/carrer')
  })

  it(`Shoud be MenuItem 'Contact' redirect to '/contact'`, () => {
    const trigger = screen.getByTestId('contact-route');
    expect(trigger).toHaveAttribute('href', '/contact')
  })

})