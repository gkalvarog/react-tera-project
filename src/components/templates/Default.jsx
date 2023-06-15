import React, { useState } from "react";

import AppFooter from "../organisms/AppFooter";
import AppHeader from "../organisms/AppHeader";
import DrawerMenu from "../molecules/DrawerMenu";

export default function Default(props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="wrapper">
      <DrawerMenu open={open} setOpen={setOpen} />
      <AppHeader setOpen={setOpen} />
      {props.children}
      <AppFooter />
    </div>
  );
}
