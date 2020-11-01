import Link from "next/link";
import Navbar from "../components/Navbar";
import Head from "next/head";

function Contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 className="title">Contact</h1>
            <p className="description">
              Sint minim et Lorem minim aliquip reprehenderit pariatur.
            </p>
            <ul className="contact-links">
              <li className="contact-item">Email: mail@risdatamamal.my.id</li>
              <li className="contact-item">Phone: +6285156559685</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
