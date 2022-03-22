/*
  Warnings:

  - Added the required column `email` to the `Client` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Client" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "creditsWallet" REAL NOT NULL DEFAULT 0,
    "suite" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Client" ("created_at", "creditsWallet", "id", "name", "suite") SELECT "created_at", "creditsWallet", "id", "name", "suite" FROM "Client";
DROP TABLE "Client";
ALTER TABLE "new_Client" RENAME TO "Client";
CREATE UNIQUE INDEX "Client_email_key" ON "Client"("email");
CREATE UNIQUE INDEX "Client_suite_key" ON "Client"("suite");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
