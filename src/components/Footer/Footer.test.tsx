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

  it('Shoud be able to render LinkedIn Link', () => {
    expect(screen.getByTestId('linkedin-link')).toBeInTheDocument();
  })

  it('Shoud be able to render GitHub Link', () => {
    expect(screen.getByTestId('github-link')).toBeInTheDocument();
  })

  it('Shoud redirect to LinkedIn page', () => {
    const link = screen.getByTestId('linkedin-link')
    expect(link).toHaveAttribute('href', 'https://www.linkedin.com/in/robertsantosti/');
  })
  
  it('Shoud redirect to GitHub page', () => {
    const link = screen.getByTestId('github-link')
    expect(link).toHaveAttribute('href', 'https://github.com/robertsantosti');
  })

})