import React, { useState } from "react";
import { Stack } from "@chakra-ui/react";

import { useLocation } from "react-router-dom";

import GoBackButton from "./GoBackButton";
import { HamburgerIcon } from "@chakra-ui/icons";
import DrawerNav from "./Drawer";

const ToolBarPages = () => {
  const [drawer, setDrawer] = useState(false);
  const { pathname } = useLocation();
  return (
    pathname !== "/home" && (
      <Stack width="100%" isInline justify="space-between">
        <GoBackButton />
        <HamburgerIcon
          as="button"
          cursor="pointer"
          height={{ base: 6, md: 8 }}
          width={{ base: 6, md: 8 }}
          onClick={() => setDrawer(true)}
        ></HamburgerIcon>
        {drawer && <DrawerNav onClose={() => setDrawer(false)} />}
      </Stack>
    )
  );
};

export default ToolBarPages;
