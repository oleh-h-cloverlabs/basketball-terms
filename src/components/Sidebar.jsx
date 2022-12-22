import { NavLink } from "react-router-dom";
import Container from "./Container";
import Title from "./Title";
import routes from "../routes";
import classNames from "classnames";

function Sidebar() {
  return (
    <Container tag="aside" className="aside-container">
      <Container className="aside-wrapper">
        <Title className="aside-title">Menu</Title>
        <NavLink
          to={routes.discovering}
          className={({ isActive }) =>
            classNames("aside-link", { active: isActive })
          }
        >
          Post discovery
        </NavLink>
        <NavLink
          to={routes.saved}
          className={({ isActive }) =>
            classNames("aside-link", { active: isActive })
          }
        >
          Saved posts
        </NavLink>
      </Container>
    </Container>
  );
}

export default Sidebar;
