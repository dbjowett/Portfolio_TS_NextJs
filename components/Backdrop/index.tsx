// import '../styles/modal.css';
import styles from '../Modal/modal.module.css';

export default function Backdrop({ onClick }: any) {
  return <div className={styles.backdrop} onClick={onClick} />;
}
