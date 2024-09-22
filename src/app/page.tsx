import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* idk why i write these 2 div lol :Win */}
      <div>
        {/* Background */}
        <div className="bg-[url('../assets/boardgame.jpeg')] bg-cover blur-sm brightness-20 min-h-screen min-w-screen place-content-center bg-repeat"></div>

        {/* Center Text */}
        <div
          id="home-text"
          className="text-center place-content-center text-[--primary-color]"
        >
          <h1 className="font-black tablet:text-2xl laptop:text-7xl desktop:text-8xl font-sans">
            Board Game Cafe
          </h1>
          <p className="font-medium tablet:text-base laptop:text-3xl desktop:text-4xl">
            Let's booking your board game from home
          </p>
        </div>

        {/* Segtion 2 of page Home */}
        <div className="min-h-screen min-w-screen bg-[--neutrals-color] flex justify-center items-center">
          <div className="tablet:hidden laptop:grid laptop:grid-cols-2 px-20 gap-10">
            <div>
              <h1 className="tablet:text-xl laptop:text-3xl desktop:text-4xl pb-5 font-black">
                จองบอร์ดเกมได้ง่าย ๆ ผ่านเว็บ
              </h1>
              <p className="tablet:text-lg laptop:text-xl desktop:text-2xl pb-5">
                เว็บจองบอร์ดเกมออนไลน์เพื่อใช้บริการกับทางร้าน
                สามารถทราบถึงสถานะการบริการของบอร์ดเกมและ ...
              </p>
              <button className="rounded bg-[--primary-color] tablet:px-2 laptop:px-4 desktop:px-6 laptop:py-4 tablet:text-xl laptop:text-3xl desktop:text-4xl transition hover:scale-110 ml-10 text-black">
                <Link href="/booking">จองโต๊ะเลย!</Link>
              </button>
            </div>

            <div className="grid place-items-end">
              <img
                src="../assets/homeSegtion2.png"
                className="h-full w-full"
                alt="Board Game"
              />
            </div>
          </div>

          {/* Mobile */}
          <div>
            <div className="tablet:grid tablet:grid-rows-2 laptop:hidden px-20 gap-10">
              <div className="grid place-items-end">
                <img
                  src="../assets/homeSegtion2.png"
                  className="h-full w-full"
                  alt="Board Game"
                />
              </div>

              <div>
                <h1 className="tablet:text-xl laptop:text-3xl desktop:text-4xl pb-5 font-black">
                  จองบอร์ดเกมได้ง่าย ๆ ผ่านเว็บ
                </h1>
                <p className="tablet:text-sm laptop:text-xl desktop:text-2xl pb-5">
                  เว็บจองบอร์ดเกมออนไลน์เพื่อใช้บริการกับทางร้าน
                  สามารถทราบถึงสถานะการบริการของบอร์ดเกมและ ...
                </p>
                <div className="flex justify-center">
                  <button
                    className="rounded bg-[--primary-color]
                  tablet:px-2 tablet:text-xl
                  laptop:px-4 laptop:py-4 laptop:text-3xl
                  desktop:px-6 desktop:text-4xl
                  transition hover:scale-110
                  text-black"
                  >
                    <Link href="/booking">จองโต๊ะเลย!</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
