-- CreateEnum
CREATE TYPE "Answer" AS ENUM ('YES', 'NO');

-- CreateTable
CREATE TABLE "UserResponse" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "answer" "Answer" NOT NULL,

    CONSTRAINT "UserResponse_pkey" PRIMARY KEY ("id")
);
