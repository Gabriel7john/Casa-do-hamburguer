<div align="center">

# 🍔 Casa do Hamburguer

### Sistema full stack de pedidos para hamburgueria

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Node.js](https://img.shields.io/badge/Node.js-Express-339933?logo=node.js&logoColor=white)](https://expressjs.com)
[![Prisma](https://img.shields.io/badge/Prisma-ORM-2D3748?logo=prisma&logoColor=white)](https://www.prisma.io)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Neon-4169E1?logo=postgresql&logoColor=white)](https://neon.tech)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-CSS-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![JWT](https://img.shields.io/badge/Auth-JWT-000000?logo=jsonwebtokens&logoColor=white)](https://jwt.io)
[![License](https://img.shields.io/badge/license-MIT-green)](#-licença)

</div>

---

## 📖 Sobre o projeto

Sistema completo de pedidos para hamburgueria, com autenticação de usuários,
cardápio dinâmico e gerenciamento de pedidos em tempo real. Desenvolvido do
zero como projeto full stack, aplicando boas práticas de arquitetura, tipagem
forte com TypeScript e autenticação segura via JWT.

## ✨ Funcionalidades

- 🔐 **Autenticação** — cadastro e login com senha criptografada (bcrypt) e
  token JWT
- 🍔 **Cardápio dinâmico** — listagem de itens direto do banco de dados
- 🧾 **Pedidos** — criação e consulta de pedidos vinculados ao usuário logado
- 🛡️ **Rotas protegidas** — middleware de autenticação valida o token em
  toda rota sensível

## 📸 Screenshots

<div align="center">
  <img src="./docs/screenshot-login.png" alt="Tela de login" width="45%" />
  <img src="./docs/screenshot-cardapio.png" alt="Tela de cardápio" width="45%" />
</div>

> Adicione suas próprias capturas de tela na pasta `docs/` e ajuste os
> caminhos acima.

## 🛠️ Tecnologias

**Front-end**
- React 19 + TypeScript
- Vite
- Tailwind CSS
- React Router DOM

**Back-end**
- Node.js + Express
- TypeScript
- Prisma ORM
- PostgreSQL (hospedado no Neon)
- JWT + bcrypt

## 🚀 Como rodar localmente

### Pré-requisitos
- Node.js 18+
- Uma conta no [Neon](https://neon.tech) (ou outro Postgres) para o banco de
  dados

### 1. Clone o repositório

```bash
git clone https://github.com/Gabriel7john/Casa-do-hamburguerapp.git
cd Casa-do-hamburguerapp
```

### 2. Back-end

```bash
cd Back-And
npm install
cp .env.example .env
```

Edite o `.env` com sua `DATABASE_URL` do Neon e um `JWT_SECRET` de sua
escolha. Depois:

```bash
npx prisma generate
npx prisma migrate dev --name init
npm run dev
```

O servidor sobe em `http://localhost:3000`.

### 3. Front-end

Em outro terminal:

```bash
cd Front-And
npm install
npm run dev
```

O front sobe em `http://localhost:5173`.

## 📡 Rotas da API

| Método | Rota           | Descrição                         | Autenticado |
| ------ | -------------- | ---------------------------------- | :---------: |
| POST   | `/api/register`| Cria um novo usuário               |     ❌      |
| POST   | `/api/login`   | Autentica e retorna um token JWT   |     ❌      |
| GET    | `/api/menu`    | Lista os itens do cardápio         |     ❌      |
| POST   | `/api/orders`  | Cria um novo pedido                |     ✅      |
| GET    | `/api/orders`  | Lista os pedidos do usuário logado |     ✅      |

Para rotas autenticadas, envie o header:

```
Authorization: Bearer <seu-token>
```

## 📂 Estrutura do projeto

```
Casa-do-hamburguerapp/
├── Front-And/          # Aplicação React
│   └── src/
│       ├── components/
│       ├── login.tsx
│       ├── Register.tsx
│       └── App.tsx
└── Back-And/            # API Express
    ├── prisma/
    │   └── schema.prisma
    └── src/
        ├── routes/
        ├── middleware/
        └── index.ts
```

## 🗺️ Próximos passos

- [ ] Seed do cardápio com itens reais
- [ ] Notificação por e-mail quando o status do pedido muda
- [ ] Painel do dono da hamburgueria para gerenciar pedidos

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais
detalhes.

---

<div align="center">
  Feito por <a href="https://github.com/Gabriel7john">Gabriel Santana</a>
</div>
