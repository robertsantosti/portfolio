import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { MenuComponent } from './Menu.component'

describe('MenuComponent Tests', () => {
  beforeEach(() => {
    render(<MenuComponent/>)
  })

  it('Shoud be able to render MenuComponent', () => {
    expect(screen.getByTestId('menu'));
  })

})