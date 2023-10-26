import React from 'react'
import './FormularioConsulta.css'

function FormularioConsulta ({
  setConsultaDocumento,
  setNombreDocente
}) {
  const informacionColegios = require('./listaColegiosDocentes.json')
  const [resultadoConsulta, setResultadoConsulta] = React.useState('')

  const onSubmit = (event) => {
    event.preventDefault()
    const existe = consultaExistente(resultadoConsulta)

    if (existe.length > 0) {
      setConsultaDocumento('A')
      const filteredNames = existe.map(item => item.Nombre)
      setNombreDocente(filteredNames)
    } else setConsultaDocumento('B')
  }

  const consultaExistente = (numeroDocumento) => {
    return informacionColegios.filter(
      datos => datos.Documento === (numeroDocumento)
    )
  }

  const onChange = (event) => {
    setResultadoConsulta(event.target.value)
  }

  return (
    <div className='divConsulta'>

        <form onSubmit={onSubmit}>
            <label>Digite su número de documento</label>
            <input className="inputFormulario" onChange={onChange}></input>

            <div className="FormularioConsulta-ContenedorBotones">
                <button className="FormularioConsulta-BotonBusqueda FormularioConsulta-BotonBusqueda-search" type="submit" >Buscar</button>
            </div>

        </form>
        </div>
  )
}

export { FormularioConsulta }
