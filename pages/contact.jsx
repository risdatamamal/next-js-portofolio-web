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
            <p className="description">Silahkan hubungi kontak dibawah ini:</p>
            <ul className="contact-links">
              <li className="contact-item">
                <Link href="mailto:mail@risdatamamal.my.id">
                  Email
                </Link>
              </li>
              <li className="contact-item">
                <Link href="tel:+6285156559685">Phone Number</Link>
              </li>
              <li className="contact-item">
                <Link href="https://wa.me/6285156559685">
                  Whatsapp
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
