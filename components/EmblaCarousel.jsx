"use client";

import React, { useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "@/components/EmblaCarouselArrowButton";

const EmblaCarousel = ({ images = [] }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

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
    <div style={{ width: "100vw", height: "auto&quot;}}>
      <div
        style={{
          width: "40%",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div className="embla&quot;ref={emblaRef} style={{ marginBottom: "10px&quot;}}>
          <div className="embla__container">
            {images.map((imageUrl, index) => (
              <div className="embla__slide&quot;key={index}>
                <img
                  src={imageUrl}
                  alt={`Slide ${index}`}
                  style={{
                    display: "block",
                    margin: "0 auto",
                    maxWidth: "100%",
                    maxHeight: "100%",
                    objectFit: "contain", // Maintain aspect ratio
                  }}
                />
              </div>
            ))}
          </div>
          <div
            className="embla__controls absolute "
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "90%",
              alignItems: "center",
            }}
          >
            <PrevButton
              onClick={onPrevButtonClick}
              disabled={prevBtnDisabled}
              style={{ marginRight: "auto&quot;}}
            />
            <NextButton
              onClick={onNextButtonClick}
              disabled={nextBtnDisabled}
              style={{ marginLeft: "auto&quot;}}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
