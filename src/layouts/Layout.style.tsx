import styled from "styled-components";

export const Layout = styled.div`
    position: relative;
    max-width: 1280px;
    height: 100%;
    display: flex;
    flex: 1;
    flex-direction: column;

    margin: 0 auto;

    main {
      display: flex;
      height: 100%;

      place-content: center;
      place-items: center;

      padding: 2rem;
    }
`