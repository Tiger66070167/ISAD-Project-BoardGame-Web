'use client'

export default function Test() {


    async function fet() {
        const file = document.querySelector("input")!;
        const button = document.querySelector(".change");
        const img: HTMLImageElement = document.querySelector('.image')!;
        let tmp = new FormData();
        tmp.append("pic", file.files![0]);
        let res = await fetch("http://localhost:3000/api/testApi", {
            method: "POST",
            body: tmp
        });
        let come = await res.formData();
        let a = come.get("pic") as File;
        let sto = { file: a };
        return sto;
    }

    async function uploadPic() {
        const file = document.querySelector("input")!;
        const button = document.querySelector(".change");
        const img: HTMLImageElement = document.querySelector('.image')!;
        console.log("client file: ", file.files![0]);

        let sto = await fet();
        img.src = URL.createObjectURL(sto.file);
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