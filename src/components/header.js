import styles from "../styles/Header.module.css";

export function MyHeader() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Welcome to the Builder Demo Editor</div>
      <a
        href="https://github.com/Builderio/demo-editor"
        target="_blank"
        rel="noreferrer"
      >
        View the sample code for this Next.js project
      </a>
    </div>
  );
}
