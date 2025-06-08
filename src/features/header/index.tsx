import classes from "./Header.module.css";

import { NavLink, Link, href } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ROUTES } from "@/shared/model/routes";
import {
  faHome,
  faCircleUser,
  faBell,
  faTicket,
  faList,
} from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";
import Search from "@/components/common/input/search/Search";
import { UserInfo } from "firebase/auth";

type Props = {
  user: UserInfo;
};

export default function Header({ user }: Props) {
  const [search, setSearch] = useState("");
  const [profileShow, setProfileShow] = useState(false);

  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <p className={classes.logo} data-tooltip="Home">
          L
        </p>

        <Search value={search} setValue={setSearch} />

        <ul className={classes.menu}>
          <li data-tooltip="Poster">
            <NavLink to={ROUTES.EVENTS}>
              <FontAwesomeIcon icon={faList} />
            </NavLink>
          </li>
          <li data-tooltip="Home">
            <NavLink to={href(ROUTES.EVENT, { eventId: "24" })}>
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
        {user ? (
          <FontAwesomeIcon
            color="#f55449"
            icon={faCircleUser}
            size="2x"
            onClick={() => setProfileShow(!profileShow)}
          />
        ) : (
          <p>
            {" "}
            <Link to={"/auth/sign-in"}>Sign In</Link> or{" "}
            <Link to={"/auth/sign-up"}> Sign Up</Link>
          </p>
        )}
      </div>
      <div
        className={
          profileShow ? `${classes.profile} ${classes.show}` : classes.profile
        }
      >
        <Link to={ROUTES.PROFILE} className={classes.card}>
          <img src={user?.photoURL ?? "/"} alt="profile image" />

          <span>
            <p>{user?.displayName}</p>
            <p>{user?.email}</p>
          </span>
        </Link>

        <ul>
          <li className={classes.button}>
            <p></p>
            <p className={classes.text}>
              <Link to="/settings" onClick={() => setProfileShow(false)}>
                Settings
              </Link>
            </p>
          </li>

          <li className={classes.button}>
            <p></p>
            <p className={classes.text}>
              <Link to="/logout" onClick={() => setProfileShow(false)}>
                Exit
              </Link>
            </p>
          </li>
        </ul>
      </div>
    </header>
  );
}
