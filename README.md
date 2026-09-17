# Casa do Hamburguer 🍔

Sistema full stack de pedidos para hamburgueria — autenticação JWT, cardápio
dinâmico e gerenciamento de pedidos.

- **Front-end**: React + TypeScript + Vite + Tailwind CSS + react-router-dom
- **Back-end**: Node.js + Express + TypeScript + Prisma (PostgreSQL/Neon) + JWT

## Como rodar

### 1. Back-end

```bash
cd Back-And
npm install
cp .env.example .env
# edite o .env com sua DATABASE_URL do Neon e um JWT_SECRET
npx prisma generate
npx prisma migrate dev --name init
npm run dev
```

O servidor sobe em `http://localhost:3000`.

### 2. Front-end

Em outro terminal:

```bash
cd Front-And
npm install
npm run dev
```

O front sobe em `http://localhost:5173`.

## Rotas da API

| Método | Rota           | Descrição                          | Autenticado |
| ------ | -------------- | ----------------------------------- | ----------- |
| POST   | /api/register  | Cria um novo usuário                | Não         |
| POST   | /api/login     | Autentica e retorna um token JWT    | Não         |
| GET    | /api/menu      | Lista os itens do cardápio          | Não         |
| POST   | /api/orders    | Cria um novo pedido                 | Sim         |
| GET    | /api/orders    | Lista os pedidos do usuário logado  | Sim         |

Para rotas autenticadas, envie o header:
`Authorization: Bearer <token>`
