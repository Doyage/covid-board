import { PrismaClient } from '@prisma/client';
import { seedCountries } from './seed/country';

const prisma = new PrismaClient();

async function main() {
  await prisma.country.deleteMany();

  await seedCountries(prisma);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => {
    void prisma.$disconnect();
  });
