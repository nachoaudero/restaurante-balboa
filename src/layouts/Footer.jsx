
export const Footer = () => {
  return (
    <footer className="container-fluid bg-main-1">
      <section className="container-sm cl-white d-flex flex-column flex-md-row justify-content-around align-items-center text-center p-4">
        <article>
          <h5 className="px-3">SOCIAL</h5>
          <nav className="d-flex justify-content-between">
            <a href="#"><i className="bi bi-instagram cl-white"></i></a>
            <a href="#"><i className="bi bi-facebook cl-white"></i></a>
            <a href="#"><i className="bi bi-twitter-x cl-white"></i></a>
          </nav>
        </article>
        <article className="my-5 my-md-0">
          <p className="mb-0">pastasbalboa@gmail.com</p>
        </article>
        <article>
          <h5>DISEÑADO POR</h5>
          <p className="mb-0 fw-light">Audero Ignacio</p>
          <p className="mb-0 fw-light">Kibysz Aaron</p>
          <p className="mb-0 fw-light">Chiappetta Francisco</p>
        </article>
      </section>
      <hr className="container-sm cl-second-4 my-0" />
      <aside className="container-sm text-center p-4">
        <p className="fw-lighter cl-white mb-0">Copyrigth <i className="bi bi-c-circle" /> 2024 | Todos los derechos reservados</p>
      </aside>
    </footer>
  )
}
