import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import routes from '../routes/routes.d';

function HeaderLink() {
  return (
    <>
      <header>
        <h1>Proyectos</h1>
      </header>
      <section>
        <span>Aquí tienes una lista de proyectos hechos en React:</span>
        <div>
          <Link to={routes.qrChallenge}>QR Challenge</Link>
        </div>
      </section>
    </>
  );
}

export default HeaderLink;
