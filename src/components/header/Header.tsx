import { FC, useState } from "react"
import { LogoLink, MenuBtn, MobileMenu, StyledHeader, UserMenu,  UserNavListWrapper } from "./Header.styled"
import logoImg from "images/logo.svg"
import userImg from "images/user.png"
import { FiMenu } from 'react-icons/fi';
import { MdClose} from 'react-icons/md';
import openUserMenuImg from "images/openUserMenu.svg"
import { NavBar } from "./NavBar";
import { NavLink } from "react-router-dom";
import { UserNav } from "./UserNav";

export const Header: FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [isUserMenuOpen, setIsUserMenuOpen] = useState<boolean>(false)
    
    
    return <StyledHeader>
        <LogoLink className="logo" to="/">
            <img src={logoImg} alt="langui"/>
            <span>Langui</span>
        </LogoLink>
        <NavBar/>
        <UserMenu onClick={()=> setIsUserMenuOpen(state=>!state)}>
            <img className="user-photo" src={userImg} alt="User"/>
            <span>User name </span>
            <img src={openUserMenuImg} alt="Open"/>
        </UserMenu>
        {isUserMenuOpen && 
        <UserNavListWrapper>
            <UserNav/>
            </UserNavListWrapper>}
        <MenuBtn onClick={()=> setIsMenuOpen(state=>!state)}>
            {isMenuOpen ? <MdClose style={{height: "40px", width: "40px"}}/> :<FiMenu style={{height: "40px", width: "40px"}}/>}
        </MenuBtn>
        {isMenuOpen && <MobileMenu>
            <li className="mobile-item-user">
                <span>Профиль <img src={openUserMenuImg} alt="Open" height="10" width="10"/></span>
                <UserNav/>
                </li>
            <li><NavLink to="/train">Тренировать слова</NavLink></li>
            <li><NavLink to="/words">Список слов</NavLink></li>
        </MobileMenu>}
    </StyledHeader>
}
