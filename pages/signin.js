import React, { useState } from 'react'
import Router from 'next/router'
import NavbarLanding from '../components/NavbarLanding'
import Layout from '../components/Layout/Container'
import imgPormotionLogin from '../public/img/common/promotion-in-login.svg'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import BeatLoader from 'react-spinners/BeatLoader'

import { signIn as login } from '../services/users'
import { setToken } from '../lib'

export default function signIn () {
  const [errorMessage, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  // validation
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup.string().email().required('Requerido'),
      password: Yup.string().required('Requerido')
    }),
    onSubmit: async value => {
      try {
        setError('')
        setIsLoading(true)
        const response = await login(value)
        const responseJSON = await response.json()
        const { success, data } = responseJSON
        setIsLoading(false)
        if (success) {
          setToken(data.token)
          Router.push('/dashboard/sellers')
          return
        }
        setError('Credenciales Invalidas')
      } catch (error) {
        console.error('Error: ', error)
      }
    }
  })

  const classNameEmail = formik.touched.email && formik.errors.email ? 'inputErrorEmail' : null
  const classNamePassword = formik.touched.password && formik.errors.password ? 'inputErrorPassword' : null

  return (
    <Layout>
      <NavbarLanding />
      <div className='container'>
        <div className='row login-container mx-auto mb-4'>
          <div className='col-12 col-lg-6 bg-login p-5'>
            <h6 className='mb-4'>Bienvenido a <strong className='title-login'>SurtiShapp Administrator</strong></h6>
            <form className='form-login d-flex flex-column align-content-center' onSubmit={formik.handleSubmit}>
              <div className='form-group'>
                <label className='label-style'>EMAIL</label>
                <div className='icon-inside-input'>
                  <span className='icon icon-user' />
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
                {
                  formik.touched.password && formik.errors.password ? (
                    <div className='text-alert-input'>
                      <p>{formik.errors.password}</p>
                    </div>
                  ) : null
                }
              </div>
              {
                formik.errors.email && formik.errors.password ? (
                  <div className='text-alert'>
                    <span className='icon-error' />
                    <p>Campos obligatorios</p>
                  </div>
                ) : errorMessage ? (
                  <div className='text-alert'>
                    <span className='icon-error' />
                    <p>{errorMessage}</p>
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
              <button type='submit' className='btn-gradient mt-5 align-self-center'>Iniciar Sesión</button>
            </form>
            <div className='footer-login wh-100 d-flex flex-column text-center align-items-center p-5 mt-5'>
              <div><p className='text-white'>¿Aún no tienes una cuenta?</p></div>
              <div><a className='link-register' onClick={() => Router.push('/signup')}>¡Registra tu negocio aquí!</a></div>
            </div>
          </div>
          <div className='col-6 d-none d-lg-block bg-promotion d-lg-flex flex-lg-column p-5'>
            <h2><p className='p-promotion'><strong>SurtiShapp</strong></p></h2>
            <h3><p className='text-white'>Innovando el comercio <br />tradicional</p></h3>
            <img className='img-fluid img-promotion-login my-auto' src={imgPormotionLogin} />
          </div>
        </div>
      </div>
    </Layout>
  )
}
