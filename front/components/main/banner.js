import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Banner() {
  return (
    <div style={{marginTop: "-50px"}}>
      <Carousel autoPlay showThumbs={false} infiniteLoop>
        <div>
          <img style={{ height: "320px" }} alt="" src="/donlee.jpg" />
          {/* <p className="legend">Legend 1</p> */}
        </div>
        <div>
          <img style={{ height: "320px" }} alt="" src="/logo.png" />
          {/* <p className="legend">Legend 2</p> */}
        </div>
      </Carousel>
    </div>
  )
}