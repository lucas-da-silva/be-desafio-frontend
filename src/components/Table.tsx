import "./Table.css";

export function Table() {
  return (
    <table className="table">
      <thead className="table-header">
        <tr>
          <td>FOTO</td>
          <td>NOME</td>
          <td>CARGO</td>
          <td>DATA DE ADMISSÃO</td>
          <td>TELEFONE</td>
        </tr>
      </thead>
    </table>
  );
}
