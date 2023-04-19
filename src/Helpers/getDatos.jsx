
import dataproduct from "../Data/DataProducts.json"


export default function getDatos() {
 
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(dataproduct);
        }, 1000);
      });
 
}


export const getItemsById = (id) => {
  return new Promise ((resolve, reject) => {
    setTimeout(()=>{
      const item = dataproduct.find((element) => element.id === id)
      resolve(item)
    }, 1000)
  })
}


