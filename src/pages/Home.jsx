import { Link } from "react-router-dom"

export const Home = () => {
  return (
    <main className="bg-grey d-flex align-items-center flex-grow-1">
      <section className="container-sm">
        <div className="row my-5">
          <div className="col-lg-6 d-flex justify-content- mb-5 mb-lg-0">
            <article>
              <hgroup>
                <h2 className="cl-second-1 fw-bolder text-center text-lg-start m-0 lh-lg">Bienvenido a</h2>
                <h1 className="display-1 fw-bolder cl-main-1 text-center text-lg-start mb-3 lh-1">PASTAS ÑOQUI BALBOA</h1>
                <h4 className="fw-normal text-center text-lg-start mb-3">Proba nuestros nuevos ñoquis a la balboa</h4>
              </hgroup>
              <nav className="d-flex justify-content-lg-start justify-content-center">
                <Link className="btn bg-second-3 cl-white px-5 btn-hover" to="/productos">Comenzar Pedido</Link>
              </nav>
            </article>
          </div>
          <div className="col-lg-6">
            <figure className="m-0">
              <img src="/src/assets/images/gnoqui.png" alt="plato_gnoqui" className="img-fluid" />
            </figure>
          </div>
        </div>
      </section>
    </main>
  )
}
