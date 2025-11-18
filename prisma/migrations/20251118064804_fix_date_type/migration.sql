/*
  Warnings:

  - Added the required column `partId` to the `ForecastDetail` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `forecastdetail` ADD COLUMN `partId` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `ForecastDetail` ADD CONSTRAINT `ForecastDetail_partId_fkey` FOREIGN KEY (`partId`) REFERENCES `Part`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
