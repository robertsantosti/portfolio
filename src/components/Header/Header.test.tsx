import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import { HeaderComponent } from './Header.component'

describe('HeaderComponents Tests', () => {
  beforeEach(() => {
    render(<HeaderComponent/>)
  })

  it('Shoud be able to render HeaderComponent', () => {
    expect(screen.getByTestId('header'));
  })

})