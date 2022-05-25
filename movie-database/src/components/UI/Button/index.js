// import css styled component
import styled, { css } from "styled-components";

// Buat object warna
const colors = {
    primary: "#4361ee",
    secondary: "#b5179e",
}

// Buat component button
const Button = styled.button`
    padding: 0.8rem 2rem;
    border: none;
    border-radius: 10px;
    color: #fff;
    background-color: #4361ee;
    cursor: pointer;

    /* 
     * Akses props variant melalui function
     */
    background-color: ${({ variant, theme }) => theme.colors[variant] || theme.colors.primary};

    /* 
     * PROPS FULL
     */
    ${(props) => props.full && css`
        display: block;
        width: 100%;
    `}

    /* 
     * Props sm
     */
    ${(props) => props.full && css`
        font-size: 0.8rem;
        padding: 0.2rem 0.5rem;
    `}

    /* 
     * Props md
     */
    ${(props) => props.full && css`
        font-size: 1rem;
        padding: 0.5rem 1rem;
    `}

    /* 
     * Props lg
     */
    ${(props) => props.full && css`
        font-size: 1.3rem;
        padding: 0.5rem 1rem;
    `}
`;

// Export Button
export default Button;