import { useState } from "react";
import PropTypes from 'prop-types';

const Modal = ({ isOpen, onClose }) => {
    const [isModalVisible, setIsModalVisible] = useState(isOpen);
    console.log(isOpen)

  const closeModal = () => {
    setIsModalVisible(false);
    onClose();
  };

  if (!isModalVisible) {
    return null;
  }

  return (
 <div style={{
    position: "fixed",
    top: 0,
    left: 0,
    backgroundColor: "rgba(6, 24, 44, 0.9)",
    width: "100vw",
    height: "100vh",
    zIndex: 300,
    overflow: "auto",
 }}>

 </div>

  )
}

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
  };
  

export default Modal