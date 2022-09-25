import Swal from "sweetalert2";
export default function card(props) {
  function handleClick() {
    Swal.fire({
      title: "Deseja realmente excluir?",
      text: "Você não poderá reverter essa ação!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sim, excluir!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3001/medicamentos/${props.id}`, {
          method: "DELETE",
        }).then(() => {
          Swal.fire("Excluído!", "O medicamento foi excluído.", "success");
        });
      }
    });
  }
  return (
    <div class="card" style={{ width: "18rem" }}>
      <img
        src="data:image/png;base64,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"
        class="card-img-top"
        alt="Medicamento"
        onClick={() => {
          Swal.fire({
            title: props.nomeMed,
            html: `<p>Laboratório: ${props.nomeLab}</p> <p>Dosagem: ${props.dosagem}</p> <p>Tipo: ${props.tipo}</p> <p>Preço: ${props.preco}</p> <p>Descrição: ${props.descricao}</p>
           `,
            showCloseButton: true,
            showConfirmButton: false,
          });
        }}
      />
      <div class="card-body text-center">
        <hr />
        <p class="card-text">
          <strong>{props.nomeMed}</strong>
        </p>
        <p class="card-text">{props.nomeLab}</p>
        <button onClick={handleClick} type="button" class="btn btn-danger">
          Excluir
        </button>
      </div>
    </div>
  );
}
