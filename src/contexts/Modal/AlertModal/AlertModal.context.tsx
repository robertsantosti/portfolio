import { createContext, useState } from 'react';
import { IChildren } from '../../../utils/interfaces/context';
import { AlertModalComponent } from '../../../components/Modal/AlertModal/AlertModal.component';
import { IAlertModal, IAlertModalContext } from '../../../interfaces/AletaModal.interface';

export const AlertModalContext = createContext<IAlertModalContext>({
  dataAlertModal: {
    title: 'Alerta',
    content: <p>Meu Alerta</p>,
    cancelButton: {
      show: true,
      label: 'Cancelar',
    },
    successButton: {
      show: true,
      label: 'Confirmar',
    },
  },
  showAlertModal: false,
  setShowAlertModal: () => {return},
  setDataAlertModal: () => {return},
})

export const AlertModalProvider = ({ children }: IChildren) => {
  const [showAlertModal, setShowAlertModal] = useState<boolean>(false);
  const [dataAlertModal, setDataAlertModal] = useState<IAlertModal>({
    title: 'Alerta',
    content: <p>Meu Alerta</p>,
    cancelButton: {
      show: true,
      label: 'Cancelar',
    },
    successButton: {
      show: true,
      label: 'Confirmar',
    },
  });
  
  return(
    <AlertModalContext.Provider value={{ showAlertModal, setShowAlertModal, dataAlertModal, setDataAlertModal }}>
      { children }

      <AlertModalComponent/>
    </AlertModalContext.Provider>
  )
}