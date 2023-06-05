import videoBanner from "../../assets/Video/banner2x1.mp4"

const Banner = () =>{

return(
    <>
    <div className="flex justify-center w-full  mt-16">
        <video className=" rounded  " src={videoBanner} autoPlay loop muted/>
    </div>
       
    </>
)


}
export default Banner