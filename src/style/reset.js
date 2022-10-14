import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root {
        --background-black: #302E31;
        --text-red: #E54E47;
        --success-green: #a4cea4;
        --fail-red: #e9aaaa;
        --title-font: 'Bangers', cursive;
        --text-font: 'Urbanist', sans-serif;
        --carbs-green: #867f44;
        --protein-red: #803a3a;
        --fat-orange: #94704e;
        --light-grey: #b8b1b1;
        --calories-orange: #615641;
    }

    h1, h2, h3, header, form, fieldset, input, label, section, p, div, ul, li, button, span, 
    table, th, tr, td {
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