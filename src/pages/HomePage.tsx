import Carousel from "../components/Carousel";
import EllipseIcon from "../components/Ellipse";

export default function HomePage() {
  return (
    <>
      <div>
        <p>안녕하세요 홈페이지입니다:)</p>
      </div>
      <div style={{ backgroundColor: "skyblue" }}>
        <Carousel />
      </div>
      <EllipseIcon fill="green" />
    </>
  );
}
