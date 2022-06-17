import c from "./HeadLinks.module.css";
import { Link } from "react-router-dom";

export function HeadLinks(props: { linkurl: string; linkName: string }) {
  return (
    <>
      <li className={c.links}>
        <Link to={props.linkurl}>{props.linkName}</Link>
      </li>
    </>
  );
}
