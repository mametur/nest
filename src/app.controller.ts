import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';

@Controller() // Decorators
export class AppController {
    constructor(private readonly appService: AppService) {}
    @ApiTags('info')
    @Get()
    getHello(): string {
        return this.appService.getHello();
    }
}
