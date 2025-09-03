/*
  Warnings:

  - The values [Male,Female] on the enum `UserSex` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `endDate` on the `Assignment` table. All the data in the column will be lost.
  - Added the required column `dueDate` to the `Assignment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `birthday` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `birthday` to the `Teacher` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "public"."UserSex_new" AS ENUM ('MALE', 'FEMALE');
ALTER TABLE "public"."Student" ALTER COLUMN "sex" TYPE "public"."UserSex_new" USING ("sex"::text::"public"."UserSex_new");
ALTER TABLE "public"."Teacher" ALTER COLUMN "sex" TYPE "public"."UserSex_new" USING ("sex"::text::"public"."UserSex_new");
ALTER TYPE "public"."UserSex" RENAME TO "UserSex_old";
ALTER TYPE "public"."UserSex_new" RENAME TO "UserSex";
DROP TYPE "public"."UserSex_old";
COMMIT;

-- DropForeignKey
ALTER TABLE "public"."Class" DROP CONSTRAINT "Class_supervisorId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Result" DROP CONSTRAINT "Result_assignment_fkey";

-- AlterTable
ALTER TABLE "public"."Assignment" DROP COLUMN "endDate",
ADD COLUMN     "dueDate" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "public"."Class" ALTER COLUMN "supervisorId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "public"."Student" ADD COLUMN     "birthday" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "public"."Teacher" ADD COLUMN     "birthday" TIMESTAMP(3) NOT NULL;

-- RenameForeignKey
ALTER TABLE "public"."Result" RENAME CONSTRAINT "Result_exam_fkey" TO "Result_examId_fkey";

-- AddForeignKey
ALTER TABLE "public"."Class" ADD CONSTRAINT "Class_supervisorId_fkey" FOREIGN KEY ("supervisorId") REFERENCES "public"."Teacher"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Result" ADD CONSTRAINT "Result_assignmentId_fkey" FOREIGN KEY ("assignmentId") REFERENCES "public"."Assignment"("id") ON DELETE SET NULL ON UPDATE CASCADE;
