import LinksToCategories from "../LinksToCategories/LinksToCategories"

const SubHeader = () =>{

    return(
        <>
            <div className="bg-gradient-to-r from-indigo-500 via-indigo-300 to-black  p-4 flex justify-center items-center shadow-md">
             <div className="">
                 <LinksToCategories />
              </div>
            </div>
        </>
    )
}
export default SubHeader