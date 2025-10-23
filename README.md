# Sistema de Cadastro de Clientes

![Version](https://img.shields.io/badge/version-2.5.3-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Status](https://img.shields.io/badge/status-ativo-brightgreen)
![Theme](https://img.shields.io/badge/theme-AvoidNess-purple)

## Descricao
Este e um sistema completo de cadastro de clientes desenvolvido com HTML, CSS e JavaScript puro. O sistema permite registrar informacoes basicas de clientes, como nome, e-mail, CPF, telefone, pais, cidade e status, com funcionalidades avancadas de busca, filtragem e exportacao.

O sistema agora inclui modos de tema claro e escuro, inspirados no estilo AvoidNess, com transicoes suaves e uma experiencia visual aprimorada.

## Funcionalidades Atuais
1. Cadastro de novos clientes com:
   - Nome completo
   - E-mail (validacao completa)
   - CPF (validacao completa com algoritmo oficial)
   - Telefone (opcional, com mascara automatica)
   - Pais (selecao de lista suspensa com mais de 150 paises)
   - Cidade (selecao dinamica baseada no pais escolhido, com pesquisa)
   - Status (ativo/inativo)
2. Visualizacao da lista de clientes cadastrados
3. Edicao de clientes existentes (atualizacao real dos dados)
4. Exclusao de clientes (com confirmacao personalizada)
5. Validacoes completas de campos obrigatorios
6. Persistencia de dados com localStorage
7. Mascaras automaticas para CPF e telefone
8. Busca e filtro de clientes por nome, e-mail, CPF ou status
9. Exportacao de lista de clientes para formatos CSV e JSON
10. Contador de clientes ativos/inativos com estatisticas em tempo real
11. Interface aprimorada com feedback visual e indicadores de status
12. Sistema de notificacoes popup para melhor experiencia do usuario
13. Selecao dinamica de cidades baseada no pais escolhido
14. Pesquisa de cidades para facilitar a selecao
15. Modo claro e escuro com alternancia automatica
16. Design responsivo para dispositivos moveis e desktop

## Como Executar
1. Baixe ou clone este repositorio
2. Abra o arquivo `index.html` em qualquer navegador web moderno
3. O sistema esta pronto para uso
4. Utilize o botao no canto superior direito para alternar entre os modos claro e escuro

## Como Testar
1. Preencha todos os campos obrigatorios do formulario
2. Verifique se as validacoes estao funcionando corretamente:
   - CPF invalido (ex: 123.456.789-00)
   - E-mail invalido (ex: usuario@)
3. Tente cadastrar um cliente com CPF ou e-mail ja existente
4. Confirme se o cliente e adicionado a lista apos o cadastro
5. Teste as funcionalidades de edicao e exclusao
6. Recarregue a pagina e verifique se os dados persistem
7. Teste as mascaras de CPF e telefone
8. Utilize a busca e filtros para encontrar clientes especificos
9. Exporte a lista de clientes para CSV e JSON
10. Verifique as estatisticas de clientes ativos/inativos
11. Teste as notificacoes popup e confirmacoes personalizadas
12. Teste a selecao dinamica de pais/cidade:
    - Selecione um pais e verifique se as cidades sao carregadas
    - Tente enviar o formulario sem selecionar pais ou cidade
13. Teste a pesquisa de cidades:
    - Selecione um pais
    - Digite parte do nome de uma cidade no campo de pesquisa
    - Verifique se a lista de cidades e filtrada
    - Selecione uma cidade da lista filtrada
14. Teste a alternancia entre modos claro e escuro:
    - Clique no botao no canto superior direito
    - Verifique se o tema muda suavemente
    - Recarregue a pagina e verifique se o tema selecionado e mantido

## Tecnologias Utilizadas
- HTML5
- CSS3 (com variaveis CSS para temas)
- JavaScript (ECMAScript 6)
- localStorage para persistencia de dados
- Remix Icons para icones
- Google Fonts (Space Grotesk)

## Licenca
Este projeto esta sob a licenca MIT. Veja o arquivo LICENSE.md para mais detalhes.

## Estrutura do Projeto
```
.
├── index.html              # Arquivo principal
├── src/
│   ├── html/              # Arquivos HTML separados
│   │   ├── avoidness-client-system.html  # Sistema com tema AvoidNess
│   ├── css/               # Arquivos CSS separados
│   │   ├── avoidness-styles.css          # Estilos com suporte a temas
│   │   ├── avoidness-dark.css            # Estilos especificos para tema escuro
│   └── js/                # Arquivo JavaScript separado
│       └── script.js      # Logica do sistema
├── docs/                  # Documentacao completa
├── README.md              # Este arquivo
├── CHANGELOG.md           # Historico de versoes
├── BACKLOG.md             # Lista de melhorias pendentes
├── LICENSE.md             # Licenca do projeto
└── .gitignore             # Arquivos ignorados pelo Git
```

## Versoes Desenvolvidas
- v1.0.0: Analise inicial e documentacao base
- v1.1.0: Correcao de bugs e refatoracao
- v2.0.0: Implementacao de novas funcionalidades
- v2.1.0: Aprimoramentos finais e preparacao para apresentacao
- v2.2.0: Adicao da selecao dinamica de pais/cidade
- v2.3.0: Adicao da pesquisa de cidades e expansao da base de paises/cidades
- v2.4.0: Aprimoramento visual do sistema e melhoria na pesquisa de cidades
- v2.5.0: Atualizacao do CSS para design mais moderno
- v2.5.1: Remocao de emojis e atualizacao da documentacao
- v2.5.2: Organizacao do repositório e atualizacao do .gitignore
- v2.5.3: Adicao do modo claro/escuro inspirado no AvoidNess

## Desenvolvedor
Desenvolvido por Danilo Icaro Alves Santos como parte do curriculo da disciplina de Tecnologia em Desenvolvimento de Sistemas.