import styles from "./Visualization.module.css";
import html2pdf from "html2pdf.js";
import { TemplateInfra } from "../Templates/Infraestrutura/Template-infra";

export function handleUserClick() {
  const contentElement = document.getElementById("content1");

  const idsWithPageBreak = ["page-break"]; // Adicione os IDs após os quais deseja quebras de página

  const elements = contentElement!.children;

  Array.from(elements).forEach((element) => {
    const elementId = element.id;

    if (elementId && idsWithPageBreak.includes(elementId)) {
      const pageBreak = document.createElement("div");
      pageBreak.style.pageBreakBefore = "always";
      contentElement!.insertBefore(pageBreak, element.nextSibling);
    }
  });

  html2pdf(contentElement, {
    margin: 10,
    filename: "filename.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    pagebreak: {
      before: ".beforeClass",
      after: ["#page-break", "#after2"],
      avoid: "img",
    },
  }).then((pdf: { save: () => void }) => {
    pdf.save();
  });
}

export function Visualization() {
  // const { userInfo, cnpjUser, city, estado, date, itenTable } = InputUser();

  return (
    <div>
      <section className={styles.visualization}>
        <TemplateInfra />
      </section>
    </div>
  );
}
