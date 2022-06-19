import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledHeader = styled.header`
position:relative;
display: flex;
align-items: center;
padding: 0 16px;
font-weight: 400;
font-size: 14px;
line-height: 1.22;
background-color: ${({theme})=>theme.colors.headerBG};
box-shadow: -5px 5px 10px rgba(220, 220, 220, 0.2), 5px -5px 10px rgba(220, 220, 220, 0.2), -5px -5px 10px rgba(255, 255, 255, 0.9), 5px 5px 13px rgba(220, 220, 220, 0.9), inset 1px 1px 2px rgba(255, 255, 255, 0.3), inset -1px -1px 2px rgba(220, 220, 220, 0.5);
@media screen and (min-width: 768px){
    padding: 0 30px;
}
`

export const LogoLink = styled(Link)`
    display: inline-flex;
    align-items: center;
    padding: 16px 0;
    margin-right: auto;
    span {
        font-family: 'Licorice';
        font-weight: 700;
        font-size: 42px;
        line-height: 1.24;
        

        color: ${({theme})=>theme.colors.mainFontColor};
    }
`

export const MenuBtn = styled.button`
background-color: transparent;
border: none;
margin: auto 0 auto 16px;
cursor: pointer;
@media screen and (min-width: 768px){
    display: none;
}
`

export const UserMenu = styled.div`
    position: relative;
    display: none;
    padding: 18px 0;
    font-weight: 700;
    cursor: pointer;
    span{
        margin: 0 8px 0 15px;
    }
    .user-photo{
        border-radius: 50%;
    }
    @media screen and (min-width: 480px) {
    display: flex;
    align-items: center;
    }
   
`

export const StyledNavBar = styled.nav`
display: none;
margin-right: 100px;
    a{
        display: inline-block;
        padding: 40px 0;
        color:${({theme})=>theme.colors.secondaryFontColor};
        font-weight: 700;
        :not(:last-child){
            margin-right: 35px;
        }   
        :hover{
            color: ${({theme})=>theme.colors.mainFontColor};
            font-weight: 700;
        }
    }
@media screen and (min-width: 768px){
    display: inline-block;
    
}

`

export const MobileMenu = styled.ul`
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 100%;
    background-color: ${({theme})=>theme.colors.headerBG};
    padding:  15px;
    color:${({theme})=>theme.colors.mainFontColor};
    
    li{
        
        font-size: 20px;
        :not(:last-child){
            margin-bottom: 14px;
        }
        a{
           color:${({theme})=>theme.colors.mainFontColor}; 
        }
        &.mobile-item-user{
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 4px;
            span{
                display: flex;
                align-content: center;
                gap: 3px;
            }
            ul{
                display: flex;
                flex-direction: column;
                align-items: center;
                
                height: 0;
                overflow: hidden;
                li{
                    font-size: 14px;
                }

            }
            :hover ul{
                height: auto;
            }
        }
    }
@media screen and (min-width: 768px){
    display: none;   
}
`

export const UserNavList = styled.ul`
    
    li{
        cursor: pointer;
        display: flex;
        align-items: center;
        color: ${({theme})=>theme.colors.secondaryFontColor};

        span{
            margin: 0 0 0 5px;
        }
        :not(:last-child){
            margin-bottom: 10px;
        }

        &.exit-user{
            color: #B96A6A;
        }
        :hover{
            color: #000000;
        }
    }

`

export const UserNavListWrapper = styled.div`
    cursor: default;
    position: absolute;
    top: 100%;
    right: 30px;
    padding: 10px;
    border-radius: 0 0 15px 15px;
    width: 220px;
    background-color: ${({theme})=>theme.colors.headerBG};
    box-shadow: 0px 0px 8px 0px rgba(34, 60, 80, 0.2);
    z-index: 2;
`

