import { FastAverageColor } from "fast-average-color";

export const getColorFromURL= async(url:string)=>{

    const fac= new FastAverageColor();
    const color= await fac.getColorAsync(url)
    if(color.error)
        return null
    return color.hex


}