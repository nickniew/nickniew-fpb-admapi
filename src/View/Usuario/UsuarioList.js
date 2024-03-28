import React from 'react';

function UsuarioList({ usuarios, onDelete }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Nome</th>
          <th>Email</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {usuarios.map(usuario => (
          <tr key={usuario.id}>
            <td>{usuario.id}</td>
            <td>{usuario.nome}</td>
            <td>{usuario.email}</td>
            <td>
              <button onClick={() => onDelete(usuario.id)}>Deletar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default UsuarioList;