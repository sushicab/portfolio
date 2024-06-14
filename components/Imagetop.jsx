import Image from "next/image";

const Imagetop = () => {
  return (
    <div>
      <div className="imageContainer">
        <Image
          src="/img/top/render2.png"
          alt="Your Image Alt Text"
          layout="fill"
          objectFit="cover"
          className="image_top_main "
        />
      </div>

      <Image
        className="image_top "
        src="/img/top/render3.png"
        alt="Your Image Alt Text"
        width={250}
        height={200}
      />
    </div>
  );
};

export default Imagetop;
