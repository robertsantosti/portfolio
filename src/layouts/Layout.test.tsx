import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { Layout } from './Layout.component'

describe('Layout Tests', () => {
  beforeEach(() => {
    render(<Layout/>)
  })

  it('Shoud be able to render HeaderComponent', () => {
    expect(screen.getByTestId('header'));
  })

  it('Shoud be able to render FooterComponent', () => {
    expect(screen.getByTestId('footer'));
  })
})