import styles from './page.module.scss';

interface Props {
  menuIsActive: boolean;
  setMenuIsActive: (isActive: boolean) => void; // This defines setMenuIsActive as a function that takes a boolean parameter and returns void;
}

export default function Header({menuIsActive, setMenuIsActive}: Props) {
  return (
    <div className={styles.header}>
      <div 
        onClick={() => {setMenuIsActive(!menuIsActive)}} 
        className={`
          ${styles.burger} ${menuIsActive ? 
          styles.burgerActive : 
          ""}
        `}
      ></div>
    </div>
)}