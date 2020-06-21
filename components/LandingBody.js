
import Router from 'next/router'

import petalLeft from '../public/img/common/petals-left.svg'
import petalRigth from '../public/img/common/petals-rigth.svg'
import dashMobile from '../public/img/common/dash-mobile.svg'
import graphicsMan from '../public/img/landing/graphics-man.svg'
import chart2019 from '../public/img/landing/chart2019.svg'
import chart2020 from '../public/img/landing/chart2020.svg'
import traditional from '../public/img/common/traditional-retail.svg'
import preview from '../public/img/landing/preview-mobile.svg'
import star from '../public/img/icon/star.svg'
import money from '../public/img/icon/money.svg'
import heart from '../public/img/icon/heart.svg'
import check from '../public/img/icon/check.svg'
import menMobile from '../public/img/landing/men-mobile.svg'
import menChecking from '../public/img/landing/men-checking.svg'
import menOffer from '../public/img/landing/men-mobile-offers.svg'
import petalBottom from '../public/img/common/petal-bottom.svg'
import footerLogo from '../public/img/common/logo-footer.svg'
import faceboock from '../public/img/icon/faceboock-icon.svg'
import youtube from '../public/img/icon/youtube-icon.svg'
import NavbarLanding from './NavbarLanding'

export default function LandingBody () {
  return (
    <>
      <NavbarLanding />

      <div className='row p-0 m-0 branding'>
        <div className='branding-blur d-flex justify-content-center'>
          <div className='col-md-6 d-none d-md-block mt-auto mb-auto pt-5 img-branding ml-lg-5 pl-lg-5'>
            <img className='img-fluid p-1 ml-5 img-dash-mobile' src={dashMobile} />
          </div>
          <div className='col-12 col-md-6 mt-5 pt-5 p-0 mr-md-5 paragrapg-branding text-white d-flex flex-column justify-content-center align-items-center align-items-md-end mr-lg-5 pr-lg-5'>
            <p className='p-principal text-center text-md-right'><span className='txt-creemos'>Creemos</span> en el <span className='txt-comercio'>comercio</span></p>
            <p><span className='txt-comercio'>tradicional</span><span className='txt-regular'> y en su</span></p>
            <p className='font-weight-bold txt-creemos p-principal'>dinamismo</p>
            <p><span className='txt-regular'>como </span><span className='txt-comercio'>parte</span></p>
            <p><span className='txt-comercio'>fundamental</span> <span className='txt-regular'>de sus</span></p>
            <p className='p-principal mb-2'>comunidades</p>
            <img className='img-fluid img-bottom pb-4' src={petalLeft} />
          </div>
        </div>
      </div>

      <div className='row align-items-center p-0 m-0 stadistic'>
        <div className='col-12'>
          <div className='titles-stadistics mx-2 ml-md-5 my-4 align-items-start'>
            <h1>El valor de tu negocio:</h1>
            <h2>El comercio tradicional</h2>
          </div>
        </div>
        <div className='col-12 d-flex flex-column align-items-center justify-content-center flex-lg-row font-size-card-stadistics'>
          <div className='img-content'>
            <img className='mb-4' src={graphicsMan} />
          </div>
          <div className='card-content d-flex flex-column align-items-center flex-md-row ml-lg-5 pl-lg-5'>
            <div className='content-card-2019 d-flex flex-column align-items-center'>
              <p className='p-size'>En el año <span className='txt-600'>2019</span> el comercio electrónico supuso:</p>
              <div className='card-charts d-flex flex-column'>
                <img src={chart2019} className='card-img-chart px-4 align-self-center' />
                <div className='card-body'>
                  <p className='card-text'><span className='txt-600'>13.7%</span> de las ventas totales en todo el mundo</p>
                </div>
              </div>
            </div>
          </div>
          <div className='card-content d-flex flex-column align-items-center flex-md-row my-4'>
            <div className='content-card-2019 d-flex flex-column align-items-center'>
              <p className='p-size'>Para <span className='txt-600'>2021</span> las predicciones apuntan a que la cifra se eleve:</p>
              <div className='card-charts d-flex flex-column'>
                <img src={chart2020} className='card-img-chart px-4 align-self-center' />
                <div className='card-body'>
                  <p className='card-text'><span className='txt-600'>17.5%</span> de las ventas totales en todo el mundo</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='col-12 d-flex flex-column align-items-center justify-content-center flex-lg-row '>
          <div className='paragrapg-stadistics text-center text-lg-left mx-2 ml-md-5 my-4'>
            <p><span className='txt-regular'>Todavía, sin embargo,</span></p>
            <p className='font-weight-bold txt-creemos p-principal'>confiamos<span className='txt-regular'> más en hacer </span></p>
            <p><span className='txt-regular'>nuestras compras en los </span><span className='txt-comercio'>comercios</span></p>
            <p><span className='txt-comercio'>tradicionales;</span> <span className='txt-regular'>como la tiendita de la esquina, en el mercado o quizá, </span></p>
            <p><span className='txt-comercio'>en el tianguis</span></p>
            <img className='img-fluid img-bottom' src={petalRigth} />
          </div>
          <img className='img-fluid p-5' src={traditional} />
        </div>
      </div>

      <div className='row align-items-center p-0 m-0 how-is'>
        <div className='col-12 col-lg-6 d-flex flex-column align-items-center justify-content-center'>
          <img className='img-fluid p-2 my-4' src={preview} />
        </div>
        <div className='col-12 col-lg-6 d-flex flex-column align-items-center text-white text-center text-lg-left pr-lg-5'>
          <h2 className='mb-5 align-self-lg-start'>¿Innovar tu negocio? <strong>SurtiShapp</strong> te ayuda</h2>
          <p className='regular-size mb-5'>SurtiShapp es una solución digital personalizada que integra el
            mundo Online y Offline para ayudar a micronegocios en el<strong> control de su inventario</strong>, a <strong>agilizar el proceso de venta </strong>
            mediante un escaneado fácil y rápido de tus productos, además de <strong>generar tus propias ofertas </strong>todo esto y mucho más, <strong>¡tan sólo con tu dispositivo móvil! </strong>
            Atrévete a superar las barreras del mercado actual con las mismas ventajas
            que Internet puede ofrecer.
          </p>
          <button className='btn-register mt-0 mb-5 mr-2 align-self-lg-start' onClick={() => Router.push('/signup')}>¡Registrarme ya!<i className='fas fa-arrow-right ml-2' /></button>
        </div>
      </div>

      <div className='row align-items-center p-0 m-0 features'>
        <div className='col-12'>
          <div className='titles-stadistics mx-2 ml-md-5 my-5'>
            <h2>Surtishapp features</h2>
            <h3>Mejorando la experiencia de venta y compra</h3>
          </div>
        </div>
        <div className='col-12 d-flex flex-column align-items-center justify-content-center flex-lg-row mb-5 font-size-card-features'>
          <div className='card-content d-flex flex-column align-items-center flex-md-row'>
            <div className='content-card-2019 d-flex flex-column align-items-center'>
              <div className='card-charts d-flex flex-column background-blue'>
                <img src={star} className='card-img-chart p-4 align-self-center' />
                <div className='card-body text-center text-white'>
                  <p><strong>Fácil y Simple</strong></p>
                  <p className='card-text'> Sólo crea tu tienda y comienza a escanear tus productos</p>
                </div>
              </div>
            </div>
          </div>
          <div className='card-content d-flex flex-column align-items-center flex-md-row my-4'>
            <div className='content-card-2019 d-flex flex-column align-items-center'>
              <div className='card-charts d-flex flex-column'>
                <img src={money} className='card-img-chart p-4 align-self-center' />
                <div className='card-body text-center'>
                  <p><strong>Agiliza tus Ventas</strong>
                  </p>
                  <p className='card-text'> Podrás agilizar el flujo de atencion a tus clientes</p>
                </div>
              </div>
            </div>
          </div>

          <div className='card-content d-flex flex-column align-items-center flex-md-row'>
            <div className='content-card-2019 d-flex flex-column align-items-center'>
              <div className='card-charts d-flex flex-column background-blue'>
                <img src={heart} className='card-img-chart p-4 align-self-center' />
                <div className='card-body text-center text-white'>
                  <p><strong>Clientes Leales</strong>
                  </p>
                  <p className='card-text'> Mejora la experiencia de compra de tus clientes </p>
                </div>
              </div>
            </div>
          </div>
          <div className='card-content d-flex flex-column align-items-center flex-md-row my-4'>
            <div className='content-card-2019 d-flex flex-column align-items-center'>
              <div className='card-charts d-flex flex-column'>
                <img src={check} className='card-img-chart p-4 align-self-center' />
                <div className='card-body text-center'>
                  <p><strong>Gestión Eficiente</strong>
                  </p>
                  <p className='card-text'> Mantén tu inventario siempre dinámico y en forma </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='row align-items-center p-0 m-0 how-is'>
        <div className='col-12'>
          <div className='text-white mx-2 ml-md-5 my-5'>
            <h2><strong>SurtiShapp</strong></h2>
            <h3>El lector ideal para tu negocio</h3>
          </div>
        </div>
        <div className='col-12 col-lg-6 d-flex flex-column align-items-center justify-content-center'>
          <img className='img-fluid p-2 my-4' src={menMobile} />
        </div>
        <div className='col-12 col-lg-6 d-flex flex-column align-items-center text-white text-center text-lg-left pr-lg-5'>
          <h3 className='mb-5'><strong>Escanea productos fácil y rápido con SurtiShapp</strong></h3>
          <p className='regular-size mb-5'>Tan sólo tienes que apuntar el scanner hacia el código de barras del producto a registrar.</p>
          <p className='regular-size mb-5'>¿Tu producto no tiene código de barras?, no te preocupes, SurtiShapp te ayuda con eso y mucho más.
          </p>
        </div>
      </div>

      <div className='row align-items-center p-0 m-0 how-is'>
        <div className='col-12 col-lg-6 d-flex flex-column align-items-center text-white text-center text-lg-left pr-lg-5'>
          <h3 className='mb-5'><strong>Genera tus propias ofertas</strong></h3>
          <p className='regular-size mb-5'>Con SurtiShapp Administrator puedes elegir cualquier producto que desees poner en oferta; ¡evita las mermas o pérdidas!.</p>
          <p className='regular-size mb-5'>Siempre podrás observar tus productos en oferta y ofrecerlos a tus cliente. ¡Mejora su experincia de compra!
          </p>
        </div>
        <div className='col-12 col-lg-6 d-flex flex-column align-items-center justify-content-center'>
          <img className='img-fluid p-2 my-4' src={menOffer} />
        </div>
      </div>

      <div className='row align-items-center p-0 m-0 how-is'>
        <div className='col-12 col-lg-6 d-flex flex-column align-items-center justify-content-center'>
          <img className='img-fluid p-2 my-4' src={menChecking} />
        </div>
        <div className='col-12 col-lg-6 d-flex flex-column align-items-center text-white text-center text-lg-left pr-lg-5'>
          <h3 className='mb-5'><strong>Fluye libremente. No necesitas de más dispositivos externos</strong></h3>
          <p className='regular-size mb-5'>Ideamos la mejor manera de controlar el flujo de tu venta, desde productos que necesitan ser pesados, hasta aquellos que parecen pasar desapercibidos,.</p>
          <p className='regular-size mb-5'>Fluye libremente en tu espacio de trabajo,, todo lo que necesitas para vender esta en tu SurtiShapp.</p>
          <p className='regular-size mb-5'>No te preocupes, ¡ Nuestro algoritmo de equivalencias, lo resulve todo!</p>
        </div>
      </div>

      <div className='row align-items-center p-0 m-0 footer'>
        <div className='col-12 d-flex flex-column align-items-center justify-content-center flex-lg-row '>
          <div className='footer-slogan text-center text-lg-left mx-2 ml-md-5 my-4'>
            <h2 className='text-center text-white'>Sé un comerciante diferente, innova tu negocio con <p>SurtiShapp</p></h2>
            <img className='img-fluid img-bottom' src={petalBottom} />
          </div>
        </div>
        <div className='col-12 d-flex flex-column align-items-center justify-content-center flex-lg-row pb-5'>
          <button className='btn-prueba mt-0 mb-4 mr-2'>¡Comienza tu prueba gratuita!<i className='fas fa-arrow-right ml-2' /></button>
          <button className='btn-reserva mt-0 mb-4 ml-2'>¡Reserva una demo gratuita!<i className='fas fa-arrow-right ml-2' /></button>
        </div>
        <div className='col-12'>
          <div className='d-flex flex-column align-items-center'>
            <img className='img-fluid img-footer-logo' src={footerLogo} />
            <p className='style-footer py-2'>© 2020 Devixim CDMX. Tel .: +961 103 13 54</p>
          </div>
          <div className='text-center my-5 content-social-networks'>
            <img className='img-footer-faceboock mr-3' src={faceboock} />
            <img className='img-footer-youtube ml-3' src={youtube} />
          </div>
        </div>
      </div>

    </>
  )
}
