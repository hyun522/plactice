import { useState } from "react";
import Carousel from "../components/Carousel";
import EllipseIcon from "../components/Ellipse";
import { createPortal } from "react-dom";
import ModalContent from "../components/Modal";

export default function HomePage() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className="content-container">
        <div>
          <p>안녕하세요 홈페이지입니다:)</p>
        </div>
        <div style={{ backgroundColor: "skyblue" }}>
          <Carousel />
        </div>
        <EllipseIcon fill="green" />
        <button onClick={() => setShowModal(true)}>Show modal</button>
      </div>
      {showModal &&
        createPortal(
          <ModalContent
            title="계정 복원하기"
            subtitle="로그인 실패"
            content="ID와 PW를 다시 한번 확인해주세요. 올바른 계정 정보를 입력하여 주세요."
            onClose={() => setShowModal(false)}
          />,
          document.body
        )}
    </>
  );
}
