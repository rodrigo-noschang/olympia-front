import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root {
        --background-black: #302E31;
        --text-red: #E54E47;
        --title-font: 'Bangers', cursive;
        --text-font: 'Urbanist', sans-serif;
    }

    h1, h2, h3, header, form, fieldset, input, label, section, p, div, ul, li, button, span {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: var(--text-font);
    }

    h1, h2, h3, header, label, button, span {
        font-family: var(--title-font);
    }

    li {
        list-style-type: none;
    }

    input {
        outline: none;
    }
`;

export default GlobalStyle;