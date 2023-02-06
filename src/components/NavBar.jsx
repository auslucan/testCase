import { Button, Menu } from "semantic-ui-react";
import "../index.css";

export default function NavBar(props) {
  return (
    <Menu inverted fixed="top">
      <Menu.Item header>
        <img
          src="/educationlogo.png"
          alt="logo"
          style={{ marginRight: "10px", marginLeft: "10px" }}
        />
        Courses
      </Menu.Item>
      <Menu.Item>
        <Button positive content="Add Course" onClick={() => props.addForm()} />
      </Menu.Item>
    </Menu>
  );
}
