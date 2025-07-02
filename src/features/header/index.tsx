import classes from "./Header.module.css";

import { NavLink, Link, href } from "react-router";
import { ROUTES } from "@/shared/model/routes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faCircleUser,
  faBell,
  faTicket,
  faList,
} from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";
import Search from "@/shared/ui/input/search/Search";
import { UserInfo } from "firebase/auth";
import { useSession } from "@/shared/model/session";

type Props = {
  user: UserInfo;
};

export default function Header({ user }: Props) {
  const [search, setSearch] = useState("");
  const [profileShow, setProfileShow] = useState(false);
  const {session, logout} = useSession();

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
        {session ? (
          <FontAwesomeIcon
            color="#f55449"
            icon={faCircleUser}
            size="2x"
            onClick={() => setProfileShow(!profileShow)}
          />
        ) : (
          <p>
            {" "}
            <Link to={ROUTES.LOGIN}>Sign In</Link> or{" "}
            <Link to={ROUTES.REGISTER}> Sign Up</Link>
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
              {/* <B to="/logout" onClick={() => setProfileShow(false)}>
                Exit
              </B> */}
              <button onClick={() => {
                logout();
                setProfileShow(false);
                }}> Exit </button>
            </p>
          </li>
        </ul>
      </div>
    </header>
  );
}
