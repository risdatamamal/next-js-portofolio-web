import React, { useEffect, useRef} from "react";
import { Document, Page} from "react-pdf";
import Navbar from "../components/Navbar";
import Head from "next/head";

function Portofolio() {

  const canvasRef = useRef(null);

  // function onDocumentLoadSuccess({ numPages: nextNumPages }) {
  //   setNumPages(nextNumPages);
  // }

  useEffect(() => {
    (async function () {
      // We import this here so that it's only loaded during client-side rendering.
      const pdfJS = await import("pdfjs-dist/build/pdf");
      pdfJS.GlobalWorkerOptions.workerSrc =
        window.location.origin + "/pdf.worker.min.js";
      const pdf = await pdfJS.getDocument("portofolio.pdf").promise;

      const page = await pdf.getPage(1);
      const viewport = page.getViewport({ scale: 1.5 });

      // Prepare canvas using PDF page dimensions.
      const canvas = canvasRef.current;
      const canvasContext = canvas.getContext("2d");
      canvas.height = viewport.height;
      canvas.width = viewport.width;

      // Render PDF page into canvas context.
      const renderContext = { canvasContext, viewport };
      page.render(renderContext);
    })();
  }, []);

  return (
    <>
      <Head>
        <title>Portofolio</title>
      </Head>
      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 className="title">Portofolio</h1>
            <p className="description">
              Berikut merupakan portfolio saya dari berbagai project. Mulai dari
              joki tugas akhir, dan project Internship.
            </p>

            <div className="portofolio-wrapper">
              <canvas ref={canvasRef} style={{ height: "100vh" }} />
              {/* <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
                {Array.from({ length: numPages }, (_, index) => (
                  <Page
                    key={`page_${index + 1}`}
                    pageNumber={index + 1}
                    renderAnnotationLayer={false}
                    renderTextLayer={false}
                  />
                ))}
              </Document> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Portofolio;
