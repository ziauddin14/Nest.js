import { Module } from '@nestjs/common';
import { CrudController } from './crud/crud.controller';
import { AuthenticationController } from './authentication/authentication.controller';
import { AuthenticationService } from './authentication/authentication.service';
import { CrudService } from './crud/crud.service';

@Module({
  controllers: [CrudController, AuthenticationController],
  providers: [AuthenticationService, CrudService]
})
export class TodoModule {}
