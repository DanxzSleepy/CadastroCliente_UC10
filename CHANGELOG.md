# 📋 Changelog - Sistema de Cadastro de Clientes

## [v1.0.0] - Análise inicial e documentação base
### 📦 Versão inicial
- Versão base do sistema de cadastro de clientes
- Funcionalidades principais:
  - Cadastro de clientes com nome, e-mail, CPF, telefone, cidade e status
  - Visualização da lista de clientes
  - Edição e exclusão de clientes
  - Validações básicas de campos obrigatórios

### 🐛 Problemas conhecidos nesta versão
- Função de validação de CPF incompleta
- Função de verificação de cliente existente não implementada
- Validação de e-mail básica
- Edição de cliente não atualiza os dados, apenas preenche o formulário
- Dados não persistem após recarregar a página
- Sem máscaras para formatação de CPF e telefone
- Sem confirmação ao excluir cliente