/*
  Warnings:

  - Made the column `userId` on table `session` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `session` MODIFY `userId` VARCHAR(191) NOT NULL;
