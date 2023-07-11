import { useContext } from 'react';

import { AlertModalContext } from '../../../contexts/Modal/AlertModal/AlertModal.context';
import * as Styled from './AlertModal.style';

export const AlertModalComponent = () => {
  const { dataAlertModal, showAlertModal, setShowAlertModal } = useContext(AlertModalContext);

  const close = () => {
    setShowAlertModal(false);
  }
  
  const submit = () => {
    const { action } = dataAlertModal;
 
    if(action) {
      action.reset();
      action.dispatch();
    }

    setShowAlertModal(false);
  }

  const getFooter = () => {
    const footer = [];

    if(dataAlertModal.cancelButton?.show) {
      const button = <Styled.Button key='cancel' $color='danger' onClick={close}>{dataAlertModal.cancelButton.label}</Styled.Button>
      footer.push(button);
    }

    if(dataAlertModal.successButton?.show) {
      const button = <Styled.Button key='confirm' $color='primary' onClick={submit}>{dataAlertModal.successButton.label}</Styled.Button>
      footer.push(button);
    }

    return footer;
  }

  return( 
    <Styled.ModalWrapper
      closeIcon={null}
      closable={false}
      title={ dataAlertModal.title }
      open={ showAlertModal }
      footer={getFooter()}
    >
      { dataAlertModal.content }
    </Styled.ModalWrapper>
  )
};