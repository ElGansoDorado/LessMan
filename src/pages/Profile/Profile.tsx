import classes from "./Profile.module.css";

export default function Profile() {
  return (
    <>
      <section className={classes.personal}>
        <div className={classes.photo}>
          <img src={""} alt="profile photo" className={classes.img} />
          {/* <FontAwesomeIcon icon={faDownload} className={classes.icon} /> */}
          {/* <input
                    type="file"
                    className={classes.load}
                    accept="image/*"
                    onChange={handleImageChange} /> */}
        </div>
        <div>
          <h1 className={classes.name}>Carambola</h1>
          {/* <input type="text" className={classes.name} value={name} onChange={(evt) => setName(evt.target.value)} /> */}
          <p className={classes.email}>ktotospochtoi@gmail.com</p>
          <p className={classes.number}>+8 342 33-44-55</p>
        </div>
      </section>

      <section></section>
    </>
  );
}
