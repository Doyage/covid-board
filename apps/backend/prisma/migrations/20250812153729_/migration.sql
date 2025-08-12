-- CreateTable
CREATE TABLE "Country" (
    "cc" CHAR(2) NOT NULL,
    "flag" TEXT NOT NULL,
    "name_en" TEXT NOT NULL,
    "name_ko" TEXT NOT NULL,
    "name_ja" TEXT NOT NULL,
    "population" BIGINT NOT NULL,
    "worldometer_title" TEXT NOT NULL,

    CONSTRAINT "Country_pkey" PRIMARY KEY ("cc")
);
