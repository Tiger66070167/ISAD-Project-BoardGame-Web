

export default function Home() {
  return (
    <div>
      <div>
        <div className="bg-[url('../assets/boardgame.jpeg')] bg-cover blur-sm brightness-20 text-white text-center aspect-[16/9] place-content-center bg-repeat"></div>

        <div id="home-text" className="text-center place-content-center text-center text-[#5865F2]">
          <h1 className='font-black text-8xl'>Board Game Cafe</h1>
          <p className='font-medium text-4xl'>Let's booking your board game from home</p>
        </div>

        <div className="aspect-[16/9] bg-[--neutrals-color]"></div>
      </div>
    </div>
  );
}
