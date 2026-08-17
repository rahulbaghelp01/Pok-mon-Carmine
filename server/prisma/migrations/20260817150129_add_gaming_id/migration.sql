/*
  Warnings:

  - Changed the type of `gamingId` on the `User` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "gamingId",
ADD COLUMN     "gamingId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "User_gamingId_key" ON "User"("gamingId");
