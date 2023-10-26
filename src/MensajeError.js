import Swal from 'sweetalert2'
function MensajeError ({
  setConsultaDocumento
}) {
  const mostrarAlerta = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',

      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        setConsultaDocumento(false)
      }
    })
  }
  return (
<div>
    {mostrarAlerta()}
    </div>

  )
}

export { MensajeError }
