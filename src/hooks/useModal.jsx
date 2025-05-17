import { useEffect, useState, useRef } from 'react';

export default function useModal() {
  const [isOpen, setModal] = useState(false);
  const modalRef = useRef(null);

  const handleOpenModal = (e) => {
    e.stopPropagation()
    setModal((prev) => !prev)};
  const handleCloseModal = () => setModal((prev) => !prev);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') handleCloseModal();
    };

    const handleClickOutside = (e) => {
      if (isOpen&&modalRef.current && !modalRef.current.contains(e.target)) {
        handleCloseModal();
      }
    };
    const handleActiveLink = (e) => {
      
      if (e.target.tagName === "A" || e.target.tagName === "BUTTON") {
        handleCloseModal();
      }
    };

    const handleClick = (e) => {
        if (isOpen) {
          
            handleActiveLink(e);
            handleClickOutside(e);
          }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('click', handleClick);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('click', handleClick);
    };
  }, [isOpen]);

  return { isOpen, modalRef, handleOpenModal, handleCloseModal };
}
