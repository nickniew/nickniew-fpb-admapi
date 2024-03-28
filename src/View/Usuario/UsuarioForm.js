import React, { useState } from 'react';

function UsuarioForm({ onSubmit, initialValues }) {
  const [values, setValues] = useState(initialValues || {});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(values);
    setValues({});
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="nome" value={values.nome || ''} onChange={handleChange} placeholder="Nome" />
      <input type="text" name="email" value={values.email || ''} onChange={handleChange} placeholder="Email" />
      <button type="submit">Salvar</button>
    </form>
  );
}

export default UsuarioForm;