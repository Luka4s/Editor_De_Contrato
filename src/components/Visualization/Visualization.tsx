/* eslint-disable react-refresh/only-export-components */
import styles from "./Visualization.module.css";
import html2pdf from "html2pdf.js";
import { Switcher } from "../Switcher/Switcher";

export function handleUserClick() {
  const contentElement = document.getElementById("content1");

  html2pdf(contentElement, {
    margin: [3, 7, 0, 7],
    filename: "Contrato.pdf",
    image: { type: "png", quality: 0.98 },
    html2canvas: { scale: 1 },
    jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    pagebreak: { mode: ["css"] },
  }).then((pdf: { save: (arg0: string) => void }) => {
    pdf.save("Contrato.pdf");
  });
}

export function Visualization() {
  return (
    <div>
      <section className={styles.visualization}>
        <Switcher />
      </section>
    </div>
  );
}
