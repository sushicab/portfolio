import Image from "next/image";

const Imagetop = () => {
  return (
    <div>
      <Image
        className="image_top_main "
        src="/img/top/test_9.png"
        alt="Your Image Alt Text"
        width={1440}
        height={900}
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
