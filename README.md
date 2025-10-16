# 📋 Sistema de Cadastro de Clientes

## 📖 Descrição
Este é um sistema simples de cadastro de clientes desenvolvido com HTML, CSS e JavaScript puro. O sistema permite registrar informações básicas de clientes, como nome, e-mail, CPF, telefone, cidade e status.

## ⚙️ Funcionalidades Atuais
1. Cadastro de novos clientes com:
   - Nome completo
   - E-mail (validação completa)
   - CPF (validação completa com algoritmo oficial)
   - Telefone (opcional, com máscara automática)
   - Cidade (opcional)
   - Status (ativo/inativo)
2. Visualização da lista de clientes cadastrados
3. Edição de clientes existentes (atualização real dos dados)
4. Exclusão de clientes (com confirmação)
5. Validações completas de campos obrigatórios
6. Persistência de dados com localStorage
7. Máscaras automáticas para CPF e telefone

## ▶️ Como Executar
1. Baixe ou clone este repositório
2. Abra o arquivo `index.html` em qualquer navegador web moderno
3. O sistema está pronto para uso

## 🧪 Como Testar
1. Preencha todos os campos obrigatórios do formulário
2. Verifique se as validações estão funcionando corretamente:
   - CPF inválido (ex: 123.456.789-00)
   - E-mail inválido (ex: usuario@)
3. Tente cadastrar um cliente com CPF ou e-mail já existente
4. Confirme se o cliente é adicionado à lista após o cadastro
5. Teste as funcionalidades de edição e exclusão
6. Recarregue a página e verifique se os dados persistem
7. Teste as máscaras de CPF e telefone

## 🛠️ Tecnologias Utilizadas
- HTML5
- CSS3
- JavaScript (ECMAScript 6)
- localStorage para persistência de dados

## 📄 Licença
Este projeto está sob a licença MIT. Veja o arquivo [LICENSE.md](LICENSE.md) para mais detalhes.

## 📁 Estrutura do Projeto
```
.
├── index.html              # Arquivo principal
├── src/
│   ├── html/              # Arquivo HTML separado
│   ├── css/               # Arquivo CSS separado
│   └── js/                # Arquivo JavaScript separado
├── docs/                  # Documentação
├── README.md              # Este arquivo
├── CHANGELOG.md           # Histórico de versões
├── BACKLOG.md             # Lista de melhorias pendentes
├── LICENSE.md             # Licença do projeto
└── .gitignore             # Arquivos ignorados pelo Git
```