import c from "./MainP.module.css";

import mainIMG from "./image/photo.png";

export default function MainP() {
  return (
    <div className={c.content}>
      <div className={c.wrapper}>
        <div className={c.inner}>
          <div className={c.image}>
            <img src={mainIMG} alt="img" className={c.imgClass} />
          </div>
          <div className={c.text}>
            <a href="/" className={c.content_a}>
              #1 Top Scariest Ghost 2020
            </a>
            <h1 className={c.content_h1}>RESPAWN THE SPOOKY SKULL</h1>
            <p className={c.content_p}>
              In search for cute little puppy, Captain Sem has come back from
              his tragic death. With his hogwarts certified power he promise to
              be a hero for all of ghostkind.
            </p>
            <a href="/" className={c.button}>
              Book now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
