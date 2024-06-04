import Image from "next/image";

const Imagetop = () => {
  return (
    <div>
      <Image
        className="image_top_main "
        src="/img/projects/photography/moments/soft44.jpg"
        alt="Your Image Alt Text"
        width={300}
        height={200}
      />

      <Image
        className="image_top "
        src="/img/top/ifan_png.png"
        alt="Your Image Alt Text"
        width={200}
        height={300}
      />
    </div>
  );
};

export default Imagetop;
