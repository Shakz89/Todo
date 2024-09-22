import React from "react";

function Footer({ length }) {
  const year = new Date();
  return (
    <footer className="footer">
      <p className="total-items">
        {length >= 1 ? (
          <p>
            Количество дел в вашем списке:  {length}
          </p>
        ) : (
          <p>
            Поздравляем Ваш список выполнен!!!
          </p>
        )}
      </p>
      <div className="year"><h2>{year.getFullYear()}</h2></div>
    </footer>
  );
}

export default Footer;
