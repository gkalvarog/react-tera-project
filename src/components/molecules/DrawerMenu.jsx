/* eslint-disable no-unused-vars */

import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";

import Drawer from "@mui/material/Drawer";
import { List, ListItem } from "@mui/material";

import { CurUserContext } from "../contexts/CurUserContext";

export default function DrawerMenu(props) {
  const { curUser, setCurUser } = useContext(CurUserContext);

  return (
    <Drawer
      anchor="right"
      open={props.open}
      onClose={() => props.setOpen(false)}
    >
      <List>
        <ListItem>
          <Link to="/">Home</Link>
        </ListItem>

        <ListItem>
          <Link to="/users">Users</Link>
        </ListItem>

        <ListItem>
          <Link to={`/users/${curUser}/post`}>Write Post</Link>
        </ListItem>
      </List>
    </Drawer>
  );
}
