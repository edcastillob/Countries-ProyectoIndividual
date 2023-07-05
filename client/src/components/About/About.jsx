import ed from '../../assets/ecpic.jpg';
import github from '../../assets/github.png';
import link from '../../assets/linkedIn.png';
import logo from '../../assets/ec.png';
import style from '../ModuleCss/About.module.css';



export const About = () => {
  return (
    <div className={style.container}>
      <div className={style.images}>
        <img className={style.logo} src={logo} alt="Logo EdwarCastillo" />               
        <img className={style.ed}  src={ed} alt="EdwarCastillo" />               
      </div>

      <div className={style.text}>
        <h3>Hola,</h3>
        <br />
        <p>Soy <b>Edwar Castillo,</b> Ingeniero de Sistemas y desarrollador de este proyecto individual del bootcamp de Henry, donde se desafía el conocimiento adquirido durante esta etapa de estudios.</p>
        <br />
        <p>Imagino que has navegado por la aplicación, es bastante interesante la información que se encuentra sobre los países. Si aún no lo has hecho, te invito a utilizar la herramienta. ¡Dejaré mis redes sociales para recibir feedback!</p>

        <h3>Redes Sociales:</h3>
        <div className={style.socialIcons}>
          <a href="https://github.com/edcastillob" target="_blank" rel="noopener noreferrer">
            <img src={github} alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/edcastillob/" target="_blank" rel="noopener noreferrer">
            <img src={link} alt="LinkedIn" />
          </a>
        </div>
      </div>
    </div>   
  );
};
