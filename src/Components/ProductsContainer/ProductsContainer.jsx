import { useEffect } from "react";

function ProductsContainer() {
  const getDatos = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("OK");
      }, 2000);
    });
  };

  useEffect(() => {
    getDatos().then((res) => {
      console.log(res);
    });
  }, []);


///vas x el mi 39


  return (
    <>
      <div className="">

        <div className="">

          <div className="">
            <img src="" alt="" />
          </div>

          <div className="">
            <p></p>
          </div>

          <div className="">
            <p></p>
          </div>

        </div>

      </div>
    </>
  );
}
export default ProductsContainer;
