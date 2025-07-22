import branding from '../../assets/img/icon/icon_1.png';
import Ilustracion from '../../assets/img/icon/icon_2.png';
import Video from '../../assets/img/icon/icon_3.png';
import Social from '../../assets/img/icon/icon_4.png';
import FrontEnd from '../../assets/img/icon/icon_5.png';
import Animacion from '../../assets/img/icon/icon_6.png';
import foto from '../../assets/img/foto.png';


import './servicios.css';

export const Servicios = () => {
  return (
    <section className='servicios-contain' id='acerca'>
      <div className='servicios-contain_info'>
        <h1>Acerca de mi</h1>
        <p>
          Soy un diseñador gráfico y UX/UI apasionado con más de 4 años de recorrido creando experiencias digitales significativas.
          Mi experiencia abarca publicidad, ilustración, animación, diseño editorial y desarrollo web. Me encanta combinar creatividad y
          funcionalidad para ofrecer soluciones visuales que no solo se ven bien, sino que también cumplen con los objetivos del cliente.
        </p>
        <div className='servicios-contain_info_properties'>
          {/* column_1 */}
          <div>
            <div>
              <h3>Experiencia</h3>
              <p>+4 años</p>
            </div>
            <div>
              <h3>Proyectos</h3>
              <p>+50 completados</p>
            </div>
          </div>
          {/* column_2 */}
          <div>
            <div>
              <h3>Clientes</h3>
              <p>+30 satisfechos</p>
            </div>
            <div>
              <h3>Disponibilidad</h3>
              <p>Abierto a proyectos</p>
            </div>
          </div>
        </div>
      </div>

      <div className='servicios-contain_img'>
        <img src={foto} alt="Foto de perfil" />
      </div>
    </section>
  );
};
