import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import React from 'react';

import { IButton } from '../../utils/interfaces/button';
import { Button } from './Buttton.style';

export const ButtonComponent: React.FC<IButton> = ({ isLoading, children, ...rest }) => {

  return(
    <Button data-testid="button-component" { ...rest }>
      { isLoading 
        ? <Spin indicator={<LoadingOutlined spin/>}/>
        : children 
      }
    </Button>
  )
}