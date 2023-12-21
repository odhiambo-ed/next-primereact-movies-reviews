import { Button } from "primereact/button";

function Hero() {
  return (
    // <div className="grid grid-nogutter surface-0 text-800 bg-gray-800">
    //   <div className="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
    //     <section>
    //       <span className="block text-6xl font-bold mb-1">
    //         Create the screens
    //       </span>
    //       <div className="text-6xl text-primary font-bold mb-3">
    //         your visitors deserve to see
    //       </div>
    //       <p className="mt-0 mb-4 text-700 line-height-3">
    //         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    //         eiusmod tempor incididunt ut labore et dolore magna aliqua.
    //       </p>

    //       <Button
    //         label="Learn More"
    //         type="button"
    //         className="mr-3 p-button-raised"
    //       />
    //       <Button
    //         label="Live Demo"
    //         type="button"
    //         className="p-button-outlined"
    //       />
    //     </section>
    //     <div className="col-12 md:col-6 overflow-hidden">
    //       <img
    //         src="/images/hero1.png"
    //         alt="hero-1"
    //         className="md:ml-auto right-0 block md:h-full"
    //       />
    //     </div>
    //   </div>
    // </div>
    <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/path/to/your/header-image.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Discover the Cinematic World
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8">
            Explore a vast collection of movies and TV shows at your fingertips.
          </p>
          <button className="bg-yellow-500 text-gray-800 px-6 py-3 rounded-full font-bold text-lg hover:bg-yellow-600 transition duration-300">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero