
const Hero = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-[#1A1F2C] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black/30 to-transparent z-10" />
      <div className="relative z-20 text-center space-y-6 max-w-4xl px-4">
        <h1 className="text-6xl font-bold tracking-tight">
          Elevate Your Style
        </h1>
        <p className="text-xl text-gray-300">
          Premium clothing essentials crafted for the modern wardrobe
        </p>
        <a
          href="#products"
          className="inline-block px-8 py-3 bg-white text-[#1A1F2C] rounded-full font-medium hover:bg-gray-100 transition-colors"
        >
          Shop Now
        </a>
      </div>
    </div>
  );
};

export default Hero;
