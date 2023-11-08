import SideNav from "@/components/SideNav";
import { NAV_ITEMS } from "../constants.js";

export default function Home() {
  return (
    <>
      <SideNav listItems={NAV_ITEMS.left} left></SideNav>
      <SideNav listItems={NAV_ITEMS.right}></SideNav>
      <main className=""></main>
    </>
  );
}
