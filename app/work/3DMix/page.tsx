import React from "react";
import PageInfo2 from "@/components/PageInfo2";

const About = () => {
  return (
    <div>
      <PageInfo2
        topImage="/img/projects/CG/3Dmix/1105_2.png"
        title="3D:MIX 
        <br/> 3D Printing Experiment"
        subtitle=""
        textContent={`3D:Mix is a research project by creative agency  <a href='https://theshift.tokyo/' style='text-decoration:underline' ><em> theshift.tokyo</em></a> that explores the intersection of fine art, machine learning, 2D-to-3D transformation, and 3D printing. In collaboration with Koushin, a Tokyo-based 3D printing company, this project builds on our previous  <a href='https://theshift.tokyo/research/remix/' style='text-decoration:underline' ><em> Remix </em></a>   initiative by transforming AI-generated landscapes into intricately designed, 3D-printed vases. By integrating depth-mapped images of landscapes and liquid paintings, we translate abstract visuals into tangible, three-dimensional forms.`}
        imagePaths={[
          {
            type: "image",
            src: "/img/projects/CG/3Dmix/0206_2.jpg",
          },
          {
            type: "image",
            src: "/img/projects/CG/3Dmix/4.png",
          },
          {
            type: "image",
            src: "/img/projects/CG/3Dmix/14.png",
          },
          {
            type: "image",
            src: "/img/projects/CG/3Dmix/IMG_7361.jpg",
          },
        ]}
        textAdditional={
          "The process begins with transforming liquid paintings and textures from Google Maps into generative visuals using Stable Diffusion. <br/><br /> These visuals are then converted into 3D models in Blender by distorting the base geometry with 2D data inputs, refining the shape through detailed adjustments, and optimizing the model for 3D printing to ensure functionality and precision. <br/><br/>We chose the GEM121010 large-scale 3D printing system to explore the possibilities of spatial design and material innovation. Using recycled resin pellets as the primary material not only ensures sustainability but also offers flexibility and the unique ability to make post-printing shape adjustments."
        }
        imageAdditional="/img/projects/CG/3Dmix/15.png"
        creditsText={[
          "C R E D I T S",
          "YIFAN ZHUANG <b>3D Artist & Photographer</b>",
          "JIYU PARK (The Shift) <b>3D Artist & Art Director</b>",
          "SHOYA DOZONO (The Shift) <b>Machine Learning Artist</b>",
          "KOUSHIN.inc  <b>3D Printing Production</b>",
          "This is a research project for theshift.tokyo.",
        ]}
      />
    </div>
  );
};
export default About;
