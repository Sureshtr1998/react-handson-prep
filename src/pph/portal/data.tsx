import { useState, useEffect } from "react";
import Modal from ".";

const MagicPortal = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Simulate asynchronous loading/rendering
    setTimeout(() => {
      setShowModal(true);
    }, 1000);
  }, []);

  return (
    <div>
      {/* Other content */}
      {showModal && <Modal>Modal Content</Modal>}
    </div>
  );
};

export default MagicPortal;
