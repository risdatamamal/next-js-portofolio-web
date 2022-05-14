import Navbar from "../components/Navbar";
import Head from "next/head";

function About() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 className="title">Profile</h1>

            <p className="description">
              Humans are outnumbered by devices. To manage it we need a new era
              of smartphone technology, namely Mobile Applications. Intuitive.
              And I love the fact that they produce software and solutions that
              impact everyone's life.
            </p>

            <p className="description">
              Since the last three years I entered college, before entering my
              first year I always studied programming languages ​​from the java
              programming language, then the kotlin programming language and the
              php programming language to hone my logic. I have a hobby that is
              photography because it is fun for me to calm my heart when I am
              having problems with my life. This hobby is not just a hobby but
              can also make me a freelance photography worker. When I entered
              college, I started joining the BEM organization in my second year,
              and started a paid project in the second year with someone's final
              project.
            </p>

            <p className="description">
              I'm Risda Tamam Aljava, Student College a 6th semester. I'm
              interested in Mobile Development using Flutter or Kotlin migrating
              from Java. Development Web view using Next.js or Nuxt.js. Then
              interested in Backend using PHP Laravel, Express.js. Database with
              MySQL, Postgresql and Firebase Realtime Database. Besides that, I
              am also interested in Machine Learning, CTF and Degen Part-Time.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
