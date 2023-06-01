import LinksToCategories from "../LinksToCategories/LinksToCategories";

const SubHeader = () => {
  return (
    <>
      <div className="w-3/4 mx-auto">
        <div className=" bg-white  mx-2 md:mx-10 rounded-lg shadow-md mt-6">
          <div className="  p-4 flex justify-center items-center  ">
            <div className="">
              <LinksToCategories className="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SubHeader;
