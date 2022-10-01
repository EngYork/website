-- CreateTable
CREATE TABLE "AllowedUsers" (
    "userName" TEXT NOT NULL,

    CONSTRAINT "AllowedUsers_pkey" PRIMARY KEY ("userName")
);

-- CreateIndex
CREATE UNIQUE INDEX "AllowedUsers_userName_key" ON "AllowedUsers"("userName");
