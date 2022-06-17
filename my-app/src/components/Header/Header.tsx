import h from "./Header.module.css";
import { HeadLinks } from "./HeadLinks/HeadLinks";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header>
        <div className={h.headContainer}>
          <div className={h.headLogo}>&#128128;BRAINSTORM</div>
          <div className={h.headLinkContainer}>
            <ul>
              <HeadLinks linkurl="/MainP" linkName="Main" />
              <HeadLinks linkurl="/ToDo" linkName="To-Do" />
              <HeadLinks linkurl="/" linkName="About us" />
              <HeadLinks linkurl="/" linkName="Contacts" />
            </ul>
          </div>
          <div className={h.supportBtn}>
            <Link to="/LogIn">LogIn</Link>
          </div>
        </div>
      </header>
    </>
  );
}
