import * as graphql from "@nestjs/graphql";
import { ApartmentResolverBase } from "./base/apartment.resolver.base";
import { Apartment } from "./base/Apartment";
import { ApartmentService } from "./apartment.service";

@graphql.Resolver(() => Apartment)
export class ApartmentResolver extends ApartmentResolverBase {
  constructor(protected readonly service: ApartmentService) {
    super(service);
  }
}
