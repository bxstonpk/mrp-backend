-- CreateTable
CREATE TABLE `Place` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `placeName` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Part` (
    `id` VARCHAR(191) NOT NULL,
    `partName` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PartAssy` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `parentId` VARCHAR(191) NOT NULL,
    `childId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `PartAssy_parentId_childId_key`(`parentId`, `childId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Mat` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `supplier` VARCHAR(191) NOT NULL,
    `boi` BOOLEAN NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Pigment` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Bom` (
    `stiId` VARCHAR(191) NOT NULL,
    `partBomId` VARCHAR(191) NOT NULL,
    `matId` VARCHAR(191) NOT NULL,
    `pigmentId` VARCHAR(191) NULL,
    `pigmentRatio` DOUBLE NULL,
    `cavity` INTEGER NOT NULL,
    `virgin` INTEGER NOT NULL,
    `weight` DOUBLE NOT NULL,
    `runner` DOUBLE NOT NULL,

    PRIMARY KEY (`stiId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ForecastHeader` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `placeId` INTEGER NOT NULL,
    `documentNo` VARCHAR(191) NOT NULL,
    `version` INTEGER NOT NULL,
    `forecastMonth` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ForecastDetail` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `headerId` INTEGER NOT NULL,
    `forMonth` DATETIME(3) NOT NULL,
    `qty` DOUBLE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `PartAssy` ADD CONSTRAINT `PartAssy_parentId_fkey` FOREIGN KEY (`parentId`) REFERENCES `Part`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PartAssy` ADD CONSTRAINT `PartAssy_childId_fkey` FOREIGN KEY (`childId`) REFERENCES `Part`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Bom` ADD CONSTRAINT `Bom_partBomId_fkey` FOREIGN KEY (`partBomId`) REFERENCES `Part`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Bom` ADD CONSTRAINT `Bom_matId_fkey` FOREIGN KEY (`matId`) REFERENCES `Mat`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Bom` ADD CONSTRAINT `Bom_pigmentId_fkey` FOREIGN KEY (`pigmentId`) REFERENCES `Pigment`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ForecastHeader` ADD CONSTRAINT `ForecastHeader_placeId_fkey` FOREIGN KEY (`placeId`) REFERENCES `Place`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ForecastDetail` ADD CONSTRAINT `ForecastDetail_headerId_fkey` FOREIGN KEY (`headerId`) REFERENCES `ForecastHeader`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
