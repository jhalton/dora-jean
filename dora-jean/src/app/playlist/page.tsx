//todo
//stretch goal, could be cool to have a playlist of some of her favorite songs
import Link from "next/link";
import Loading from "../loading";

const Playlist = () => {
  //Since this is a stretch goal, I'm using this to test a css loading animation
  //So far it doesn't render. Not really sure why yet.
  return (
    <div>
      {/* <Link href="/">Home</Link>
      <p>Playlist</p> */}
      <Loading />
    </div>
  );
};

export default Playlist;
