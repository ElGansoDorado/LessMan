import classes from './Header.module.css'

import { NavLink } from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faCircleUser, faBell, faTicket, faList, faDoorOpen } from '@fortawesome/free-solid-svg-icons'

import { useState } from 'react'
import Search from '../ui/input/search/Search'
import { UserInfo } from 'firebase/auth'

type Props = {
    user: UserInfo;
}

export default function Header({ user }: Props) {
    const [search, setSearch] = useState('');

    return <header className={classes.header}>
        <div className={classes.container}>
            <p className={classes.logo} data-tooltip="Home">L</p>

            <Search value={search} setValue={setSearch} />

            <ul className={classes.menu}>
                <li data-tooltip="Poster">
                    <NavLink to={'/poster'}>
                        <FontAwesomeIcon icon={faList} />
                    </NavLink>
                </li>
                <li data-tooltip="Home">
                    <NavLink to={'/'}>
                        <FontAwesomeIcon icon={faHome} />
                    </NavLink>
                </li>
                <li data-tooltip="Tickets">
                    <FontAwesomeIcon icon={faTicket} />
                </li>
                <li data-tooltip="News">
                    <FontAwesomeIcon icon={faBell} />
                </li>

            </ul>

            <hr className={classes.separator} />
            {
                user ? <>
                    <NavLink to={'/profile'} data-tooltip="Profile">
                        <FontAwesomeIcon icon={faCircleUser} size='2x' />
                    </NavLink>

                    <p>{user?.email}</p>

                    <NavLink to={'/logout'}>
                        <FontAwesomeIcon icon={faDoorOpen} />
                    </NavLink>
                </> :
                    <p> <NavLink to={'/authentication/sign-in'}>Sign In</NavLink> or <NavLink to={'/authentication/sign-up'}> Sign Up</NavLink></p>
            }
        </div>
    </header>
}