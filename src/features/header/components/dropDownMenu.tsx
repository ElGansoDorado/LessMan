// const DropDownMenu = () => {
//     return <div
//         className={
//             profileShow ? `${classes.profile} ${classes.show}` : classes.profile
//         }
//     >
//         <Link to={ROUTES.PROFILE} className={classes.card}>
//             <img src={user?.photoURL ?? "/"} alt="profile image" />

//             <span>
//                 <p>{user?.displayName}</p>
//                 <p>{user?.email}</p>
//             </span>
//         </Link>

//         <ul>
//             <li className={classes.button}>
//                 <p></p>
//                 <p className={classes.text}>
//                     <Link to="/settings" onClick={() => setProfileShow(false)}>
//                         Settings
//                     </Link>
//                 </p>
//             </li>

//             <li className={classes.button}>
//                 <p></p>
//                 <p className={classes.text}>
//                     <Link to="/logout" onClick={() => setProfileShow(false)}>
//                         Exit
//                     </Link>
//                 </p>
//             </li>
//         </ul>
//     </div>
// }