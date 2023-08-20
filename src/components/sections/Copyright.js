const Copyright = () => {
  return (
    <section className="copyright">
      <img
        alt=""
        className="z-1 hide-mobile"
        src="assets/separator-copyright.png"
      />
      <div>
        <span>© {new Date().getFullYear()} Risda Tamam Aljava</span>
        <span>
          Designed By{" "}
          <a target="_blank" href="#">
            Risdatamamal
          </a>
        </span>
        <ul>
          <li>
            <a href="https://github.com/risdatamamal">
              <i className="fa-brands fa-github" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/risdatamamal/">
              <i className="fa-brands fa-linkedin" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/_risdatamamal/">
              <i className="fa-brands fa-instagram" />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/risdatamamal/">
              <i className="fa-brands fa-facebook" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default Copyright;
