/*
  Warnings:

  - You are about to drop the column `dateRange` on the `bookings` table. All the data in the column will be lost.
  - Added the required column `dateFrom` to the `bookings` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dateTo` to the `bookings` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_bookings" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "fio" TEXT NOT NULL,
    "guests" INTEGER NOT NULL,
    "dateFrom" DATETIME NOT NULL,
    "dateTo" DATETIME NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "passport" TEXT NOT NULL,
    "totalSum" INTEGER NOT NULL
);
INSERT INTO "new_bookings" ("email", "fio", "guests", "id", "passport", "phone", "totalSum") SELECT "email", "fio", "guests", "id", "passport", "phone", "totalSum" FROM "bookings";
DROP TABLE "bookings";
ALTER TABLE "new_bookings" RENAME TO "bookings";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
