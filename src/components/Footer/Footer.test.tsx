import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import { FooterComponent } from './Footer.component';

describe('FooterComponent Tests', () => {
  beforeEach(() => {
    render(<FooterComponent/>)
  })

  it('Shoud be able to render FooterComponent', () => {
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  })
})