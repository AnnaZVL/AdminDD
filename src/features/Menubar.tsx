import React from "react";
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
  } from "@/components/ui/menubar";

const MenuBarHead: React.FC = () => {
    return (
        <Menubar>
        <MenubarMenu>
          <MenubarTrigger>Магазин</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              New Tab <MenubarShortcut>⌘T</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>Работа с остатками</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Добавить новый товар</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Корзина</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    )
}

export default MenuBarHead;