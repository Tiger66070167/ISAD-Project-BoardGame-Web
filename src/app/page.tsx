

export default function Home() {
  return (
    <div>
      {/* idk why i write these 2 div lol :Win */}
      <div>
        {/* Background */}
        <div className="bg-[url('../assets/boardgame.jpeg')] bg-cover blur-sm brightness-20 laptop:aspect-[16/8.4] place-content-center bg-repeat"></div>

        {/* Center Text */}
        <div id="home-text" className="text-center place-content-center text-center text-[--primary-color]">
          <h1 className='font-black laptop:text-7xl desktop:text-8xl'>Board Game Cafe</h1>
          <p className='font-medium laptop:text-3xl desktop:text-4xl'>Let's booking your board game from home</p>
        </div>

        {/* Segtion 2 of page Home */}
        <div className="laptop:aspect-[16/8.4]  bg-[--neutrals-color]"></div>
      </div>

    </div>
  );
}
