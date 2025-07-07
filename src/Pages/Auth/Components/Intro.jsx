

const Intro = () => {
  return (
    <div className="hidden md:flex justify-center bg-primary">
      <div className="h-screen flex items-center justify-center">
        <div className="bg-white text-main flex items-center px-6 py-4 rounded-xl gap-x-4 shadow-lg">
        <img src={'/smh.png'} alt="logo" className="h-16 w-auto" />

          <h2 className="text-2xl font-extrabold text-black">Smart Home Energy Monitoring</h2>
        </div>
      </div>
    </div>
  );
};

export default Intro;
