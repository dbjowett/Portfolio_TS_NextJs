// import '../styles/modal.css';
import styles from './modal.module.css';

export default function Modal({ onClick }: { onClick: any }) {
  return (
    <div className={styles.modal}>
      <h3>Email Sent. Thank you!</h3>
      <button className={styles.modalBtn} onClick={onClick}>
        Close
      </button>
    </div>
  );
}
