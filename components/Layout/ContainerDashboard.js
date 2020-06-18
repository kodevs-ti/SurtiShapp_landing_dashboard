import Layout from './Container'
import NavbarDashboard from '../NavbarDashboard'
import Aside from '../Aside'

export default function ContainerDashboard ({ children }) {
  return (
    <Layout>
      <div className='container  m-0 p-0'>
        <div className='row  m-0 p-0'>
          <NavbarDashboard />
        </div>
        <div className='row mt-4'>
          <div className='col-4'>
            <Aside />
          </div>

          <div className='col-8 mt-5'>
            <div className='body-dash mt-3 p-5'>{children}</div>
          </div>

        </div>
      </div>
    </Layout>
  )
}
