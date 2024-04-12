"use client";

import React, { useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "@/components/EmblaCarouselArrowButton";

export default function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()); // Access API
    }
  }, [emblaApi]);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div style={{ width: "100vw", height: "auto" }}>
      <div
        style={{
          width: "40%",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div className="embla" ref={emblaRef} style={{ marginBottom: "10px" }}>
          <div className="embla__container">
            <div className="embla__slide">
              <img src="/img/projects/photography/replacement/2.jpg" alt="" />
            </div>
            <div className="embla__slide">
              <img src="/img/projects/photography/replacement/3.jpg" alt="" />
            </div>
            <div className="embla__slide">
              <img src="/img/projects/photography/replacement/1.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div
        className="embla__controls"
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          alignItems: "center",
        }}
      >
        <PrevButton
          onClick={onPrevButtonClick}
          disabled={prevBtnDisabled}
          style={{ marginRight: "auto" }}
        />
        <NextButton
          onClick={onNextButtonClick}
          disabled={nextBtnDisabled}
          style={{ marginLeft: "auto" }}
        />
      </div>
    </div>
  );
}
