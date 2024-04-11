import React from "react";
import useEmblaCarousel from "embla-carousel-react";

export function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel();

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide">Slide 1</div>
        <div className="embla__slide">Slide 2</div>
        <div className="embla__slide">Slide 3</div>
      </div>
    </div>
  );
}

export default ImageSlider;

// const ImageSlider = () => {
//   // Array of carousel items
//   const carouselItems = [
//     {
//       imageSrc: "/img/projects/photography/replacement/1.jpg",
//       captionTitle: "First slide label",
//       captionText: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
//     },
//     {
//       imageSrc: "/img/projects/photography/replacement/2.jpg",
//       captionTitle: "Second slide label",
//       captionText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     },
//     {
//       imageSrc: "/img/projects/photography/replacement/3.jpg",
//       captionTitle: "Third slide label",
//       captionText:
//         "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
//     },
//   ];

//   return (
//     <Carousel>
//       {carouselItems.map((item, index) => (
//         <Carousel.Item key={index}>
//           <img
//             className="d-block w-100"
//             src={item.imageSrc}
//             alt={`Slide ${index}`}
//           />
//           <Carousel.Caption>
//             <h3>{item.captionTitle}</h3>
//             <p>{item.captionText}</p>
//           </Carousel.Caption>
//         </Carousel.Item>
//       ))}
//     </Carousel>
//   );
// };

// // const ImageSlider = () => {
// //   return (
// //     <div>
// //       <Carousel>
// //         <Carousel.Item>
// //           <img
// //             className="d-block w-100"
// //             src="/img/projects/photography/replacement/1.jpg"
// //             alt="First slide"
// //           />
// //           <Carousel.Caption>
// //             <h3>First slide label</h3>
// //             <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
// //           </Carousel.Caption>
// //         </Carousel.Item>
// //         <Carousel.Item>
// //           <img
// //             className="d-block w-100"
// //             src="/img/projects/photography/replacement/2.jpg"
// //             alt="Second slide"
// //           />
// //           <Carousel.Caption>
// //             <h3>Second slide label</h3>
// //             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
// //           </Carousel.Caption>
// //         </Carousel.Item>
// //         <Carousel.Item>
// //           <img
// //             className="d-block w-100"
// //             src="/img/projects/photography/replacement/3.jpg"
// //             alt="Third slide"
// //           />
// //           <Carousel.Caption>
// //             <h3>Third slide label</h3>
// //             <p>
// //               Praesent commodo cursus magna, vel scelerisque nisl consectetur.
// //             </p>
// //           </Carousel.Caption>
// //         </Carousel.Item>
// //       </Carousel>
// //     </div>
// //   );
// // };
