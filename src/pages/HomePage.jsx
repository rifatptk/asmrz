import React from "react";
import FileTree from "../components/fileTree";
import HoverBanner from "../components/HoverBanner";
import MagicalText from "../components/magicalText/magicalText";
import RiRating from "../components/RiRating";
import Sidenav2 from "../components/Sidenav2";
import Sidenav1 from "../components/Sidenav1";

export default function HomePage() {
  return (
    <div id="home-page">
      <HoverBanner />
      <FileTree />
      <MagicalText />
      <Sidenav1 />
      <Sidenav2 />
      <RiRating />
    </div>
  );
}
