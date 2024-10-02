//todo
//A navigation menu that persists on the left side of the screen with links
//to each feature
import React from "react";
import Link from "next/link";

const SidebarNav = () => {
  //The link lets me navigate where I tell it to, but I'm not correctly rendering
  return (
    <div>
      <p>Sidebar Nav</p>
      <ol>
        <li>
          <Link href="/biography">Biography</Link>
        </li>
        <li>
          <Link href="/stories">Stories</Link>
        </li>
        <li>
          <Link href="/photos">Photos</Link>
        </li>
        <li>
          <Link href="/playlist">Playlist</Link>
        </li>
      </ol>
    </div>
  );
};

export default SidebarNav;
