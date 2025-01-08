import Navbar from "./navbar";
import TamplatesGallery from "./tamplates-gallery";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className=" fixed top-0 right-0 left-0 z-10 h-16 bg-white p-4 ">
        <Navbar />
      </div>
      <div className=" mt-16">
        <TamplatesGallery />
      </div>
    </div>
  );
}
