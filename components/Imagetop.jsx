import Image from 'next/image'; // Import the Image component from Next.js

const Imagetop = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      {/* Center the image using flexbox */}
      <Image
        src="/img/top/placeholder2.png" // Replace with the path to your image file
        alt="Your Image Alt Text"
        width={300} // Set the width of the image
        height={400} // Set the height of the image
      />
    </div>
  );
};

export default Imagetop;