-- CreateTable
CREATE TABLE "tbl_transaction" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "trx_date" TEXT NOT NULL,
    "trx_bank_from" TEXT NOT NULL,
    "trx_type" TEXT NOT NULL,
    "trx_via" TEXT NOT NULL,
    "trx_name" TEXT NOT NULL,
    "trx_amount" REAL NOT NULL,
    "trx_notes" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
