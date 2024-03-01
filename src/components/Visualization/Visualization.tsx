/* eslint-disable react-refresh/only-export-components */
import styles from "./Visualization.module.css";
import html2pdf from "html2pdf.js";
import { Switcher } from "../Switcher/Switcher";

export function handleUserClick() {
  const contentElement = document.getElementById("content1");

  html2pdf(contentElement, {
    margin: 7,
    filename: "ContratoInfra.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    pagebreak: { mode: ["css"] },
  }).then((pdf: { save: (arg0: string) => void }) => {
    pdf.save("ContratoInfra.pdf");
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
