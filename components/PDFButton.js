"use client";
import jsPDF from "jspdf";

export default function PDFButton({ t }) {
  const downloadPDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("CV", 10, 10);

    doc.setFontSize(12);
    doc.text("Your Name", 10, 20);
    doc.text("Software Engineer", 10, 30);

    doc.text("Skills:", 10, 50);
    doc.text("- Python", 10, 60);
    doc.text("- React", 10, 70);

    doc.save("cv.pdf");
  };

  return (
    <button
      onClick={downloadPDF}
      className="mt-3 border px-4 py-1 rounded hover:opacity-80"
    >
      {t.download}
    </button>
  );
}