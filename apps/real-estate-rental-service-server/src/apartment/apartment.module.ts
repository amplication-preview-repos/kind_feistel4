import { Module } from "@nestjs/common";
import { ApartmentModuleBase } from "./base/apartment.module.base";
import { ApartmentService } from "./apartment.service";
import { ApartmentController } from "./apartment.controller";
import { ApartmentResolver } from "./apartment.resolver";

@Module({
  imports: [ApartmentModuleBase],
  controllers: [ApartmentController],
  providers: [ApartmentService, ApartmentResolver],
  exports: [ApartmentService],
})
export class ApartmentModule {}
