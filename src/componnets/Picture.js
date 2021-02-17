import Modal from "./Modal/Modal";
import { useState } from "react";

const Picture = (props) => {
  const [modalOpen, setModalOpen] = useState(false);
  const ModalImage = <img src={props.url} className="img-modal" />;

  return (
    <>
      <span onClick={() => setModalOpen(true)} className="img-container">
        <img src={props.url} className="img-gallery" />
      </span>
      <Modal
        show={modalOpen}
        onClose={() => setModalOpen(false)}
        children={ModalImage}
      />
    </>
  );
};

export default Picture;
