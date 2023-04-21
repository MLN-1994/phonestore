
import dataproduct from "../Data/DataProducts.json"


export default function getDatos() {
 
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(dataproduct);
        }, 1000);
      });
 
}





export const getItemById = (id) =>{
  return new Promise((resolve, reject) => {
    setTimeout(()=>{
      const item = dataproduct.find((el) => el.id === id)
      resolve(item)
    }, 1000)
  })
}