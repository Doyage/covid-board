import { PrismaClient } from '@prisma/client';
import type { TCountry } from '@shared/types/country';
import { parse } from 'csv-parse';
import * as fs from 'fs';
import * as path from 'path';

export async function seedCountries(prisma: PrismaClient) {
  const countries: TCountry[] = await new Promise((resolve, reject) => {
    const csvPath = path.resolve(__dirname, 'countryInfo.csv');
    const results: TCountry[] = [];

    fs.createReadStream(csvPath)
      .pipe(parse({ columns: true, skip_empty_lines: true }))
      .on('data', (data) => results.push(data as TCountry))
      .on('end', () => resolve(results))
      .on('error', (error: Error) => reject(error));
  });

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
