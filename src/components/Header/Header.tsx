import classes from './Header.module.css'

import { NavLink } from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faCircleUser, faBell, faTicket, faList } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
    return <header className={classes.header}>
        <div className={classes.container}>
            <ul className={classes.menu}>
                <li data-tooltip="Poster">
                    <NavLink to={'/'}>
                        <FontAwesomeIcon icon={faList} color='#F98E5D' />
                    </NavLink>
                </li>
                <li data-tooltip="Home">
                    <NavLink to={'/'}>
                        <FontAwesomeIcon icon={faHome} color='#F98E5D' />
                    </NavLink>
                </li>
                <li data-tooltip="Tickets">
                    <FontAwesomeIcon icon={faTicket} color='#F98E5D' />
                </li>
                <li data-tooltip="News">
                    <FontAwesomeIcon icon={faBell} color='#F98E5D' />
                </li>

            </ul>

            <hr className={classes.separator} />
            <NavLink to={'/profile'} data-tooltip="Profile">
                <FontAwesomeIcon icon={faCircleUser} color='#F98E5D' size='2x' />
            </NavLink>
        </div>
    </header>
}