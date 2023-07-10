import styled from "styled-components";
import { getColor } from "../../../utils/styles/style";
import { Modal } from "antd";

export const ModalWrapper = styled(Modal)`
  .ant-modal-content {
    padding: 0;

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

// export const Overlay = styled.div`
//   position: fixed;
//   width: 100vw;
//   height: 100vh;
//   top: 0;
//   left: 0;

//   display: flex;
//   align-items: center;
//   justify-content: center;

//   transition: 1s all;

//   background-color: rgba(0,0,0,.5);
// `

// export const Modal = styled.div`
//   display: flex;
//   width: 30rem;
//   flex-direction: column;
//   align-items: flex-start;
//   border-radius: 10px;
//   background-color: #fff;
//   color: #666;
// `

// export const Header = styled.div`
//   display: flex;
//   height: 50px;
//   justify-content: center;
//   align-items: center;
//   gap: 0.25rem;
//   align-self: stretch;
//   border-bottom: 0.5px solid ${getColor('primary')};
// `

// export const Title = styled.p`
//   color: ${getColor('primary')};
//   font-size: 1rem;
//   font-style: normal;
//   font-weight: 700;
//   line-height: normal;
// `

// export const Main = styled.div`
  // display: flex;
  // padding: 1rem;
  // flex-direction: column;
  // justify-content: center;
  // align-items: center;
  // gap: 1rem;
  // align-self: stretch;

//   p {
//     font-size: 1rem;
//     font-style: normal;
//     font-weight: 300;
//     line-height: normal;
//   }
// `

// export const Footer = styled.div`
  // display: flex;
  // height: 50px;
  // padding: 0.625rem;
  // justify-content: flex-end;
  // align-items: center;
  // gap: 0.625rem;
  // align-self: stretch;
  // border-top: 0.5px solid ${getColor('primary')};
// `

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