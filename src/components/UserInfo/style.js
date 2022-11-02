import styled from "styled-components"

const UserInfoContainer = styled.header`
    display: flex;
    flex-direction: column;    

    .user-info-container {
        width: 100%;
        max-width: 350px;
        margin: 0 auto;
    }

    .user-info-name {
        text-align: center;
        font-size: 30px;
    }

    .user-info-data-container {
        display: flex;
        justify-content: space-between;
        margin: 20px 0 5px;
    }

    .user-info-update {
        font-size: 13px;
        text-align: center;
    }

    .user-update-error-message {
        font-size: 11px;
        color: red;
        text-align: center;
        font-style: italic;
    }

    .user-info-update-clickable {
        font-family: var(--text-font);
        color: #4d4dbd;
        cursor: pointer;
        border-bottom: 1px solid transparent;
    }

    .user-info-update-clickable:hover {
        border-bottom-color: #4d4dbd;
        filter: brightness(1.2);
        transition: .3s;
    }

    .user-info-label {
        font-weight: bold;
        margin-bottom: 7px;
    }

    .user-info-value {
        text-align: center;
    }

    .user-info-macros-container {
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

        .user-info-container {
            margin: 0;
        }
    }
`;

export default UserInfoContainer;