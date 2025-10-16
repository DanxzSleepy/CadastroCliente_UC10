# 🎥 Guia de Gravação de Vídeos - Sistema de Cadastro de Clientes

## 📋 Visão Geral

Este guia fornece instruções detalhadas para a gravação dos três vídeos demonstrativos do Sistema de Cadastro de Clientes, correspondentes às versões v1.0.0, v1.1.0 e v2.0.0 do projeto.

## 🎬 Vídeo 1 - Sistema Original (v1.0.0)

### Objetivo
Demonstrar o sistema original com seus problemas e apresentar a documentação inicial criada.

### Roteiro
1. **Apresentação Inicial**
   - Breve introdução ao projeto
   - Explicação dos objetivos do desenvolvimento

2. **Demonstração do Código Original**
   - Abrir o arquivo `index.html` original
   - Mostrar os problemas identificados:
     - Validação de CPF incompleta
     - Verificação de cliente existente não implementada
     - Validação de e-mail básica
     - Dados não persistentes
     - Ausência de máscaras de formatação

3. **Apresentação da Documentação**
   - Mostrar os arquivos criados:
     - README.md
     - CHANGELOG.md
     - BACKLOG.md
     - LICENSE.md
     - Documentação técnica em /docs

4. **Explicação dos Bugs**
   - Detalhar cada problema identificado
   - Explicar o impacto de cada bug no sistema

### Duração Estimada
5-7 minutos

### Dicas para Gravação
- Mantenha o código visível durante toda a explicação
- Destaque os trechos problemáticos com o mouse ou cursor
- Explique claramente cada problema identificado

## 🎬 Vídeo 2 - Implementação Intermediária (v1.1.0)

### Objetivo
Demonstrar as correções de bugs implementadas na versão v1.1.0 e mostrar a refatoração do código.

### Roteiro
1. **Apresentação das Correções**
   - Breve resumo das correções implementadas
   - Explicação da metodologia utilizada

2. **Demonstração das Correções**
   - **Validação de CPF**: Mostrar a validação completa com algoritmo oficial
     - Testar CPF válido (ex: 123.456.789-09)
     - Testar CPF inválido (ex: 123.456.789-00)
     - Testar CPF com dígitos repetidos (ex: 111.111.111-11)
   - **Verificação de Cliente Existente**: 
     - Tentar cadastrar cliente com CPF já existente
     - Tentar cadastrar cliente com e-mail já existente
   - **Validação de E-mail**: 
     - Testar e-mail válido (ex: usuario@dominio.com)
     - Testar e-mail inválido (ex: usuario@)
   - **Persistência de Dados**:
     - Cadastrar clientes
     - Recarregar a página
     - Verificar que os dados persistem

3. **Demonstração da Refatoração**
   - Mostrar a estrutura de arquivos separados:
     - src/html/index.html
     - src/css/styles.css
     - src/js/script.js
   - Explicar os benefícios da separação

4. **Testes das Funcionalidades Corrigidas**
   - Testar todas as correções implementadas
   - Mostrar mensagens de erro apropriadas
   - Demonstrar a confirmação antes de excluir cliente
   - Mostrar as máscaras automáticas para CPF e telefone

### Duração Estimada
8-10 minutos

### Dicas para Gravação
- Faça testes ao vivo para demonstrar as validações
- Mostre antes e depois das correções
- Destaque as melhorias na interface do usuário
- Explique o código das funções principais

## 🎬 Vídeo 3 - Sistema Completo (v2.0.0)

### Objetivo
Demonstrar as novas funcionalidades implementadas na versão v2.0.0 e mostrar o sistema completo em funcionamento.

### Roteiro
1. **Apresentação das Novas Funcionalidades**
   - Breve resumo das funcionalidades adicionadas
   - Explicação dos benefícios para o usuário

2. **Demonstração da Busca e Filtragem**
   - **Busca por Nome**: 
     - Digitar parte do nome de um cliente
     - Mostrar resultados filtrados
   - **Busca por E-mail**: 
     - Digitar parte do e-mail de um cliente
     - Mostrar resultados filtrados
   - **Busca por CPF**: 
     - Digitar parte do CPF de um cliente
     - Mostrar resultados filtrados
   - **Filtro por Status**: 
     - Selecionar "Ativo" e mostrar apenas clientes ativos
     - Selecionar "Inativo" e mostrar apenas clientes inativos
     - Selecionar "Todos" e mostrar todos os clientes
   - **Combinação de Busca e Filtro**: 
     - Usar busca e filtro simultaneamente

3. **Demonstração da Exportação de Dados**
   - **Exportação CSV**: 
     - Clicar no botão "Exportar CSV"
     - Mostrar o arquivo gerado
     - Abrir o arquivo e verificar o conteúdo
   - **Exportação JSON**: 
     - Clicar no botão "Exportar JSON"
     - Mostrar o arquivo gerado
     - Abrir o arquivo e verificar o conteúdo

4. **Demonstração das Estatísticas**
   - Mostrar o contador de clientes ativos/inativos
   - Cadastrar novos clientes e mostrar a atualização em tempo real
   - Alterar status de clientes e mostrar a atualização
   - Excluir clientes e mostrar a atualização

5. **Demonstração da Interface Aprimorada**
   - Mostrar os indicadores visuais de status
   - Demonstrar as notificações popup
   - Mostrar a confirmação personalizada de exclusão
   - Demonstrar as melhorias nos estilos CSS

6. **Testes Completos do Sistema**
   - Realizar um fluxo completo de CRUD
   - Testar a persistência de dados
   - Verificar todas as funcionalidades implementadas

### Duração Estimada
10-12 minutos

### Dicas para Gravação
- Mostre o sistema em funcionamento em tempo real
- Faça comparações com a versão anterior
- Destaque as melhorias na experiência do usuário
- Explique as funcionalidades mais complexas

## 🎥 Configurações Recomendadas para Gravação

### Software de Gravação
- **OBS Studio** (gratuito e completo)
- **CamStudio** (gratuito e simples)
- **Screencast-O-Matic** (com versão gratuita)

### Configurações Técnicas
- **Resolução**: 1920x1080 (Full HD) ou 1280x720 (HD)
- **Taxa de Quadros**: 30 FPS
- **Qualidade de Áudio**: 44.1 kHz, estéreo
- **Formato de Saída**: MP4 (H.264)

### Boas Práticas
- Use um microfone de boa qualidade
- Grave em um ambiente silencioso
- Mantenha uma iluminação adequada se estiver usando webcam
- Faça testes antes da gravação oficial
- Grave em segmentos menores se necessário
- Deixe margem para edição

## 📝 Pós-Produção

### Edição
- Corte partes desnecessárias ou com erros
- Adicione transições suaves entre cenas
- Inclua legendas ou anotações importantes
- Adicione música de fundo discreta (opcional)

### Compartilhamento
- Comprimir vídeos se necessário
- Enviar em formato compatível com as plataformas de destino
- Manter qualidade adequada para visualização online

## 🆘 Suporte Técnico

Em caso de problemas técnicos durante a gravação:
1. Verifique as configurações do software de gravação
2. Certifique-se de ter espaço suficiente em disco
3. Feche outros aplicativos para liberar recursos
4. Reinicie o computador se necessário
5. Consulte a documentação do software de gravação

## 📞 Contato

Para dúvidas adicionais sobre a gravação dos vídeos, entre em contato com o desenvolvedor do sistema.