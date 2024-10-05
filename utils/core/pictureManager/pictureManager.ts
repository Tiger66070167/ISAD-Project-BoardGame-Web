import fs from "node:fs/promises";
import crypto from 'crypto';
import { image } from "@nextui-org/theme";
import { buffer } from "stream/consumers";

export default class pictureManager {
    public static async savePicture(file: File, folderPath: string): Promise<string> {
        let fileType = "." + file.name.split('.').at(-1);

        let name = this.randomName();

        const path = (folderPath[-1] === '/') ? folderPath : folderPath + '/';

        
        while(await this.checkFile(path + name + fileType)) {name = this.randomName();}
        
        fs.writeFile(path + name + fileType, Buffer.from(await file.arrayBuffer()));

        return path + name + fileType;
    }

    public static async deletePicture(filePath: string): Promise<boolean>{
        try {
            await fs.rm(filePath);
            return true;
        } catch (error) {
            return false; 
        }
        
    }

    public static async readPicture(path: string): Promise<File> {
        let read = await fs.readFile(path)
        let blob = new Blob([read]);
        let file: File = new File([blob], path.split("/").at(-1)!, {type: "image/" + path.split("/").at(-1)?.split(".").at(-1)});
        return file;
    } 

    private static randomName() {
        return crypto.randomBytes(8).toString('hex');
    }

    private static async checkFile(path: string): Promise<boolean> {
        try {
            const status = await fs.stat(path);
            return true;
        } catch {
            return false;
        }
    }
}