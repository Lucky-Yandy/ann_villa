import {createContext} from "react";
const defaultValue ={
   locale:'nl',
   setLocale:()=>{}

}
export default createContext(defaultValue);
