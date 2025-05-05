import classes from "./Profile.module.css"

import Img from '../../assets/react.svg'

export default function Profile() {
    return <>
        <section className={classes.about}>
            <div className={classes.imgBox}>
                <img src={Img} alt="img" />
                <h2>Ganso Sodaro</h2>
                <p>ganso</p>
            </div>
            <button className={classes.button}>Edit profile</button>
            <div>0 follower .  0 following</div>
        </section>

        <section>
            <div>
                
            </div>
        </section>
    </>
}