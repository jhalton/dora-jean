//todo
//A navigation menu that persists on the left side of the screen with links
//to each feature
import React from "react";
import { useRouter } from "next/navigation";

const SidebarNav = () => {
  const router = useRouter();
  return (
    <div>
      <p>Sidebar Nav</p>
      <ol>
        <li onClick={() => router.push("/biography")}>Biography</li>
        <li>Stories</li>
        <li>Photos</li>
        <li>Playlist</li>
      </ol>
    </div>
  );
};

export default SidebarNav;
