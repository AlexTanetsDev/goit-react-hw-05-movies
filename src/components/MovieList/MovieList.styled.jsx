import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding-left: 5px;
    margin-top:10px;
`

export const StyledLink = styled(NavLink)`
    text-decoration: none;
    color: black;
    font-size: 18px;
    font-weight: 500;
    :hover{
        color: #fc7d07;
    }
`