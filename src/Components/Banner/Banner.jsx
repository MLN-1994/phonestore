import videoBanner from "../../assets/Video/banner2x1.mp4"

const Banner = () =>{

return(
    <>
    <div className="mb-4">
        <video className="  rounded h-5/6 shadow-sm" src={videoBanner} autoPlay loop muted/>
    </div>
       
    </>
)


}
export default Banner