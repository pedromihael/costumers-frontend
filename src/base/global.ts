import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    outline: 0;
    padding: 0;
    scroll-behavior: smooth;
    
    &::-webkit-scrollbar {
      display: none;
    }
  }

  body {
    background: ${(props: { theme: { colors: { background: any; }; }; }) => props.theme.colors.background};
    color: ${(props: { theme: { colors: { color: any; }; }; }) => props.theme.colors.color};
    font-family: 'Oxygen', sans-serif;
    font-size: 21px;
    font-weight: 300;
    overflow-x: hidden;

    -webkit-font-smoothing: antialiased;
  }
`;