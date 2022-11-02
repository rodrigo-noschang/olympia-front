import styled  from "styled-components";

const UserEditContainer = styled.div`

    .user-update-container {
        display: flex;
        justify-content: space-between;
        margin: 20px 0 5px;
    }

    .user-info-label {
        font-family: var(--text-font);
    }

    .user-input-container {
        margin-top: 5px;
    }

    .user-info-value {
        width: 60px;
    }

    .user-info-update {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .user-info-update-clickable {
        border: none;
        border-bottom: 1px solid transparent;
        margin-right: ${props => props.loading ? '5px' : '0'};
    }

    .user-info-update-clickable:hover {
        border-bottom-color: #4d4dbd;
        filter: brightness(1.2);
        transition: .3s;
    }
`;

export default UserEditContainer;