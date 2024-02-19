/*
  Warnings:

  - You are about to drop the column `image` on the `rooms` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "rooms_photos" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "roomsId" INTEGER,
    CONSTRAINT "rooms_photos_roomsId_fkey" FOREIGN KEY ("roomsId") REFERENCES "rooms" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_rooms" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "peopleMax" INTEGER NOT NULL,
    "address" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "description" TEXT NOT NULL
);
INSERT INTO "new_rooms" ("address", "description", "id", "name", "peopleMax", "price") SELECT "address", "description", "id", "name", "peopleMax", "price" FROM "rooms";
DROP TABLE "rooms";
ALTER TABLE "new_rooms" RENAME TO "rooms";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
