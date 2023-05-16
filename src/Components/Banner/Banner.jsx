import videoBanner from "../../assets/Video/banner2x1.mp4"

const Banner = () =>{

return(
    <>
    <div className="">
        <video className=" rounded  shadow-sm" src={videoBanner} autoPlay loop muted/>
    </div>
       
    </>
)


}
export default Banner