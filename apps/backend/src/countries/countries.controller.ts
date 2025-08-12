import { Controller, Get, Version } from '@nestjs/common';
import { CountriesService } from './countries.service';

@Controller('countries')
export class CountriesController {
  constructor(private readonly countriesService: CountriesService) {}

  @Get()
  @Version('1')
  findAll() {
    return this.countriesService.findAll();
  }

  @Get(':cc')
  @Version('1')
  findbyCode(cc: string) {
    return this.countriesService.findByCode(cc);
  }
}
