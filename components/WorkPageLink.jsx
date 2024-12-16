import Link from " next/link";
import { useState } from " react";

const WorkPageLink = ({ href, title, imgUrl }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={href}>
      <a
        className=" block relative rounded overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={imgUrl}
          alt={title}
          className={`w-full transition-opacity duration-300 ${
            isHovered ? " opacity-80" : " opacity-100"
          }`}
        />
      </a>
    </Link>
  );
};

export default WorkPageLink;
