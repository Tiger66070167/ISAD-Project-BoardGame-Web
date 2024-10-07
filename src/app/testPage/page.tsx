'use client'
import boardFetcher from "../../../utils/core/fetcher/tableFetcher/boardFetcher";
import menuFetcher from "../../../utils/core/fetcher/tableFetcher/menuFetcher";

export default function Test() {

    async function uploadPic() {
        const file: HTMLInputElement = document.querySelector("input")!;
        const button = document.querySelector(".change");
        const img: HTMLImageElement = document.querySelector('.image')!;
        
        let a = new FormData();
        a.append("pic", file.files![0]);
        let c = new boardFetcher();
        await c.changeBoard(7, "Super nigga adventure power 2");
        img.src = URL.createObjectURL(file.files![0]);
    }

    return (
        <div className="h-screen flex justify-center items-center">
            <div className="bg-slate-500 h-3/4 w-1/4 rounded-2xl p-4">
                <div className="flex items-center justify-center h-4/5">
                    <img className="image h-4/5 rounded-xl shadow-2xl" src=""></img>
                </div>

                <div className="flex justify-center items-center h-1/5">
                    <label className="bg-cyan-400 text-black px-16 py-4 rounded-xl shadow-2xl" htmlFor="pic">picture</label>
                    <input className="hidden" type="file" name="pic" id="pic" onChange={uploadPic} />
                </div>
            </div>
        </div>
    )
}