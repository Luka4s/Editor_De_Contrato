import styles from "./Visualization.module.css";
import html2pdf from "html2pdf.js";
import { TemplateInfra } from "../Templates/Infraestrutura/Template-infra";
import { Switcher } from "../Switcher/Switcher";

export function handleUserClick() {
  const contentElement = document.getElementById("content1");

  // const idsWithPageBreak = ["page-break"]; // Adicione os IDs após os quais deseja quebras de página

  const elements = contentElement!.children;

  // Array.from(elements).forEach((element) => {
  //   const elementId = element.id;

  //   if (elementId && idsWithPageBreak.includes(elementId)) {
  //     const pageBreak = document.createElement("div");
  //     pageBreak.style.pageBreakBefore = "always";
  //     contentElement!.insertBefore(pageBreak, element.nextSibling);
  //   }
  // });


  html2pdf(contentElement, {
    margin: 10,
  filename: "ContratoInfra.pdf",
  image: { type: "jpeg", quality: 0.98 },
  html2canvas: { scale: 2 },
  jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
  pagebreak: { mode: ['avoid-all'] },
  }).then((pdf) => {
    pdf.save("ContratoInfra.pdf");
  });
}

export function Visualization() {

  return (
    <div>
      <section className={styles.visualization}>
        <Switcher/>
      </section>
    </div>
  );
}
