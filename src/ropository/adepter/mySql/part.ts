import { Part, PartRepository } from "../../port/part";
import { Pool } from "mysql2/promise";
import { PrismaClient } from "@prisma/client";

export class MySqlPartRepository implements PartRepository {
    private db: Pool;
    private prisma = new PrismaClient();

    constructor(db: Pool) {
        this.db = db;
    }

    async getAllPart(): Promise<Part[] | null> {
        const parts = await this.prisma.part.findMany();

        return parts;
    }

    async getPartById(id: string): Promise<Part[] | null> {
        const part = await this.prisma.part.findMany({ where: { id: id } });

        return part;
    }

    async createPart(part: Part): Promise<Boolean | null> {
        const newPart = await this.prisma.part.create({ data: part });

        return newPart ? true : false;
    }

    async updatePart(part: Part): Promise<Boolean | null> {
        const updatePart = await this.prisma.part.update({ where: { id: part.id }, data: part });

        return updatePart ? true : false;
    }

    async deletePart(id: string): Promise<Boolean | null> {
        const deletePart = await this.prisma.part.delete({ where: { id: id } });

        return deletePart ? true : false;
    }
}