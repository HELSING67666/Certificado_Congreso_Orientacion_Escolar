import './FormularioDescargar.css'
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'
import { useRef } from 'react'
import Swal from 'sweetalert2'

function FormularioDescargar ({
  setConsultaDocumento,
  consultaDocumento,
  nombreDocente

}) {
  const mostrarAlerta = () => {
    Swal.fire({
      title: 'Usuario no existe',
      text: 'Intente de nuevo!',
      icon: 'warning',
      confirmButtonColor: '#61DAFA',

      confirmButtonText: 'Aceptar'
    }).then((result) => {
      if (result.isConfirmed) {
        setConsultaDocumento(false)
      }
    })
  }

  /*  <label className='certificado-Sec'>LA SECRETARÍA DE EDUCACIÓN DEL DISTRITO</label>
  <label className='certificado-Cert'>CERTIFICA QUE:</label> */

  const pdfRef = useRef()

  const generatePDF = () => {
    const input = pdfRef.current
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png')
      // eslint-disable-next-line new-cap
      const pdf = new jsPDF('l', 'mm', 'a4', false)
      const pdfWidth = pdf.internal.pageSize.getWidth()
      const pdfHeight = pdf.internal.pageSize.getHeight()
      const imgWidth = canvas.width
      const imgHeight = canvas.height
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight)
      const imgX = 11// (pdfWidth - imgWidth * ratio)
      const imgY = 0
      pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio)
      pdf.save('CertificadoCongresoOrientacionEscolar.pdf')
    })
  }

  const cerrarPopUp = () => {
    setConsultaDocumento(false)
  }

  if (consultaDocumento === 'A') {
    return (

    <div className='content' >
        <div className="certificado" ref={pdfRef}>

            <label className='certificado-label'>{nombreDocente}</label>
        </div>

        <div className='container'>
            <button className='BotonDescarga BotonDescarga-search' onClick={generatePDF}>Descargar</button>
            <button className='BotonDescarga BotonDescarga-cancel' onClick={cerrarPopUp}>Cancelar</button>
        </div>
  </div>
    )
  }
  return (
    mostrarAlerta()
  )
}

export { FormularioDescargar }
