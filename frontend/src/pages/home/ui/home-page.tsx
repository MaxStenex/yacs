import Image from "next/image";
import styles from "./home-page.module.scss";

type File = {
  id: string;
  previewSrc: string;
  originalSrc: string;
  name: string;
};

const mockFiles: File[] = new Array(58).fill(undefined).map((_, i) => {
  const file = Math.random() < 0.5 ? "space.jpg" : "mountains.jpg";

  return {
    id: String(i),
    name: file,
    originalSrc: `/${file}`,
    previewSrc: `/${file}`,
  };
});

export const HomePage = () => {
  const files = mockFiles;

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h3 className={styles.title}>Files</h3>
        <div className={styles.pageSettings}>Page settings (Filters, View)</div>
      </header>
      <div className={styles.fileList}>
        {files.map((f) => (
          <div key={f.id} className={styles.file}>
            <Image src={f.previewSrc} width={80} height={80} alt="" />
            <div className={styles.fileName}>{f.name}</div>
          </div>
        ))}
        <div className={styles.emptyFile}></div>
      </div>
    </div>
  );
};
