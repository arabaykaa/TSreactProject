import c from "./HeadLinks.module.css";
// import { NavLink } from "react-router-dom";

export function HeadLinks(props: { linkurl: string; linkName: string }) {
  return (
    <>
      <li className={c.links}>
        {/* <NavLink to="">{props.linkName}</NavLink> */}
        <a href={`${props.linkurl}`}>{props.linkName}</a>
      </li>
    </>
  );
}
