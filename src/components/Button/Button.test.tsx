import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import { ButtonComponent } from './Button.component';


describe('ButtonComponent Tests', () => {
  beforeEach(() => {
    render(<ButtonComponent>Meu Botão</ButtonComponent>)
  })

  it('Shoud be able to render ButtonComponent', () => {
    expect(screen.getByTestId('button-component')).toBeInTheDocument();
  })
})