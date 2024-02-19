/*
  Warnings:

  - Added the required column `image` to the `rooms` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_rooms" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "peopleMax" INTEGER NOT NULL,
    "address" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT NOT NULL
);
INSERT INTO "new_rooms" ("address", "description", "id", "name", "peopleMax", "price") SELECT "address", "description", "id", "name", "peopleMax", "price" FROM "rooms";
DROP TABLE "rooms";
ALTER TABLE "new_rooms" RENAME TO "rooms";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
