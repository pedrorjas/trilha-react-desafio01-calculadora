import { createGlobalStyle } from 'styled-components'
export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Open Sans';
  }

  :root {
    --body-bg: #fafafa;
  }

  .dark-mode:root {
    --body-bg: #212529;
  }

  body {
    background-color: var(--body-bg);
    transition: background 0.2s linear;
  }

`
