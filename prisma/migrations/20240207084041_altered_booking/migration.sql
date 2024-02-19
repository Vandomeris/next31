/*
  Warnings:

  - Added the required column `roomsId` to the `bookings` table without a default value. This is not possible if the table is not empty.

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
    "totalSum" INTEGER NOT NULL,
    "roomsId" INTEGER NOT NULL,
    CONSTRAINT "bookings_roomsId_fkey" FOREIGN KEY ("roomsId") REFERENCES "rooms" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_bookings" ("dateFrom", "dateTo", "email", "fio", "guests", "id", "passport", "phone", "totalSum") SELECT "dateFrom", "dateTo", "email", "fio", "guests", "id", "passport", "phone", "totalSum" FROM "bookings";
DROP TABLE "bookings";
ALTER TABLE "new_bookings" RENAME TO "bookings";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
