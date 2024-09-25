import { Link } from "react-router-dom"

export const Home = () => {
  return (
    <main className="bg-grey">
      <section className="container-sm d-flex justify-content-between py-5">
        <article className="d-flex flex-column justify-content-center">
          <hgroup>
            <h3>Bienvenido a</h3>
            <h1>PASTAS ÑOQUI BALBOA</h1>
          </hgroup>
          <p>Proba nuestros nuevos ñoquis a la balboa</p>
          <Link className="btn" to="/productos">Comenzar Pedido</Link>
        </article>
        <figure className="m-0">
          <img src="/src/assets/images/gnoqui.png" alt="plato_gnoqui" className="img-fluid" />
        </figure>
      </section>
    </main>
  )
}
