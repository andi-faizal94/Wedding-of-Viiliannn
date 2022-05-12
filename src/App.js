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
        className="w-full min-h-screen p-2 aspect-square rounded-md"
        src="https://www.youtube.com/embed/DYlDtDjGEI8"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="video"
      ></iframe>
    </div>
  );
}

export default App;
