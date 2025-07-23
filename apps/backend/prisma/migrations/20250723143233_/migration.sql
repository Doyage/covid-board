-- CreateTable
CREATE TABLE "GlobalStat" (
    "id" SERIAL NOT NULL,
    "cc" CHAR(2) NOT NULL,
    "date" DATE NOT NULL,
    "confirmed" INTEGER NOT NULL,
    "death" INTEGER,
    "released" INTEGER,
    "tested" INTEGER,
    "testing" INTEGER,
    "negative" INTEGER,

    CONSTRAINT "GlobalStat_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "GlobalStat_cc_date_key" ON "GlobalStat"("cc", "date");
