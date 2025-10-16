# 📋 Changelog - Sistema de Cadastro de Clientes

## [v1.1.0] - Correção de bugs e refatoração - 2025-10-16
### 🛠️ Correções de bugs
- Implementação completa da validação de CPF com algoritmo oficial
- Correção da verificação de cliente existente (previne duplicatas)
- Validação aprimorada de e-mail com expressão regular
- Correção da funcionalidade de edição para atualizar dados reais
- Implementação de persistência de dados com localStorage
- Adição de confirmação antes de excluir cliente
- Implementação de máscaras automáticas para CPF e telefone

### 📁 Reorganização do projeto
- Separação do código em arquivos distintos:
  - HTML em `src/html/index.html`
  - CSS em `src/css/styles.css`
  - JavaScript em `src/js/script.js`
- Manutenção do arquivo principal `index.html` na raiz para acesso direto

### 🧪 Testes
- Criação de documentação de testes em `docs/TESTES.md`
- Validação de todas as correções implementadas

## [v1.0.0] - Análise inicial e documentação base - 2025-10-16
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