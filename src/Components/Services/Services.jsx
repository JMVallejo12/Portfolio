import './servicesStyle.css'

function Services(){

    return(
        <div className='services-container'>
            <div className='section-title'>
                <h2 className='h2-service-section'>SERVICIOS</h2>
            </div>
            <div className='services-flex' id='services'>
                <div className='services-left'>
                    <div className='left-title'>
                        <h3 className='h2-services'>PÁGINAS WEB SIMPLES</h3>
                        <p>Creación de páginas web que no son complejas, debido a la necesidad del cliente, las cuales solo exponen información sobre un negocio o proyecto personal, el cual quizás no requiere una página web de mucha complejidad</p>
                    </div>
                    
                    <ul className='services-title'>
                        <li>
                            <strong>Diseño simple:</strong>
                            <p className='services-text'>Un diseño simple, minimalista, y con colores que contrasten bien, para que su página sea agradable y perfectamente legible</p>
                        </li>
                        <li>
                            <strong>Accesibilidad:</strong>
                            <p className='services-text'>Es importante que las personas que sufren de alguna discapacidad, ya sea que no pueden ver u oír, puedan navergar en su sitio cómodamente.</p>
                        </li>
                        <li>
                            <strong>Diseño responsive:</strong>
                            <p className='services-text'>El diseño responsive es fundamental en todas las páginas web de hoy en día, ya que la gente puede ingresar desde cualquier dispositivo, ya sea una tablet o un teléfono móvil. Con este servicio, su página será accesible desde los diferentes dispositivos de la actualidad.</p>
                        </li>
                        <li>
                            <strong>Portfolio:</strong>
                            <p className='services-text'>Si desesa puede tener su portfolio donde podrá mostrar todos sus proyectos, con una descripción de los mismos y enlaces.</p>
                        </li>
                        <li>
                            <strong>Formulario de contacto:</strong>
                            <p className='services-text'>Formulario de contacto donde sus clientes van a poder contactar con usted, dejando un e-mail en su casilla de correo electrónico</p>
                        </li>
                    </ul>
                </div>
            
                <div className='services-right'>
                    <h3 className='h2-services'>PAGINAS WEB COMPLEJAS</h3>
                    <p className='left-title'>Si se tiene un negocio que requiera de una página web que tenga más funciones, puede optar por este servicio, ya que se ofrece una página web con más funciones para el usuario. Además de incluir todo lo de la página simple</p>
                    <ul className='services-title'>
                        <li>
                            <strong>Diseño elaborado:</strong>
                            <p className='services-text'>Diseño más detallado, que requiere más tiempo, haciendo uso de recursos como librerías de estilos y animaciones</p>
                        </li>
                        <li>
                            <strong>Autenticación:</strong>
                            <p className='services-text'>Los usuarios van a poder crearse cuentas, tener perfiles y autenticarse en su página web</p>
                        </li>
                        <li>
                            <strong>Integración de API´s</strong>
                            <p className='services-text'>Las API´s son fundamentales en las páginas web de hoy en día, ya que muestran información en tiempo real, como por ejemplo la cotización del dólar en cada país.</p>
                        </li>
                        <li>
                            <strong>Optimización de SEO</strong>
                            <p className='services-text'>Un SEO bien optimizado hace que la página web se posicione mejor en los motores de búsqueda.</p>
                        </li>
                        
                        <li>
                            <strong>Almacenamiento</strong>
                            <p className='services-text'>Su página podrá guardar archivos multimedia como imágenes, videos y otros archivos.</p>
                        </li>
                    </ul>
                    
                </div>
            </div>
            <div className='project-title'>
                <h2 className='h2-project'>PROYECTOS</h2>
            </div>
            
        </div>
    )
}

export default Services