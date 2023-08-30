import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import { ErrorPage } from './Error.page';
import { BrowserRouter } from 'react-router-dom';

describe('ErrorPage Tests', () => {
  beforeEach(() => {
    render(<ErrorPage/>, { wrapper: BrowserRouter });
  })

  it('Shoud be able to render ErrorPage', () => {
    expect(screen.getByTestId('error-wrapper-testId')).toBeInTheDocument()
  })
})