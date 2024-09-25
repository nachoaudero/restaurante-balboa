
export const Footer = () => {
  return (
    <footer className="container-fluid bg-main-1">
      <div className="container-sm cl-white d-flex flex-column flex-md-row justify-content-around align-items-center text-center p-4">
        <div>
          <h5 className="px-3">SOCIAL</h5>
          <div className="d-flex justify-content-between">
            <a href="#"><i className="bi bi-instagram cl-white"></i></a>
            <a href="#"><i className="bi bi-facebook cl-white"></i></a>
            <a href="#"><i className="bi bi-twitter-x cl-white"></i></a>
          </div>
        </div>
        <div className="my-5 my-md-0">
          <p className="mb-0">pastasbalboa@gmail.com</p>
        </div>
        <div>
          <h5>DISEÑADO POR</h5>
          <p className="mb-0 fw-light">Audero Ignacio</p>
          <p className="mb-0 fw-light">Kibysz Aaron</p>
          <p className="mb-0 fw-light">Chiappetta Francisco</p>
        </div>
      </div>
      <hr className="container-sm cl-second-4 my-0" />
      <div className="container-sm text-center p-4">
        <p className="fw-lighter cl-white mb-0">Copyrigth <i className="bi bi-c-circle" /> 2024 | Todos los derechos reservados</p>
      </div>
    </footer>
  )
}
