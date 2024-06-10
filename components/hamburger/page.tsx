import styles from './page.module.scss';

interface Props {
  menuIsActive: boolean;
  setMenuIsActive: (isActive: boolean) => void; // This defines setMenuIsActive as a function that takes a boolean parameter and returns void;
}

export default function Hamburger({menuIsActive, setMenuIsActive}: Props) {
  return (
    <div className={styles.hamburger_wrapper}>
      <div className={styles.hamburger}
        onClick={() => {setMenuIsActive(!menuIsActive)}} 
      >
        <div 
          // onClick={() => {setMenuIsActive(!menuIsActive)}} 
          className={`
            ${styles.hamburgerLines} ${menuIsActive ? 
            styles.hamburgerActive : 
            ""}
          `}
        ></div>
      </div>
    </div>

)}