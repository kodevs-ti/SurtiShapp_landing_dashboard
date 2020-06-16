import React from 'react'
import NavbarLanding from '../components/NavbarLanding'
import Layout from '../components/Layout/Container'
import imgPormotionSignUp from '../public/img/common/promotion-up.svg'
import { useFormik } from 'formik'
import * as Yup from 'yup'

export default function signUp () {
  // validation
  const formik = useFormik({
    initialValues: {
      nameStore: ''
    },
    validationSchema: Yup.object({
      nameStore: Yup.string().required('Campo Obligatorio')
    }),
    onSubmit: value => {
      console.log('enviando')
      console.log(value)
    }
  })

  const classNameStoreName = formik.touched.nameStore && formik.errors.nameStore ? 'inputErrorEmail' : null

  return (
    <Layout>
      <NavbarLanding />
      <div className='container'>
        <div className='row login-container mx-auto mb-4'>
          <div className='col-12 col-lg-6 bg-login p-5'>
            <h6 className='mb-4'>Innova tu negocio con  <strong className='title-login'>SurtiShapp</strong></h6>
            <form className='form-login d-flex flex-column align-content-center' onSubmit={formik.handleSubmit}>
              <div className='form-group'>
                <label className='label-style'>Nombre deL NEGOCIO</label>
                <div className='icon-inside-input'>
                  <span className='icon icon-user' />
                  <input
                    type='text'
                    name='nameStore'
                    className={`form-control inputStyle ${classNameStoreName}`}
                    placeholder='Mi Tiendita'
                    value={formik.values.nameStore}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
              </div>
              {
                formik.errors.nameStore ? (
                  <div className='text-alert'>
                    <span className='icon-error' />
                    <p>Campos obligatorios</p>
                  </div>
                ) : null
              }
              <button type='submit' className='btn-gradient mt-5 align-self-center'>SIGUIENTE <i className='fas fa-arrow-right ml-2' /></button>
              <label class='mdb-main-label'>Example label</label>
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
