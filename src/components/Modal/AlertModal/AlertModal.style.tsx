import styled from "styled-components";
import { getColor } from "../../../utils/styles/style";
import { Modal } from "antd";

export const ModalWrapper = styled(Modal)`
  .ant-modal-content {
    padding: 0;
    box-shadow: 5px 5px 10px rgba(255, 255, 255, 0.5);

    .ant-modal-header {
      display: flex;
      height: 42px;
      justify-content: center;
      align-items: center;
      gap: 0.25rem;
      align-self: stretch;
      border-bottom: 0.5px solid ${getColor('primary')};
      margin: 0;
    }

    .ant-modal-body {
      display: flex;
      padding: 1rem;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      align-self: stretch;
    }

    .ant-modal-footer {
      display: flex;
      height: 42px;
      padding: 0.625rem;
      justify-content: flex-end;
      align-items: center;
      gap: 0.625rem;
      align-self: stretch;
      border-top: 0.5px solid ${getColor('primary')};
      margin: 0;
    }
  }
`

export const Button = styled.button<{$color: string}>`
  display: flex;
  flex: 1 0 0;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  padding: 0.25rem 1rem;

  border: 0;
  border-radius: 0.3125rem;

  color: ${getColor('light')};
  background-color: ${({$color}) => { return getColor($color) }};

  cursor: pointer;
  opacity: .9;

  transition: 1s all;

  &:hover {
    opacity: 1;
  }
`