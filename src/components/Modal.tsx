import { useEffect } from "react";
import styles from "./Modal.module.scss";

interface ModalContentProps {
  onClose: () => void;
  title: string;
  subtitle: string;
  content: string;
}

export default function ModalContent({
  onClose,
  title,
  subtitle,
  content,
}: ModalContentProps) {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <h2 className={styles.title}>{title}</h2>
          <button
            className={styles.closeIcon}
            onClick={onClose}
            aria-label="모달 닫기"
          >
            ✕
          </button>
        </div>
        <div className={styles.modalBody}>
          <h3 className={styles.subtitle}>{subtitle}</h3>
          <p className={styles.content}>{content}</p>
        </div>
        <button className={styles.closeButton} onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}
