import styled from "styled-components"

const UserInfoContainer = styled.header`
    display: flex;
    flex-direction: column;    

    .user-info-name {
        text-align: center;
        font-size: 30px;
    }

    .user-info-macros-container {
        margin-top: 30px;
        font-size: 19px;
        align-self: center;
        width: 100%;
        max-width: 350px;
    }

    .user-info-macros {
        margin: 15px 0;
        display: flex;
        justify-content: space-between;
    }

    .user-info-macros span {
        font-family: var(--text-font);
    }

    .carbs {
        color: var(--carbs-green);
    }

    .protein {
        color: var(--protein-red);
    }

    .fat {
        color: var(--fat-orange);
    }

    .user-info-consumed-calories-container, .user-info-required-calories-container {
        display: flex;
        justify-content: space-between;
        font-size: 20px;
        color: var(--calories-orange);
        border-top: 2px solid var(--calories-orange);
        padding: 5px 0;
    }

    .user-info-required-calories-container {
        margin-top: 20px;
        color: var(--background-black);
        border-top-color: var(--background-black);
    }

    .user-info-calories-difference {
        font-size: 15px;
        text-align: center;
        font-style: italic;;
    }

    @media only screen and (min-width: 950px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        .user-info-macros-container {
            margin-top: 0;
        }
    }
`;

export default UserInfoContainer;