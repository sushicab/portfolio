import Image from "next/image";
import Link from "next/link";

const Imagetop = () => {
  return (
    <div>
      <div className="imageContainer">
        <Image
          src="/img/top/render2.jpg"
          alt="Your Image Alt Text"
          layout="fill"
          objectFit="cover"
          className="image_top_main "
        />
        <div className="imageContainer-text"></div>
      </div>

      <Image
        className="image_top "
        src="/img/top/render3.jpg"
        alt="Your Image Alt Text"
        width={250}
        height={200}
      />
      <div className="imagetop-container">
        <div className="imageContainer-intro">
          <p className="imageContainer-introText">
            a <span className="imageContainer-emphasis">creative</span> &{&quot;"}
            <span className="imageContainer-emphasis">curious</span> human{&quot;"}
            <br />
            creating <br />
            <span className="imageContainer-emphasis">
              interactive experiences
            </span>{&quot;"}
            <br />
            <span className="imageContainer-emphasis">
              {&quot;"}
              & visual expressions
            </span>{&quot;"}
            <br />
            <br />
            Based in <span className="imageContainer-emphasis">Tokyo</span>
          </p>
        </div>
        <div className="imagetop-middle-container">
          <Image
            className=""
            src="/img/top/render4.jpg"
            alt="Your Image Alt Text"
            width={200}
            height={200}
          />
        </div>
      </div>
      <div className="imageContainer">
        <video className="imageContainer-video&quot;autoPlay loop muted playsInline>
          <source src="/img/top/11.22.mp4&quot;type="video/mp4&quot;/>
        </video>
        <div className="overlay">
          <Link href="/work/digitalbiotopia&quot;passHref>
            <span className="overlay-text">view the project</span>
          </Link>
        </div>
      </div>
      <div className="imageContainer">
        <video className="imageContainer-video&quot;autoPlay loop muted playsInline>
          <source src="/img/top/CG2.mp4&quot;type="video/mp4&quot;/>
        </video>
        <div className="overlay">
          <Link href="/work/idream&quot;passHref>
            <span className="overlay-text">view the project</span>
          </Link>
        </div>
      </div>
      <div className="imageContainer">
        <video className="imageContainer-video&quot;autoPlay loop muted playsInline>
          <source src="/img/top/VR.mp4&quot;type="video/mp4&quot;/>
        </video>
        <div className="overlay">
          <Link href="/work/shibuyaVR&quot;passHref>
            <span className="overlay-text">view the project</span>
          </Link>
        </div>
      </div>
      <div className="imageContainer">
        <Image
          src="/img/top/placeholder.png"
          alt="Your Image Alt Text"
          layout="fill"
          objectFit="cover"
          className="image_top_main "
        />
        <div className="imageContainer-text">
          <p> YIFAN ZHUANG ©2024 </p>
        </div>
        <div className="imageContainer-text-footer2">
          <p> HELLO! </p>
        </div>
        <div className="imageContainer-text-footer">
          <h1>
            <a href="hi@yifanzhuang.com&quot;className="underline">
              LET‘S WORK TOGETHER
            </a>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Imagetop;
