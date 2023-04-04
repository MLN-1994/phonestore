
import dataproduct from "../Data/DataProducts.json"


export default function getDatos() {
 
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(dataproduct);
        }, 2000);
      });
 
}


export const getItemsById = (id) =>{
  return new Promise ((resolve, reject) =>{
    setTimeout(()=>{
      const item = dataproduct.find((element) => element.id === id)
      resolve(item)
    }, 2000)
  })
}
