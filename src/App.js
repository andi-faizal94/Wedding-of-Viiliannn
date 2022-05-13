import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const delay = 1;

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  useEffect(() => {
    let timer1 = setTimeout(() => setLoading(false), delay * 6000);
    return () => {
      clearTimeout(timer1);
    };
  }, []);

  if (loading)
    return (
      <div className="flex flex-col justify-center items-center main">
        <div className="loader-wrapper">
          <div className="loader">
            <div className="loader loader-inner"></div>
          </div>
        </div>
        <h1 className="p text-center text-success" data-text="Loading ..">
          Loading ...
        </h1>
      </div>
    );

  return (
    <div className="App bg-[#0a192f]">
      <h1
        className="p-4 text-3xl text-center font-lato font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-100 to-red-900 mb-4"
        data-aos="fade-down"
      >
        Wedding
      </h1>
      <h1
        className="text-3xl text-center font-lato font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-100 to-red-900 mb-4"
        data-aos="zoom-in-up"
      >
        Erfi & Frendi
      </h1>

      <iframe
        className="w-full min-h-screen aspect-square md:aspect-video xl:aspect-auto rounded-xl"
        src="https://www.youtube.com/embed/_XI5YgUaCE8"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="video"
        data-aos="fade-up"
      ></iframe>

      <footer className="text-white font-lato text-center p-4 cursor-pointer">
        <a
          className="text-md font-lato"
          href="https://andi-3ujiqdvp9-andi-faizal94.vercel.app/"
        >
          Made by Andi
        </a>
      </footer>
    </div>
  );
}

export default App;
