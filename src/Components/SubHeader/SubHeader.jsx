import LinksToCategories from "../LinksToCategories/LinksToCategories";

const SubHeader = () => {
  return (
    <>
      <div className="sm:w-3/4 mx-auto">
        <div className=" bg-white   rounded-lg shadow-md mt-6">
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
