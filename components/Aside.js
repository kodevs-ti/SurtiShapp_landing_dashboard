import Router from 'next/router'

export default function Aside (props) {
  return (
    <aside className='sidebar mt-5'>
      <div className='admin-menu'>
        <h2 className='title-menu mb-5'>SurtiShap Administrator</h2>
        <ul className='menu'>
          <li className='d-flex align-items-center item-route' onClick={() => Router.push('/dashboard/sellers')}>
            <span className='icon icon-admin mr-4' />
            <span>Vendedores</span>
          </li>
          <hr className='bottom-hr' />

          <li className='d-flex flex-column'>
            <div className='d-flex align-items-center'>
              <span className='icon icon-inventory mr-4' />
              <span>Inventario</span>
            </div>
            <ul>
              <li className=''>
                <a className='d-flex justify-content-start align-items-center' to='/'>
                  <span className='icon icon-products' />
                  <span>Productos</span>
                </a>
              </li>
              <li className=''>
                <a className='d-flex justify-content-start align-items-center' to='/'>
                  <span className='icon icon-categories' />
                  <span>Categorías</span>
                </a>
              </li>
              <li className=''>
                <a className='d-flex justify-content-start align-items-center' to='/'>
                  <span className='icon icon-providers' />
                  <span>Proveedores</span>
                </a>
              </li>
            </ul>
          </li>
          <hr className='bottom-hr' />

          <li className='d-flex align-items-center'>
            <span className='icon icon-sell mr-4' />
            <span>Ventas</span>
          </li>
          <hr className='bottom-hr' />

          <li className='d-flex align-items-center'>
            <span className='icon icon-promotions mr-4' />
            <span>Promociones</span>
          </li>
          <hr className='bottom-hr' />

          <li className='d-flex align-items-center'>
            <span className='icon icon-missing mr-4' />
            <span>Faltantes</span>
          </li>
          <hr className='bottom-hr' />

          <li className='d-flex align-items-center'>
            <span className='icon icon-stadistic mr-4' />
            <span>Estadísticas</span>
          </li>
          <hr className='bottom-hr' />

        </ul>
      </div>
    </aside>
  )
}
