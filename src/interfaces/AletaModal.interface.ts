export interface IAlertModal {
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

export interface IAlertModalContext {
  dataAlertModal: IAlertModal;
  showAlertModal: boolean;
  setShowAlertModal: React.Dispatch<React.SetStateAction<boolean>>;
  setDataAlertModal: React.Dispatch<React.SetStateAction<IAlertModal>>;
}