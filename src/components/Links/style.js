import styled from 'styled-components';

const LinksContainer = styled.footer`
    margin: 60px auto 0;
    max-width: 900px;
    border-top: 2px solid var(--text-red);
    padding-top: 10px;

    .links-list {
        /* padding-left: 20px; */
    }

    .links-title {
        font-family: var(--text-font);
    }

    .links-list-item {
        margin: 15px 0;
    }

    .links-list-link {
        text-decoration: underline;
        margin-right: 10px;
        font-weight: bold;
    }

    .links-list-link:visited {
        color: var(--background-black);
    }

    .links-footer {
        font-size: 18px;
    }

    .twin {
        margin-left: 10px;
        font-weight: bold;
        text-decoration: none;
        color: var(--text-red);
        position: relative;
    }

    .twin::before {
        content: '';
        display: block;
        height: 2px;
        width: 100%;
        transform: scaleX(0);
        position: absolute;
        background-color: var(--text-red);
        left: 0;
        bottom: -2px;
        transform-origin: left;
        transition: .2s;
    }

    .twin:hover::before {
        transform: scaleX(1);
        transition: .3s;
    }

    .twin:visited {
        color: var(--text-red);
    }
`;

export default LinksContainer;