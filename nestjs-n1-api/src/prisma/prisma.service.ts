import 'dotenv/config';
import { Injectable } from '@nestjs/common';
4. Gerando o Recurso de Usuário(CRUD)
Utilizaremos o gerador automático do NestJS para criar a estrutura base:
Bash
Observação:
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../generated/prisma/client';
@Injectable()
export class PrismaService extends PrismaClient {
    constructor() {
        const databaseUrl = process.env.DATABASE_URL;
        if (!databaseUrl) throw new Error('DATABASE_URL não definida');
        // Em algumas versões é "connectionString" em vez de "url".
        const adapter = new PrismaPg({ connectionString: databaseUrl });
        super({ adapter });
    }
}
