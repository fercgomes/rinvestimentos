import { Controller, Get } from '@nestjs/common';

const host =
  process.env.NODE_ENV === 'production'
    ? 'api.rinvestimentos.xyz'
    : 'api.localhost';

@Controller({ host: host })
export class AppController {
  @Get()
  public async client() {
    return 'dsjkfh';
  }
}
