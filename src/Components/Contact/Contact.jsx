import './contactStyle.css'

function Contact(){

    return(
        <div className='contact-super-container'>
            <form action="" method="post" className='form-container'>
                <h2 className='h2-form'>CONTACTO</h2>
                <div class="form-group">
                    <label for="nombre" className='label-style'>Nombre:</label>
                    <input type="text" id="nombre" name="nombre" required className='input-style'></input>
                </div>
                <div class="form-group">
                    <label for="correo" className='label-style'>Correo:</label>
                    <input type="email" id="correo" name="correo" required className='input-style'></input>
                </div>
                <div class="form-group">
                    <label for="consulta" className='label-style'>Consulta:</label>
                    <textarea id="consulta" name="consulta" required className='text-style'></textarea>
                </div>
                <button className='btn-form'>ENVIAR</button>
            </form>
        </div>
    )
}

export default Contact