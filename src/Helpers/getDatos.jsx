
import dataproduct from "../Data/DataProducts.json"


export default function getDatos() {
 
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(dataproduct);
        }, 2000);
      });
 
}
