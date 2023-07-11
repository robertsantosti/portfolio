export interface IAlertModal {
  title: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  content: any;
  cancelButton?: {
    show: boolean,
    label: string,
  },
  successButton?: {
    show: boolean,
    label: string,
  },
  action?: {
    reset: () => void,
    dispatch: string,
  },
}

export interface IAlertModalContext {
  dataAlertModal: IAlertModal;
  showAlertModal: boolean;
  setShowAlertModal: React.Dispatch<React.SetStateAction<boolean>>;
  setDataAlertModal: React.Dispatch<React.SetStateAction<IAlertModal>>;
}