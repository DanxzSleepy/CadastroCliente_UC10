# 📋 Changelog - Sistema de Cadastro de Clientes

## [v2.3.0] - Adição da pesquisa de cidades e expansão da base de países/cidades - 2025-10-16
### 🌍 Novas funcionalidades
- Expansão da base de dados para incluir mais de 150 países
- Adição de listas completas de cidades para todos os países (média de 5-20 cidades por país)
- Implementação de campo de pesquisa para facilitar a seleção de cidades
- População automática do dropdown de países com todos os países disponíveis

### 🎨 Melhorias na interface
- Adição de campo de texto para pesquisa de cidades
- Atualização do formulário com novo campo de pesquisa
- Melhorias nos estilos CSS para os novos elementos
- Mensagens de ajuda aprimoradas para os novos campos

## [v2.2.0] - Adição da seleção dinâmica de país/cidade - 2025-10-16
### 🌍 Novas funcionalidades
- Adição de campo obrigatório para seleção de país
- Implementação de seleção dinâmica de cidades baseada no país escolhido
- Base de dados com cidades de 5 países diferentes (Brasil, Portugal, EUA, Argentina e Espanha)
- Validação de campos país e cidade como obrigatórios

### 🎨 Melhorias na interface
- Atualização do formulário de cadastro com novos campos
- Melhorias nos estilos CSS para os novos elementos
- Mensagens de ajuda aprimoradas para os novos campos

## [v2.1.0] - Preparação final para apresentação - 2025-10-16
### 🎨 Aprimoramentos na interface
- Implementação de sistema de notificações popup para melhor feedback ao usuário
- Criação de confirmação de exclusão personalizada em popup
- Aprimoramento da experiência do usuário com mensagens mais visuais
- Remoção das notificações antigas baseadas em alert

### 📋 Documentação final
- Criação de documentação final de apresentação em `docs/APRESENTACAO.md`
- Criação de guia para gravação de vídeos em `docs/VIDEO_GUIDE.md`
- Atualização de todas as documentações existentes

## [v2.0.0] - Implementação de novas funcionalidades - 2025-10-16
### 🚀 Novas funcionalidades
- Implementação de busca e filtro de clientes por nome, e-mail, CPF ou status
- Adição de exportação de lista de clientes para formatos CSV e JSON
- Criação de contador de clientes ativos/inativos com estatísticas em tempo real
- Aprimoramento da interface com feedback visual e indicadores de status
- Adição de seção de estatísticas com contagem de clientes

### 🎨 Melhorias na interface
- Nova seção de busca e filtragem
- Indicadores visuais de status (borda colorida para clientes ativos/inativos)
- Seção de estatísticas com contadores em tempo real
- Botões de exportação
- Melhorias nos estilos CSS para melhor experiência do usuário

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