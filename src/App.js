import React from 'react'
// import Swal from 'sweetalert2'

import { Titulo } from './Titulo'
import { FormularioConsulta } from './FormularioConsulta'
import { FormularioDescargar } from './FormularioDescargar'
import { Modal } from './Modal'
// import { ModalNoEncontrado } from './ModalNoEncontrado'
// import { MensajeError } from './MensajeError'
// import { ValidacionComponente } from './ValidacionComponente'

function App () {
  const [consultaDocumento, setConsultaDocumento] = React.useState()
  const [nombreDocente, setNombreDocente] = React.useState('')

  return (
<>
<Titulo/>
<FormularioConsulta
  setConsultaDocumento={setConsultaDocumento}
  setNombreDocente = {setNombreDocente}
/>

{ consultaDocumento && (<Modal> <FormularioDescargar
        setConsultaDocumento={setConsultaDocumento}
        consultaDocumento={consultaDocumento}
        nombreDocente={nombreDocente}
      /> </Modal>)}

</>
  )
}

export default App
