export default function PDFButton() {
  return (
    <a
      href="/cv.pdf"
      download
      className="px-6 py-3 bg-blue-500 rounded-xl text-white hover:opacity-80"
    >
      Download CV
    </a>
  );
}