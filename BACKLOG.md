# 📋 Backlog - Sistema de Cadastro de Clientes

## 🐛 Correções de Bugs
1. **Validação de CPF incompleta**
   - Prioridade: Alta
   - Descrição: A função validarCPF apenas verifica o tamanho, não valida o formato ou dígitos verificadores

2. **Verificação de cliente existente não implementada**
   - Prioridade: Alta
   - Descrição: A função verificarClienteExistente sempre retorna false, permitindo cadastros duplicados

3. **Validação de e-mail básica**
   - Prioridade: Média
   - Descrição: A validação de e-mail apenas verifica se há "@" no texto, não segue padrões de e-mail válidos

4. **Edição não atualiza dados**
   - Prioridade: Alta
   - Descrição: Ao editar um cliente, os dados não são atualizados na lista, apenas preenchem o formulário

5. **Dados não persistentes**
   - Prioridade: Alta
   - Descrição: Os dados são perdidos ao recarregar ou fechar a página

## 🚀 Novas Funcionalidades
1. **Validação completa de CPF**
   - Prioridade: Alta
   - Descrição: Implementar algoritmo de validação dos dígitos verificadores do CPF

2. **Máscaras para CPF e telefone**
   - Prioridade: Média
   - Descrição: Adicionar formatação automática para os campos CPF e telefone

3. **Busca e filtro de clientes**
   - Prioridade: Média
   - Descrição: Permitir buscar clientes por nome, e-mail ou CPF

4. **Exportar lista de clientes**
   - Prioridade: Baixa
   - Descrição: Opção de exportar a lista de clientes para CSV/JSON

5. **Contador de clientes ativos/inativos**
   - Prioridade: Baixa
   - Descrição: Mostrar estatísticas de clientes ativos e inativos

6. **Confirmação antes de excluir cliente**
   - Prioridade: Média
   - Descrição: Adicionar diálogo de confirmação antes de excluir um cliente

7. **Interface melhorada**
   - Prioridade: Baixa
   - Descrição: Melhorar o feedback visual e a usabilidade

8. **Sistema de login básico**
   - Prioridade: Baixa
   - Descrição: Implementar um sistema de login mockado

9. **Modo escuro/claro**
   - Prioridade: Baixa
   - Descrição: Adicionar opção para alternar entre temas claro e escuro

## 🔧 Melhorias Técnicas
1. **Separação de responsabilidades**
   - Prioridade: Alta
   - Descrição: Separar HTML, CSS e JavaScript em arquivos distintos

2. **Persistência de dados**
   - Prioridade: Alta
   - Descrição: Implementar armazenamento local (localStorage) para persistir os dados

3. **Refatoração do código**
   - Prioridade: Média
   - Descrição: Organizar melhor o código JavaScript e seguir boas práticas

4. **Tratamento de erros**
   - Prioridade: Média
   - Descrição: Adicionar tratamento adequado de erros e exceções