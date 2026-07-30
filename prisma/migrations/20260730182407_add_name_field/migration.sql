/*
  Warnings:

  - Added the required column `name` to the `waitlist_signups` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "waitlist_signups" ADD COLUMN     "name" TEXT NOT NULL;
