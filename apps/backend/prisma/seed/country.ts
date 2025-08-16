import { PrismaClient } from '@prisma/client';
import { TCountry } from '@repo/types';
import * as path from 'path';
import { CsvParser } from '../../src/common/csv/csv.parser';

export async function seedCountries(prisma: PrismaClient) {
  const csvPath = path.resolve(__dirname, 'countryInfo.csv');
  const csvParser = new CsvParser();
  const countries: TCountry[] = await csvParser.parse<TCountry>(csvPath);

  for (const country of countries) {
    await prisma.country.create({
      data: {
        cc: country.cc,
        flag: country.flag,
        name_en: country.name_en,
        name_ko: country.name_ko,
        name_ja: country.name_ja,
        population: parseInt(country.population, 10),
        worldometer_title: country.worldometer_title,
      },
    });
  }
}
