import React, { useState } from 'react'
import Router, { useRouter } from 'next/router'
import NavbarLanding from '../components/NavbarLanding'
import Layout from '../components/Layout/Container'
import imgPormotionSignUp from '../public/img/common/promotion-up.svg'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import BeatLoader from 'react-spinners/BeatLoader'

import { createAccount } from '../services/users'

export default function signupowner () {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const { store } = router.query
  // validation for phone number
  const phoneRegEx = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
  // validation
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      location: '',
      password: '',
      confirmationPassword: ''
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('Requerido'),
      lastName: Yup.string().required('Requerido'),
      email: Yup.string().email().required('Requerido'),
      phone: Yup.string().matches(phoneRegEx, 'Inválido').required('Requerido'),
      location: Yup.string().required('Requerido'),
      password: Yup.string().required('Requerido'),
      confirmationPassword: Yup.string().required('Requerido').oneOf([Yup.ref('password')], 'La Contraseña no Coincide')
    }),
    onSubmit: async value => {
      try {
        setIsLoading(true)
        const dataTosend = { ...value, store }
        const response = await createAccount(dataTosend)
        const responseJSON = await response.json()
        const { success } = responseJSON
        setIsLoading(false)
        if (success) {
          Router.push('/signin')
        }
      } catch (error) {
        console.error('Error: ', error)
      }
    }
  })

  const classNameOwnerName = formik.touched.firstName && formik.errors.firstName ? 'inputErrorOwnerName' : null
  const classNameLastName = formik.touched.lastName && formik.errors.lastName ? 'inputErrorLastName' : null
  const classNameEmail = formik.touched.email && formik.errors.email ? 'inputErrorEmail' : null
  const classNamePhone = formik.touched.phone && formik.errors.phone ? 'inputErrorPhone' : null
  const classNameAddress = formik.touched.location && formik.errors.location ? 'inputErrorAddress' : null
  const classNamePassword = formik.touched.password && formik.errors.password ? 'inputErrorPassword' : null
  const classNamePasswordConfirm = formik.touched.confirmationPassword && formik.errors.confirmationPassword ? 'inputErrorPasswordConfirm' : null

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
                    name='firstName'
                    className={`form-control inputStyle ${classNameOwnerName}`}
                    placeholder='John'
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
                {
                  formik.touched.firstName && formik.errors.firstName ? (
                    <div className='text-alert-input'>
                      <p>{formik.errors.firstName}</p>
                    </div>
                  ) : null
                }
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
                {
                  formik.touched.lastName && formik.errors.lastName ? (
                    <div className='text-alert-input'>
                      <p>{formik.errors.lastName}</p>
                    </div>
                  ) : null
                }
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
                {
                  formik.touched.email && formik.errors.email ? (
                    <div className='text-alert-input'>
                      <p>{formik.errors.email}</p>
                    </div>
                  ) : null
                }
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
                {
                  formik.touched.phone && formik.errors.phone ? (
                    <div className='text-alert-input'>
                      <p>{formik.errors.phone}</p>
                    </div>
                  ) : null
                }
              </div>
              <div className='form-group'>
                <label className='label-style'>Dirección</label>
                <input
                  type='text'
                  name='location'
                  className={`form-control inputStyle ${classNameAddress} text-area`}
                  placeholder='Col, av, mza, tl, etc...'
                  value={formik.values.location}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {
                  formik.touched.location && formik.errors.location ? (
                    <div className='text-alert-input'>
                      <p>{formik.errors.location}</p>
                    </div>
                  ) : null
                }
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
                  {
                    formik.touched.password && formik.errors.password ? (
                      <div className='text-alert-input'>
                        <p>{formik.errors.password}</p>
                      </div>
                    ) : null
                  }
                </div>
              </div>
              <div className='form-group'>
                <label className='label-style'>Confirmar Contraseña</label>
                <div className='icon-inside-input'>
                  <span className='icon icon-padlock' />
                  <input
                    type='password'
                    name='confirmationPassword'
                    className={`form-control inputStyle ${classNamePasswordConfirm}`}
                    placeholder='-----'
                    value={formik.values.confirmationPassword}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {
                    formik.touched.confirmationPassword && formik.errors.confirmationPassword ? (
                      <div className='text-alert-input'>
                        <p>{formik.errors.confirmationPassword}</p>
                      </div>
                    ) : null
                  }
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
              <div className='mt-4 w-100 d-flex justify-content-center'>
                <BeatLoader
                  size={15}
                  color='#00A3FF'
                  loading={isLoading}
                />
              </div>
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
