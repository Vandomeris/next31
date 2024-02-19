-- CreateTable
CREATE TABLE "bookings" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "fio" TEXT NOT NULL,
    "guests" INTEGER NOT NULL,
    "dateRange" DATETIME NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "passport" TEXT NOT NULL,
    "totalSum" INTEGER NOT NULL
);
