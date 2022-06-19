import { FC } from "react";
import { NavLink } from "react-router-dom";
import { StyledNavBar } from "./Header.styled";

export const NavBar: FC =()=>{
    return <StyledNavBar>
        <NavLink to="/train">Тренировать слова</NavLink>
        <NavLink to="/words">Список слов</NavLink>
    </StyledNavBar>
}