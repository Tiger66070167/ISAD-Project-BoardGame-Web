import fs from "node:fs/promises";
import crypto from 'crypto';

export default class pictureManager {
    public static async savePicture(file: File, folderPath: string): Promise<string> {
        let fileType = "." + file.name.split('.').at(-1);

        let name = this.randomName();
        
        folderPath = (folderPath[0] === '/') ?  folderPath : "/" + folderPath;
        const path = (folderPath.at(-1) === '/') ? folderPath : folderPath + '/';

        while(await this.checkFile(path + name + fileType)) {name = this.randomName();}
        
        fs.writeFile("public" + path + name + fileType, Buffer.from(await file.arrayBuffer()));

        return path + name + fileType;
    }

    public static async deletePicture(filePath: string): Promise<boolean>{
        try {
            filePath = "public" + filePath;
            await fs.rm(filePath);
            return true;
        } catch (error) {
            return false; 
        }
        
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