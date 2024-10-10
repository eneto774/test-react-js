# Reddit Explorer: Desafio de Desenvolvimento Next.js 14

## Visão Geral

Bem-vindo ao desafio de desenvolvimento "Reddit Explorer"! Este projeto visa avaliar as habilidades de desenvolvedores plenos em Next.js 14, utilizando a estrutura de App Router, com foco no consumo da API do Reddit, otimização de performance e uso eficiente de estados.

## O Desafio

Sua missão é desenvolver uma aplicação web usando Next.js 14 com App Router que consuma a API do Reddit, focando em performance e uso eficiente de estados. A aplicação deve exibir e interagir com conteúdo do Reddit de forma otimizada.

### Requisitos:

1. **Configuração e Estrutura:**
   - Utilize Next.js 14 com a estrutura de App Router (app folder).
   - Implemente o projeto usando TypeScript.
   - Configure um linter (ESLint) e um formatter (Prettier).

2. **Consumo da API do Reddit:**
   - Utilize a API oficial do Reddit (https://www.reddit.com/dev/api/).
   - Implemente autenticação OAuth para acessar a API.
   - Use Server Components para buscar dados iniciais onde apropriado.

3. **Funcionalidades:**
   - Página inicial com lista dos subreddits mais populares.
   - Página de detalhes do subreddit mostrando posts recentes.
   - Página de detalhes do post com comentários.
   - Implementar infinite scrolling para carregar mais conteúdo.
   - Adicionar funcionalidade de busca por subreddits e posts.

4. **Performance e Otimização:**
   - Utilizar Server Components para renderização eficiente no servidor.
   - Implementar Streaming SSR e React Suspense para melhorar a experiência de carregamento.
   - Utilizar o `next/image` para otimização de imagens.
   - Implementar Route Groups e Parallel Routes onde apropriado.
   - Otimizar o carregamento de fontes e outros recursos estáticos.

5. **Gerenciamento de Estado:**
   - Utilizar Server Actions para manipulação de estado no servidor.
   - Implementar caching de dados usando React Cache ou similar.
   - Utilizar React Server Components para reduzir a quantidade de JavaScript enviado ao cliente.

6. **UI/UX:**
   - Criar uma interface responsiva e acessível.
   - Implementar modo escuro/claro com troca dinâmica.
   - Adicionar animações suaves para transições entre páginas e carregamento de conteúdo.

7. **Testes:**
   - Escrever testes unitários para componentes críticos.
   - Implementar testes de integração para fluxos principais.
   - Utilizar ferramentas como Jest e React Testing Library.

8. **Deployment:**
   - Configurar um pipeline de CI/CD (por exemplo, usando GitHub Actions).
   - Fazer deploy da aplicação em uma plataforma como Vercel.

## Critérios de Avaliação

1. Qualidade e organização do código
2. Performance da aplicação (use Lighthouse para medir)
3. Uso apropriado de recursos do Next.js 14 e App Router
4. Implementação eficiente de Server Components e Client Components
5. Otimizações de carregamento e renderização
6. Tratamento de erros e experiência do usuário
7. Cobertura e qualidade dos testes
8. Documentação do projeto

## Configuração do Projeto

1. Clone o repositório:
git clone https://github.com/seu-usuario/reddit-explorer.git
cd reddit-explorer


2. Instale as dependências:
npm install


3. Configure as variáveis de ambiente:
Crie um arquivo `.env.local` na raiz do projeto e adicione as seguintes variáveis:
REDDIT_CLIENT_ID=seu_client_id_aqui
REDDIT_CLIENT_SECRET=seu_client_secret_aqui
REDDIT_REDIRECT_URI=http://localhost:3000/api/auth/callback/reddit


4. Execute o projeto em modo de desenvolvimento:
npm run dev


5. Acesse `http://localhost:3000` no seu navegador.

## Scripts Disponíveis

- `npm run dev`: Inicia o servidor de desenvolvimento
- `npm run build`: Cria a versão de produção do aplicativo
- `npm start`: Inicia o servidor de produção
- `npm test`: Executa os testes
- `npm run lint`: Executa o linter

## Estrutura do Projeto

reddit-explorer/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── subreddit/
│   │   └── [id]/
│   │       └── page.tsx
│   ├── post/
│   │   └── [id]/
│   │       └── page.tsx
│   └── api/
│       └── auth/
│           └── [...nextauth]/
│               └── route.ts
├── components/
├── lib/
├── hooks/
├── styles/
├── public/
├── tests/
├── .eslintrc.json
├── .prettierrc
├── next.config.js
├── package.json
├── README.md
└── tsconfig.json


## Entrega

- O código deve ser disponibilizado neste repositório Git público.
- Inclua comentários relevantes no código para explicar decisões de implementação.
- Forneça uma demonstração ao vivo da aplicação deployada (adicione o link aqui).
- Inclua um README detalhado com instruções de configuração, execução e quaisquer decisões de arquitetura importantes.

## Prazo

7 dias a partir do recebimento do desafio.

## Recursos Adicionais

- [Documentação do Next.js 14](https://nextjs.org/docs)
- [Guia do App Router](https://nextjs.org/docs/app)
- [API do Reddit](https://www.reddit.com/dev/api/)
- [Guia de Autenticação do Reddit](https://github.com/reddit-archive/reddit/wiki/OAuth2)

## Dúvidas

Se você tiver alguma dúvida sobre o desafio, por favor, abra uma issue neste repositório.

Boa sorte e feliz coding!