//// ข้อมูลเมนูอาหาร
class Food{
    private foodID : number;
    private name : string;
    private description : string;
    private price : number;
    private pictureID : number;

//constructor
    public constructor(name: string, price:number){
        this.name = name;
        this.price = price;

        this.description = "";

        //ต้องทำ loop รัวข้มูลใน array แล้วสร้าง ID ใหม่
        this.foodID = 0;

        //ต้องมีรูปภาพใน Database แล้วค่อยทำ pointer ชี้ไปที่รูป
        this.pictureID = 0;
    }

//get function
    public get_foodID():number{
        return this.foodID;
    }
    public get_name():string{
        return this.name;
    }
    public get_description():string{
        return this.description;
    }
    public get_price():number{
        return this.price;
    }
    public get_pictureID():number{
        return this.pictureID;
    }
//set function
    public set_name(name:string){
        this.name = name;
    }
    public set_description(description:string){
        this.description = description;
    }
    public set_price(price:number){
        this.price = price;
    }
    public set_pictureID(pictureID:number){
        this.pictureID = pictureID;
    }

}
