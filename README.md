# CMP2305 - Avaliação N1: API RESTful com NestJS 🚀

Este repositório contém a implementação da Prova N1 da disciplina **Tecnologia de Construção de Software II**. Trata-se de uma API RESTful desenvolvida com **NestJS** e **Prisma ORM** para gerenciar o domínio de um sistema (Usuários, Perfis e Endereços), atendendo a todos os requisitos exigidos.

Para garantir que a avaliação ocorra sem problemas de ambiente ou dependência de containers Docker, o projeto foi configurado com o banco de dados **SQLite**, nativo do Prisma e pronto para rodar localmente.

---

## 🛠️ Tecnologias Utilizadas

* **Framework:** [NestJS](https://nestjs.com/) (Node.js + TypeScript)
* **ORM:** [Prisma](https://www.prisma.io/)
* **Banco de Dados:** SQLite (Para máxima portabilidade na avaliação)
* **Documentação:** Swagger (OpenAPI)
* **Validação:** `class-validator` e `class-transformer`

---

## ✅ Requisitos Atendidos

O projeto contempla **100% dos requisitos obrigatórios** solicitados no PDF da avaliação:

- [x] **CRUD completo** para as entidades: `Profile` (Perfil), `User` (Usuário) e `Address` (Endereço).
- [x] **Modelagem de relacionamentos** no Prisma:
    * **1:N**: Um Perfil para vários Usuários.
    * **1:1**: Um Usuário para um Endereço (com restrição rigorosa e deleção em cascata).
- [x] **Módulo Global** do Prisma (`PrismaModule`).
- [x] **DTOs protegidos** e validados utilizando decorators do `class-validator` (ex: `@IsEmail`, `@IsUUID`, `@IsNotEmpty`).
- [x] **Documentação interativa** da API com Swagger.
- [x] **Desafio Extra:** Implementação de **Soft Delete** na exclusão de Usuários (campo `deletedAt`).

---

## ⚙️ Como Executar o Projeto

Certifique-se de ter o **Node.js** instalado na sua máquina. Siga os passos abaixo no terminal:

### 1. Clone e acesse o repositório
```bash
git clone <URL_DO_SEU_REPOSITORIO>
cd <NOME_DA_PASTA>
```

2. Instale as dependências
```
npm install
```

3. Configure o Banco de Dados (Prisma)
Execute os comandos abaixo para gerar o cliente tipado do Prisma e criar as tabelas no banco de dados SQLite local (dev.db):
```bash
npx prisma generate
npx prisma migrate dev --name init
```

4. Inicie o servidor
```bash
npm run start:dev
```

> O servidor estará rodando em: http://localhost:3000
> 
📖 Como Testar a API (Swagger)
Com a aplicação rodando, acesse a documentação interativa gerada pelo Swagger no seu navegador:
🔗 http://localhost:3000/api/docs
🧪 Ordem de Testes Sugerida
Devido aos relacionamentos rigorosos de chave estrangeira, siga esta ordem para os testes de criação (POST):
 * Criar Perfis: Vá na rota POST /profile e crie ao menos um perfil (Ex: name: "ADMIN"). Copie o ID (UUID) retornado.
 * Criar Usuários: Vá na rota POST /user e crie um usuário passando o ID do perfil recém-criado no campo profileId. Copie o ID do usuário retornado.
 * Criar Endereços: Vá na rota POST /address e crie um endereço vinculando-o ao userId.
> Nota: Tente criar um segundo endereço para o mesmo userId para verificar a restrição 1:1 funcionando e bloqueando a ação.
> 
Desenvolvido por Leonardo para a disciplina de CMP2305.

