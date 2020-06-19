import React from 'react'
import Router from 'next/router'
import ContainerDashboard from '../../../components/Layout/ContainerDashboard'

import vic from '../../../public/img/common/vic.svg'
import jon from '../../../public/img/common/jon.svg'

export default function Vendedores (props) {
  return (
    <ContainerDashboard>
      <div className='container sellers-container'>
        <div className='row'>
          <div className='col-12 '>
            <div className='d-flex justify-content-between buttons-wrapper'>
              <div className='wrapper-warning d-flex justify-content-center'>
                <div className='warning-content d-flex align-items-center'>
                  {/* <p>{content}</p> */}
                  <p>Aún no tienes Vendedores registrados</p>
                </div>
              </div>
              <button onClick={() => Router.push('/sale')} className='d-flex align-items-center btn-menu sale'>
                <div className='mr-4 icon icon-new-seller' />
                <span className='btn-txt-size'>Registrar nuevo vendedor</span>
              </button>
            </div>
          </div>
          <div className='col-12'>
            <div className='d-flex justify-content-end mt-5 mb-3'>
              <input
                type='text'
                name='searchSeller mt-5'
                className='searchSeller mt-5'
                placeholder='       Buscar...'
              />
            </div>
          </div>

          <div className='col-12 mt-5'>
            <div className='mt-5 d-flex justify-content-between buttons-wrapper'>
              <table className='mt-5 table'>
                <thead className='mt-2 head-style'>
                  <tr className='mt-2 tr-titles'>
                    <th scope='col'>Vendedor</th>
                    <th scope='col'>General</th>
                    <th scope='col'>Estado</th>
                    <th scope='col'>Acciones</th>
                  </tr>
                  <tr className='m-0 p-0 bg-line-bottom'>
                    <th className='m-0 p-0'>
                      <hr className='bottom-table-hr my-3' />
                    </th>
                    <th className='m-0 p-0'>
                      <hr className='bottom-table-hr my-3' />
                    </th>
                    <th className='m-0 p-0'>
                      <hr className='bottom-table-hr my-3' />
                    </th>
                    <th className='m-0 p-0'>
                      <hr className='bottom-table-hr my-3' />
                    </th>
                  </tr>
                </thead>
                <tbody className='mt-5 tbody-style'>
                  <tr>
                    <th scope='row'><img className='img-fluid rounded-circle img-seller-dash mt-2' src={vic} /></th>
                    <th className='d-flex align-items-center'><div className='d-flex flex-column'><span className='ml-4 seller-name mt-2'>Víctor Octavio Torres Jiménez</span><span className='ml-4 seller-email'>victortorres@gmail.com</span></div></th>
                    <th>
                      <div className='custom-control custom-switch mt-4'>
                        <input type='checkbox' className='custom-control-input' id='customSwitch1' />
                        <label className='custom-control-label text-white' for='customSwitch1'>.</label>
                      </div>
                    </th>
                    <th>
                      <div className='d-flex align-items-center item-route' onClick={() => Router.push('/dashboard/sellers')}>
                        <span className='icon icon-edit m-1' />
                        <span className='icon icon-delete m-1' />
                      </div>
                    </th>
                  </tr>
                  <tr>
                    <th scope='row'><img className='img-fluid rounded-circle img-seller-dash mt-2' src={jon} /></th>
                    <th className='d-flex align-items-center'><div className='d-flex flex-column'><span className='ml-4 seller-name mt-2'>John Doe</span><span className='ml-4 seller-email'>johndoe@gmail.com</span></div></th>
                    <th>
                      <div className='custom-control custom-switch mt-4'>
                        <input type='checkbox' className='custom-control-input' id='customSwitch1' />
                        <label className='custom-control-label text-white' for='customSwitch1'>.</label>
                      </div>
                    </th>
                    <th>
                      <div className='d-flex align-items-center item-route' onClick={() => Router.push('/dashboard/sellers')}>
                        <span className='icon icon-edit m-1' />
                        <span className='icon icon-delete m-1' />
                      </div>
                    </th>
                  </tr>

                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </ContainerDashboard>
  )
}
