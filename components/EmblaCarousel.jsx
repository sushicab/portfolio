"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";

export default function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel();

  return (
    <div style={{ width: "50%" }}>
      <div className="embla  " ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide">
            <img src="/img/projects/photography/replacement/2.jpg"></img>
          </div>
          <div className="embla__slide">
            <img src="/img/projects/photography/replacement/3.jpg"></img>
          </div>
          <div className="embla__slide">
            <img src="/img/projects/photography/replacement/1.jpg"></img>
          </div>
        </div>
      </div>
    </div>
  );
}
