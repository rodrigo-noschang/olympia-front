import styled from 'styled-components';

const HeaderContainer = styled.header`
    background-color: var(--background-black);
    padding: 20px 0;
    position: relative;

    .header-title {
        color: var(--text-red);
        text-align: center;
        font-size: 40px;
    }

    .header-logout-container {
        position: absolute;
        top: 20px;
        right: 15px;
        display: flex;
        flex-direction: column;
        align-items: center;
        color: #FFF;
        cursor: pointer;
    }

    .header-logout-container:hover {
        transform: scale(1.1);
        transition: .2s;
    }

    .header-logout-container:active {
        color: #F3F3F3;
    }

    .header-logout-container svg {
        font-size: 22px;
        margin-bottom: 10px;
    }

    .header-logout-text {
        font-size: 15px;
    }

    @media only screen and (min-width: 600px) {
        .header-title {
            font-size: 45px;
        }

        .header-logout-container {
            right: 25px;
        }
    }
`;

export default HeaderContainer