import React from "react";
import css from "./footer.module.css";

const Footer = ({ backlog, finished }) => {
  return (
    <footer className={css.container}>
      <div className={css.active}>
        <p className={css.para}>
          Active tasks: <strong>{backlog.length}</strong>
        </p>
        <p className={css.para}>
          Finished tasks: <strong>{finished.length}</strong>
        </p>
      </div>
          </footer>
  );
};
export default Footer;
