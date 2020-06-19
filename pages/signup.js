import React, { useState } from 'react'
import Router from 'next/router'
import NavbarLanding from '../components/NavbarLanding'
import Layout from '../components/Layout/Container'
import imgPormotionSignUp from '../public/img/common/promotion-up.svg'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import BeatLoader from 'react-spinners/BeatLoader'

import { create } from '../services/stores'

export default function signUp () {
  const [isLoading, setIsLoading] = useState(false)
  // validation
  const formik = useFormik({
    initialValues: {
      name: ''
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Campo Obligatorio')
    }),
    onSubmit: async value => {
      try {
        setIsLoading(true)
        const response = await create(value)
        const responseJSON = await response.json()
        const { success, data } = responseJSON
        setIsLoading(false)
        if (success) {
          Router.push({
            pathname: '/signupowner',
            query: {
              store: data.store._id
            }
          })
        }
      } catch (error) {
        console.error('Error: ', error)
      }
    }
  })

  const classNameStoreName = formik.touched.name && formik.errors.name ? 'inputErrorEmail' : null

  return (
    <Layout>
      <NavbarLanding />
      <div className='container'>
        <div className='row login-container mx-auto mb-4'>
          <div className='col-12 col-lg-6 bg-login p-5'>
            <h6 className='mb-4'>Innova tu negocio con  <strong className='title-login'>SurtiShapp</strong></h6>
            <form className='form-login d-flex flex-column align-content-center' onSubmit={formik.handleSubmit}>
              <div className='form-group mb-5'>
                <label className='label-style'>Nombre deL NEGOCIO</label>
                <div className='icon-inside-input'>
                  <span className='icon icon-user' />
                  <input
                    type='text'
                    name='name'
                    className={`form-control inputStyle ${classNameStoreName} mb-5`}
                    placeholder='Mi Tiendita'
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
              </div>
              {
                formik.errors.name ? (
                  <div className='text-alert'>
                    <span className='icon-error' />
                    <p>{formik.errors.name}</p>
                  </div>
                ) : null
              }
              {
                <div className='mt-4 w-100 d-flex justify-content-center'>
                  <BeatLoader
                    size={15}
                    color='#00A3FF'
                    loading={isLoading}
                  />
                </div>
              }
              <button type='submit' className='btn-gradient mt-5 align-self-center'>SIGUIENTE <i className='fas fa-arrow-right ml-2' /></button>
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
