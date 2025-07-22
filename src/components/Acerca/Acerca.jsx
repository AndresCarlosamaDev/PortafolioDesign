import check from '../../assets/img/icon/icons_skill_CHECK.png';
import skill1 from '../../assets/img/icon/icons_skill_1.png';
import skill2 from '../../assets/img/icon/icons_skill_2.png';
import skill3 from '../../assets/img/icon/icons_skill_3.png';

import './acerca.css';

export const Acerca = () => {
  return (
    <div className='container' id='habilidades'>
      <div className='contain-acerca'>
        <div className='contain-acerca_title'>
          <h1>Lo que puedo crear para ti</h1>
        </div>
        <div className='contain-acerca_info'>
          <div className='contain-acerca_info_prrContain'>
            <p className='contain-acerca_info_prr'>
              Especializado en ofrecer soluciones de diseño de alta calidad que generan resultados.
            </p>
          </div>
        </div>
      </div>
      <div className='contain-acerca_cards'>
        {/*card_1*/}
        <div className='contain-acerca_skills'>
          <div>
          <img src={skill1} alt='iconos de habilidad' />
          <h2>Diseño Web y de Interfaces</h2>
          <p>Sitios web responsivos, apps móviles e interfaces que combinan estética y funcionalidad.</p>
          </div>
          <div className='contain-acerca_skills_visto'>
            <div className='contain-acerca_skills_visto_img'>
              <img src={check}/>
              <p>Diseño adaptable</p>
            </div>
            <div className='contain-acerca_skills_visto_img'>
              <img src={check}/>
              <p>Experiencia de usuario</p>
            </div>
            <div className='contain-acerca_skills_visto_img'>
              <img src={check}/>
              <p>Prototipado</p>
            </div>         
          </div>
        </div>
        {/*Card_2*/}
        <div className='contain-acerca_skills'>
          <div>
          <img src={skill2} alt='iconos de habilidad' />
          <h2>Illustration & Animation</h2>
          <p>Ilustraciones y animaciones personalizadas que dan vida a las marcas y cautivan a las audiencias.</p>
          </div>
          <div className='contain-acerca_skills_visto'>
            <div className='contain-acerca_skills_visto_img'>
              <img src={check}/>
              <p>Ilustración digital</p>
            </div>
            <div className='contain-acerca_skills_visto_img'>
              <img src={check}/>
              <p>Motion Graphics</p>
            </div>
            <div className='contain-acerca_skills_visto_img'>
              <img src={check}/>
              <p>Diseño de personajes</p>
            </div>         
          </div>
        </div>
        {/*Card_3*/}
        <div className='contain-acerca_skills'>
          <div>
          <img src={skill3} alt='iconos de habilidad' />
          <h2>Editorial & Branding</h2>
          <p>Identidades de marca, maquetación editorial y materiales publicitarios que cuentan historias cautivadoras.</p>
          </div>
          <div className='contain-acerca_skills_visto'>
            <div className='contain-acerca_skills_visto_img'>
              <img src={check}/>
              <p>Identidad de marca</p>
            </div>
            <div className='contain-acerca_skills_visto_img'>
              <img src={check}/>
              <p>Diseño editorial</p>
            </div>
            <div className='contain-acerca_skills_visto_img'>
              <img src={check}/>
              <p>Materiales de marketing</p>
            </div>         
          </div>
        </div>
      </div>
    </div>
  );
};
