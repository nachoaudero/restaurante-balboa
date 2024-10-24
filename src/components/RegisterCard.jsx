import { useForm } from "react-hook-form"
import { sendEmailVerificationCode } from "../utilities/sendEmailVerificationCode.jsx";

export const RegisterCard = ({ setShowModal, generateCode, setUser }) => {
  const { register, handleSubmit, formState: { errors }, watch } = useForm()

  const handleRegister = async (usuario) => {
    setUser(usuario)
    const code = generateCode()
    console.log(usuario)
    await sendEmailVerificationCode(usuario.mail, code, usuario.nombre)
    setShowModal(true)
  }

  const onSubmit = handleSubmit((usuario) => {
    handleRegister(usuario)
  })

  return (
    <form onSubmit={onSubmit} className="row justify-content-center">
      <div className="col-auto mb-4">
        <h1 className="mb-0 fw-bold cl-main-1">Registrarse</h1>
      </div>

      <div className="row align-items-center justify-content-center g-2">
        <div className="col-md-8 col-lg-6">
          <label htmlFor="nombre" className="form-label fs-4 text-center mb-0">Nombre Completo</label>
          <input
            className="form-control"
            type="text"
            placeholder="Ingresa tu nombre"
            {...register("nombre", {
              required: {
                value: true,
                message: "Debes ingresar tu nombre."
              },
              maxLength: {
                value: 15,
                message: "El nombre no debe tener mas de 15 caracteres."
              }
            })}
          />
          {
            errors.nombre && <span className="cl-main-4">{errors.nombre.message}</span>
          }
        </div>
      </div>

      <div className="row align-items-center justify-content-center g-2">
        <div className="col-md-8 col-lg-6">
          <label htmlFor="mail" className="form-label fs-4 text-center mb-0">Correo Electronico</label>
          <input
            className="form-control"
            type="email"
            placeholder="Ingresa tu email"
            {...register("mail", {
              required: {
                value: true,
                message: "Debes ingresar tu email."
              },
              pattern: {
                value: /^[a-z0-9._%+-]+@[a-z0-9·-]+\.[a-z]{2,4}$/,
                message: "Correo no valido."
              }
            })}
          />
          {
            errors.mail && <span className="cl-main-4">{errors.mail.message}</span>
          }
        </div>
      </div>

      <div className="row align-items-center justify-content-center g-2">
        <div className="col-md-4 col-lg-3">
          <label htmlFor="edad" className="form-label fs-4 text-center mb-0">Edad</label>
          <input
            className="form-control"
            type="number"
            placeholder="Ingresa tu edad"
            {...register("edad", {
              required: {
                value: true,
                message: "Debes ingresar tu edad."
              }
            })}
          />
          {
            errors.edad && <span className="cl-main-4">{errors.edad.message}</span>
          }
        </div>
        <div className="col-md-4 col-lg-3">
          <label htmlFor="dni" className="form-label fs-4 text-center mb-0">DNI</label>
          <input
            className="form-control"
            type="number"
            placeholder="Ingresa tu DNI"
            {...register("dni", {
              required: {
                value: true,
                message: "Debes ingresar tu dni."
              },
              minLength: {
                value: 6,
                message: "Debe ingresar un dni valido."
              }
            })}
          />
          {
            errors.dni && <span className="cl-main-4">{errors.dni.message}</span>
          }
        </div>
      </div>

      <div className="row align-items-center justify-content-center g-2">
        <div className="col-md-4 col-lg-3">
          <label htmlFor="contraseña" className="form-label fs-4 text-center mb-0">Contraseña</label>
          <input
            className="form-control"
            type="password"
            placeholder="Ingresa su contraseña"
            {...register("contraseña", {
              required: {
                value: true,
                message: "Debes ingresar una contraseña."
              },
              minLength: {
                value: 4,
                message: "La contraseña debe tener minimo 4 caracteres."
              },
              maxLength: {
                value: 15,
                message: "La contraseña debe tener maximo 15 caracteres."
              }
            })}
          />
          {
            errors.contraseña && <span className="cl-main-4">{errors.contraseña.message}</span>
          }
        </div>
        <div className="col-md-4 col-lg-3">
          <label htmlFor="confirmarContraseña" className="form-label fs-4 text-center mb-0">Confirmar contraseña</label>
          <input
            className="form-control"
            type="password"
            placeholder="Confirma contraseña"
            {...register("confirmarContraseña", {
              required: {
                value: true,
                message: "Debes confirmar tu contraseña."
              },
              validate: value => value === watch("contraseña") || "Las contraseñas no coinciden."
            })}
          />
          {
            errors.confirmarContraseña && <span className="cl-main-4">{errors.confirmarContraseña.message}</span>
          }
        </div>
      </div>

      <div className="row align-items-center justify-content-center g-2">
        <div className="col-md-8 col-lg-6">
          <input
            className="form-check-input me-2"
            type="checkbox"
            {...register("terminos", {
              required: {
                value: true,
                message: "Debes aceptar los terminos y condiciones."
              }
            })}
          />
          <label htmlFor="terminos" className="form-check-label text-center mb-0 me-2">Acepto terminos y condiciones</label>
          {
            errors.terminos && <span className="cl-main-4">{errors.terminos.message}</span>
          }
        </div>
      </div>

      <div className="col-auto mt-4">
        <button className="btn bg-second-3 cl-white px-5 btn-hover">Registrarse</button>
      </div>
    </form>
  )
}
