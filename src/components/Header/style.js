import styled from 'styled-components';

const HeaderContainer = styled.header`
    background-color: var(--background-black);
    padding: 20px 0;

    .header-title {
        color: var(--text-red);
        text-align: center;
        font-size: 40px;
    }

    @media only screen and (min-width: 600px) {
        .header-title {
            font-size: 45px;
        }
    }
`;

export default HeaderContainer