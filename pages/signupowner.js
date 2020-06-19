import React from 'react'
import NavbarLanding from '../components/NavbarLanding'
import Layout from '../components/Layout/Container'
import imgPormotionSignUp from '../public/img/common/promotion-up.svg'
import { useFormik } from 'formik'
import * as Yup from 'yup'

export default function signupowner () {
  // validation for phone number
  const phoneRegEx = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
  // validation
  const formik = useFormik({
    initialValues: {
      ownerName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      password: '',
      passwordConfirm: ''
    },
    validationSchema: Yup.object({
      ownerName: Yup.string().required('Campo Obligatorio'),
      lastName: Yup.string().required('Campo Obligatorio'),
      email: Yup.string().email().required('Campo Obligatorio'),
      phone: Yup.string().required('Campo Obligatorio'),
      address: Yup.string().required('Campo Obligatorio'),
      password: Yup.string().required('Campos Obligatorios'),
      passwordConfirm: Yup.string().required('Campos Obligatorios')
    }),
    onSubmit: value => {
      console.log('enviando')
      console.log(value)
    }
  })

  const classNameOwnerName = formik.touched.ownerName && formik.errors.ownerName ? 'inputErrorOwnerName' : null
  const classNameLastName = formik.touched.lastName && formik.errors.lastName ? 'inputErrorLastName' : null
  const classNameEmail = formik.touched.email && formik.errors.email ? 'inputErrorEmail' : null
  const classNamePhone = formik.touched.phone && formik.errors.phone ? 'inputErrorPhone' : null
  const classNameAddress = formik.touched.address && formik.errors.address ? 'inputErrorAddress' : null
  const classNamePassword = formik.touched.password && formik.errors.password ? 'inputErrorPassword' : null
  const classNamePasswordConfirm = formik.touched.passwordConfirm && formik.errors.passwordConfirm ? 'inputErrorPasswordConfirm' : null

  return (
    <Layout>
      <NavbarLanding />
      <div className='container'>
        <div className='row login-container mx-auto mb-4'>
          <div className='col-12 col-lg-6 bg-login p-5'>
            <h6 className='mb-4'>Innova tu negocio con <strong className='title-login'>SurtiShapp</strong></h6>
            <form className='form-register-owner scroll d-flex flex-column align-content-center' onSubmit={formik.handleSubmit}>
              <div className='form-group'>
                <label className='label-style'>NOMBRE DEL PROPIETARIO</label>
                <div className='icon-inside-input'>
                  <span className='icon icon-user' />
                  <input
                    type='text'
                    name='ownerName'
                    className={`form-control inputStyle ${classNameOwnerName}`}
                    placeholder='John'
                    value={formik.values.ownerName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
              </div>
              <div className='form-group'>
                <label className='label-style'>APELLIDOS</label>
                <div className='icon-inside-input'>
                  <span className='icon icon-user' />
                  <input
                    type='text'
                    name='lastName'
                    className={`form-control inputStyle ${classNameLastName}`}
                    placeholder='Doe'
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
              </div>
              <div className='form-group'>
                <label className='label-style'>EMAIL</label>
                <div className='icon-inside-input'>
                  <span className='icon icon-email' />
                  <input
                    type='email'
                    name='email'
                    className={`form-control inputStyle ${classNameEmail}`}
                    placeholder='john@ejemplo.com'
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
              </div>
              <div className='form-group'>
                <label className='label-style'>Teléfono</label>
                <div className='icon-inside-input'>
                  <span className='icon icon-phone' />
                  <input
                    type='text'
                    name='phone'
                    className={`form-control inputStyle ${classNamePhone}`}
                    placeholder='+961 103 1354'
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
              </div>
              <div className='form-group'>
                <label className='label-style'>Dirección</label>
                <input
                  type='text'
                  name='address'
                  className={`form-control inputStyle ${classNameAddress} text-area`}
                  placeholder='Col, av, mza, tl, etc...'
                  value={formik.values.address}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              <div className='form-group'>
                <label className='label-style'>Contraseña</label>
                <div className='icon-inside-input'>
                  <span className='icon icon-padlock' />
                  <input
                    type='password'
                    name='password'
                    className={`form-control inputStyle ${classNamePassword}`}
                    placeholder='-----'
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
              </div>
              <div className='form-group'>
                <label className='label-style'>Confirmar Contraseña</label>
                <div className='icon-inside-input'>
                  <span className='icon icon-padlock' />
                  <input
                    type='password'
                    name='passwordConfirm'
                    className={`form-control inputStyle ${classNamePasswordConfirm}`}
                    placeholder='-----'
                    value={formik.values.passwordConfirm}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
              </div>
              {
                formik.errors.ownerName ? (
                  <div className='text-alert'>
                    <span className='icon-error' />
                    <p>Campos obligatorios</p>
                  </div>
                ) : null
              }
              <button type='submit' className='btn-gradient mt-5 p-3 align-self-center'>FINALIZAR REGISTRO</button>
            </form>
          </div>
          <div className='col-6 d-none d-lg-block bg-promotion d-lg-flex flex-lg-column p-5'>
            <h2><p className='p-promotion'><strong>SurtiShapp</strong></p></h2>
            <h3><p className='text-white'>Innovando el comercio <br />tradicional</p></h3>
            <img className='img-fluid img-promotion-login my-auto' src={imgPormotionSignUp} />
          </div>
        </div>
      </div>
    </Layout>
  )
}
