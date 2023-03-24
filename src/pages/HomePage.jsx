import React from "react";
import FileTree from "../components/fileTree";
import HoverBanner from "../components/HoverBanner";
import MagicalText from "../components/magicalText/magicalText";

export default function HomePage() {
  return (
    <div id="home-page">
      <HoverBanner />
      <FileTree />
      <MagicalText />
    </div>
  );
}
