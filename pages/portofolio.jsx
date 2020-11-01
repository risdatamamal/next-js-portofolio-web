import Link from "next/link";
import Navbar from "../components/Navbar";
import Head from "next/head";

function Portofolio() {
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
              Sint minim et Lorem minim aliquip reprehenderit pariatur. Labore
              qui exercitation sint amet amet est ad excepteur. Consectetur
              fugiat minim voluptate elit mollit pariatur ullamco irure et
              incididunt mollit. Nostrud laborum labore Lorem veniam ut laboris
              consectetur enim minim aliqua.
            </p>

            <div className="portofolio-wrapper">
              <div className="portofolio-item">
                <img src="/nntn-kuy.png" className="portofolio-image" />
                <h4 className="portofolio-name">NontonKuy App</h4>
                <div className="portofolio-category">Mobile Dev</div>
              </div>
              <div className="portofolio-item">
                <img src="/nntn-kuy.png" className="portofolio-image" />
                <h4 className="portofolio-name">Nonton App </h4>
                <div className="portofolio-category">Mobile Dev</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Portofolio;
