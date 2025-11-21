import { Bom, BomRepository } from "../../port/bom";
import { Pool } from "mysql2/promise";
import { PrismaClient } from "@prisma/client";

export class MySqlBomRepository implements BomRepository {
    private db: Pool;
    private prisma = new PrismaClient();

    constructor(db: Pool) {
        this.db = db;
    }

    async getAllBom(): Promise<Bom[] | null> {
        const allBom = await this.prisma.bom.findMany();

        return allBom;
    }

    async getBomByPartBomId(partBomId: string): Promise<Bom[] | null> {
        const bomByPart = await this.prisma.bom.findMany({ where: { stiId: partBomId } });

        return bomByPart;
    }

    async getBomByMatId(matId: string): Promise<Bom[] | null> {
        const bomByMat = await this.prisma.bom.findMany({ where: { matId: matId } });

        return bomByMat;
    }

    async updateBom(bom: Bom): Promise<Boolean | null> {
        const updateBom = await this.prisma.bom.update({
            where: { stiId: bom.stiId },
            data: {
                stiId: bom.stiId,
                cavity: bom.cavity,
                virgin: bom.virgin,
                weight: bom.weight,
                runner: bom.runner,
                pigmentRatio: bom.pigmentRatio ?? null,

                part: { connect: { id: bom.partBomId } },
                mat: { connect: { id: bom.matId } },

                pigment: bom.pigmentId
                    ? { connect: { id: bom.pigmentId } }
                    : undefined
            }
        });

        return updateBom ? true : false;
    }

    async createBom(bom: Bom): Promise<Boolean | null> {
        const newBom = await this.prisma.bom.create({
            data: {
                stiId: bom.stiId,
                cavity: bom.cavity,
                virgin: bom.virgin,
                weight: bom.weight,
                runner: bom.runner,
                pigmentRatio: bom.pigmentRatio ?? null,

                part: { connect: { id: bom.partBomId } },
                mat: { connect: { id: bom.matId } },

                pigment: bom.pigmentId
                    ? { connect: { id: bom.pigmentId } }
                    : undefined
            }
        });

        return newBom ? true : false;
    }

    async deleteBom(partBomId: string): Promise<Boolean | null> {
        const deleteBom = await this.prisma.bom.delete({ where: { stiId: partBomId } });

        return deleteBom ? true : false;
    }
}