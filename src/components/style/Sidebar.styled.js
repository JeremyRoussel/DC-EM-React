import styled from 'styled-components';

export const StyledMenu = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: ${({ theme }) => theme.primaryLight};
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
    height: 120vh;
    text-align: top;
    padding: 1rem;
    position: absolute;
    top: 0 px;
    left: 0;
    transition: transform 0.3s ease-in-out;
    font-family: "Nova Square";
    @media (max-width: ${({ theme }) => theme.mobile}) {
        width: 100%;
    }
    a {
        font-size: 2rem;
        text-transform: uppercase;
        padding: 0;
        font-weight: bold;
        letter-spacing: 0.5rem;
        color: ${({ theme }) => theme.primaryDark};
        text-decoration: none;
        transition: color 0.3s linear;
        @media (max-width: ${({ theme }) => theme.mobile}) {
            font-size: 1rem;
            text-align: center;
        }
        @media (max-width: ${({ theme }) => theme.mobile2}) {
            font-size: .7rem;
            text-align: center;
        }
        &:hover {
            color: ${({ theme }) => theme.primaryHover};
        }
    }
`;


