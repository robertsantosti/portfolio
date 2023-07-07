import React, { MouseEvent } from 'react';

import { IButton } from '../../utils/interfaces/button';
import { Button } from './Buttton.style';

export const ButtonComponent: React.FC<IButton> = ({ children, ...rest }) => {
  return(
    <Button data-testid="button-component" { ...rest }>
      { children }
    </Button>
  )
}