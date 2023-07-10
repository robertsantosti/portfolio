import { createContext, useState } from 'react';
import { IChildren } from '../../../utils/interfaces/context';
import { AlertModalComponent } from '../../../components/Modal/AlertModal/AlertModal.component';

interface IAlertModal {
  title: string;
  content: any;
  cancelButton?: {
    show: boolean,
    label: string,
  },
  successButton?: {
    show: boolean,
    label: string,
  }
}

interface IAlertModalContext {
  dataAlertModal: IAlertModal;
  showAlertModal: boolean;
  setShowAlertModal: React.Dispatch<React.SetStateAction<boolean>>;
  setDataAlertModal: React.Dispatch<React.SetStateAction<IAlertModal>>;
}

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