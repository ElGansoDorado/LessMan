import classes from "./Settings.module.css";

import { useSubmit, useLoaderData } from "react-router";
import { useState, ChangeEvent, useEffect } from "react";

type UserInfo = {
  photo: string;
  name: string;
  desc: string;
  telegram: string;
  instagram: string;
};

export default function Settings() {
  const user = useLoaderData<UserInfo>();

  const [photo, setPhoto] = useState("");
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [telegram, setTelegram] = useState("");
  const [instagram, setInstagram] = useState("");

  const submit = useSubmit();

  /** uploading a photo to your personal profile */
  const handleImageChange = async (evt: ChangeEvent<HTMLInputElement>) => {
    const cFiles = evt.target.files;

    if (cFiles && cFiles.length > 0) {
      const fileReader = new FileReader();

      fileReader.onload = () => {
        setPhoto(fileReader.result as string);
      };

      fileReader.readAsDataURL(cFiles[0]);
    } else {
      setPhoto("");
    }
  };

  useEffect(() => {
    setPhoto(user.photo);
    setName(user.name);
    setDesc(user.desc);
    setTelegram(user.telegram);
    setInstagram(user.instagram);
  }, []);

  const handleFormSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    submit(
      { photo, name, desc, telegram, instagram },
      { action: "/settings", method: "post" },
    );
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className={classes.photo}>
        <img src={photo} alt="profile photo" className={classes.img} />
        <input
          type="file"
          className={classes.load}
          accept="image/*"
          onChange={handleImageChange}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(evt) => setName(evt.target.value)}
        />
        <input
          type="text"
          placeholder="des"
          value={desc}
          onChange={(evt) => setDesc(evt.target.value)}
        />
        <input
          type="text"
          placeholder="te"
          value={telegram}
          onChange={(evt) => setTelegram(evt.target.value)}
        />
        <input
          type="text"
          placeholder="ins"
          value={instagram}
          onChange={(evt) => setInstagram(evt.target.value)}
        />
        <input
          type="submit"
          className="button is-primary"
          value="Обновить профиль"
        />
      </div>
    </form>
  );
}
