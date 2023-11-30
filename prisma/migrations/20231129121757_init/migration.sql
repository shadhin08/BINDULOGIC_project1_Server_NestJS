-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RentArea" (
    "id" TEXT NOT NULL,
    "area" TEXT NOT NULL,

    CONSTRAINT "RentArea_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RentPost" (
    "id" TEXT NOT NULL,
    "heading" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "rent" DOUBLE PRECISION NOT NULL,
    "bed" INTEGER NOT NULL,
    "bath" INTEGER NOT NULL,
    "size" INTEGER NOT NULL,
    "image" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userUsername" TEXT NOT NULL,
    "rentAreaName" TEXT NOT NULL,

    CONSTRAINT "RentPost_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "RentArea_area_key" ON "RentArea"("area");

-- AddForeignKey
ALTER TABLE "RentPost" ADD CONSTRAINT "RentPost_userUsername_fkey" FOREIGN KEY ("userUsername") REFERENCES "User"("username") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RentPost" ADD CONSTRAINT "RentPost_rentAreaName_fkey" FOREIGN KEY ("rentAreaName") REFERENCES "RentArea"("area") ON DELETE RESTRICT ON UPDATE CASCADE;
