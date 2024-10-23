import { useForm } from "react-hook-form";

export const LoginCard = ({ handleLogin }) => {
  const { register, handleSubmit, formState: { errors }
  } = useForm()

  const onSubmit = handleSubmit((data) => {
    handleLogin(data.mail, data.contraseña)
  })

  return (
    <form onSubmit={onSubmit} className="row justify-content-center">
      <div className="col-auto mb-4">
        <h1 className="mb-0 fw-bold cl-main-1">Iniciar Sesión</h1>
      </div>

      <div className="row align-items-center justify-content-center g-2">

        <div className="col-lg-6">
          <label htmlFor="mail" className="form-label fs-4 text-center mb-0">Email</label>
          <input
            className="form-control"
            type="email"
            placeholder="Ingresa tu email"
            {...register("mail", {
              required: {
                value: true,
                message: "Debes ingresar tu correo electronico."
              }
            })}
          />
          {
            errors.mail && <span className="cl-main-4">{errors.mail.message}</span>
          }
        </div>
      </div>

      <div className="row align-items-center justify-content-center g-2">
        <div className="col-lg-6">
          <label htmlFor="contraseña" className="form-label fs-4 text-center mb-0">Contraseña</label>
          <input
            className="form-control"
            type="password"
            placeholder="Ingresa tu contraseña"
            {...register("contraseña", {
              required: {
                value: true,
                message: "Debes ingresar tu contraseña."
              }
            })}
          />
          {
            errors.contraseña && <span className="cl-main-4">{errors.contraseña.message}</span>
          }
        </div>
      </div>

      <div className="col-auto mt-4">
        <button className="btn bg-second-3 cl-white px-5 btn-hover">Iniciar Sesión</button>
      </div>

    </form>
  )
}
