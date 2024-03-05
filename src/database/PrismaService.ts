import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  //Inicio da conexão
  async onModuleInit() {
    await this.$connect();
  }

  //Finalizar conexão
  async enableShutdownHooks(app: INestApplication) {
    (this.$on as any)('beforeExit', async () => {
      await app.close();
    });
  }
}
