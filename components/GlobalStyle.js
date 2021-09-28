import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

html,
body {
  background-color: #12121C;
  padding: 0;
  margin: 0;
  /* font-family: 'Sora', sans-serif; */
  font-family: 'Sora', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}

code {
  background: #f7f8fa;
  border: 1px solid #f4f6f8;
  color: #041434;
  width: 100%;
  padding: 10px 20px;

}
`;
