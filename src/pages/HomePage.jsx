import React from "react";
import FileTree from "../components/fileTree";
import HoverBanner from "../components/HoverBanner";

export default function HomePage() {
  return (
    <div id="home-page">
      <HoverBanner />
      <FileTree />
    </div>
  );
}
