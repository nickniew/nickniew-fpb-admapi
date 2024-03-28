import React, { useState, useEffect } from 'react';
import UsuarioList from '../View/Usuario/UsuarioList';
import UsuarioForm from '../View/Usuario/UsuarioForm';
import UsuarioService from '../Services/UsuarioService';

function UsuarioController() {
  const usuarioService = new UsuarioService();
  const [usuarios, setUsuarios] = useState([]);
  
  useEffect(() => {
    fetchUsuarios();
  }, []);

  const fetchUsuarios = async () => {
    try {
      const usuarios = await usuarioService.getAll();
      setUsuarios(usuarios);
    } catch (error) {
      console.error('Erro ao buscar usuários:', error);
    }
  };

  const handleAddUsuario = async (usuarioData) => {
    try {
      await usuarioService.create(usuarioData);
      fetchUsuarios();
    } catch (error) {
      console.error('Erro ao adicionar usuário:', error);
    }
  };

  const handleDeleteUsuario = async (usuarioId) => {
    try {
      await usuarioService.delete(usuarioId);
      fetchUsuarios();
    } catch (error) {
      console.error('Erro ao deletar usuário:', error);
    }
  };

  return (
    <div>
      <h2>Lista de Usuários</h2>
      <UsuarioList usuarios={usuarios} onDelete={handleDeleteUsuario} />
      <h2>Adicionar Usuário</h2>
      <UsuarioForm onSubmit={handleAddUsuario} />
    </div>
  );
}

export default UsuarioController;