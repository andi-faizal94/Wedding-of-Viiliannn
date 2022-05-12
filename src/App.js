function App() {
  return (
    <div className="App bg-[#0a192f]">
      <h1 className="p-4 text-3xl text-center font-lato font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-100 to-red-900 mb-4">
        Wedding
      </h1>
      <h1 className="text-3xl text-center font-lato font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-100 to-red-900 mb-4">
        Erfi & Frendi
      </h1>

      <iframe
        className="w-full min-h-screen aspect-square md:aspect-video xl:aspect-auto rounded-xl"
        src="https://www.youtube.com/embed/_XI5YgUaCE8"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="video"
      ></iframe>

      <footer className="text-white font-lato text-center p-4 cursor-pointer">
        Made by
        <a
          className="text-md ml-1 font-lato"
          href="https://andi-3ujiqdvp9-andi-faizal94.vercel.app/"
        >
          Andi
        </a>
      </footer>
    </div>
  );
}

export default App;
