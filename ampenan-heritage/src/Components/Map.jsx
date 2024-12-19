const Map = () => {
  return (
    <section className="flex flex-col justify-center items-center my-8">
      <div className="flex flex-col items-center">
        <h1 className="text-h3 font-bold text-center text-y50 md:text-y950">Scan Point dan Spot Foto</h1>
        <p className="text-p text-y50 text-center md:text-y950">Klik pada spot foto untuk melihat contoh hasil foto.</p>
      </div>
      <iframe
        src="https://www.google.com/maps/d/u/0/embed?mid=1J_303wDDb-oWVcl7x5o3YZOSni8h-GE&ehbc=2E312F&noprof=1"
        className="w-[64vw] h-[48vw] rounded-xl my-4 md:w-[40rem] md:h-[30rem]"
      ></iframe>
    </section>
  );
};

export default Map;
