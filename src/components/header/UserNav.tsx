import { MdOutlinePayments} from 'react-icons/md';
import {BiExit} from "react-icons/bi";
import {GoGear} from "react-icons/go"
import { UserNavList } from './Header.styled';

export const UserNav = () => {
    return <UserNavList>
        <li><GoGear  style={{width: "17px", height: "17px"}}/><span>Изменить данные</span></li>
        <li><MdOutlinePayments style={{width: "17px", height: "17px"}}/><span>Подписка</span></li>
        <li className="exit-user"><BiExit style={{width: "17px", height: "17px"}}/><span>Выход</span></li>
    </UserNavList>
}