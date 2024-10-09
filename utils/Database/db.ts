import dbConnector from "./dbConnector";
//Create global variable so it would not get overwritten or removed when hotreload happens

const dbInstance = () => {
    return new dbConnector();
}

declare global {
  var instance: undefined | dbConnector;
}

const db = globalThis.instance ?? dbInstance();
export default db;

//Check if global instance is already available  if not then you can get new instance if global instance is available then it would //use that instead and assign to variable where you will return so you can use it to other api files . 
//Check if environment is in production or not . if it is then it would set the global instance from instance instead . 
if (process.env.NODE_ENV !== 'production') globalThis.instance = db;