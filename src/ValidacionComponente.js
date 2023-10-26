import { FormularioDescargar } from './FormularioDescargar'
import { MensajeError } from './MensajeError'

function ValidacionComponente ({ setConsultaDocumento, consultaDocumento }) {
  if (consultaDocumento) {
    return <FormularioDescargar setConsultaDocumento={setConsultaDocumento} />
  } else { <MensajeError setConsultaDocumento={setConsultaDocumento} /> }
}

export { ValidacionComponente }
