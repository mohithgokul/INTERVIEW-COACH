-- CreateTable
CREATE TABLE `Session` (
    `id` VARCHAR(191) NOT NULL,
    `mode` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `fluency` INTEGER NOT NULL,
    `confidence` INTEGER NOT NULL,
    `posture` INTEGER NOT NULL,
    `eyeContact` INTEGER NOT NULL,
    `relevance` INTEGER NOT NULL,
    `outfit` INTEGER NOT NULL,
    `overall` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
