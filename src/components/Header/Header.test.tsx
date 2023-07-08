import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import { HeaderComponent } from './Header.component'
import { BrowserRouter } from 'react-router-dom'

describe('HeaderComponent Tests', () => {
  beforeEach(() => {
    render(<HeaderComponent/>, { wrapper: BrowserRouter })
  })

  it('Shoud be able to render HeaderComponent', () => {
    expect(screen.getByTestId('header')).toBeInTheDocument();
  })

})