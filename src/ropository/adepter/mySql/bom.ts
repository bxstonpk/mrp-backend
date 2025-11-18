import { Bom, BomRepository } from "../../port/bom";
import { Pool } from "mysql2/promise";

export class MySqlBomRepository implements BomRepository {
    private db: Pool;

    constructor(db: Pool) {
        this.db = db;
    }

    async getAllBom(): Promise<Bom[] | null> {
        throw new Error("Method not implemented.");
    }

    async getBomByPartBomId(partBomId: string): Promise<Bom | null> {
        throw new Error("Method not implemented.");
    }

    async getBomByMatId(matId: string): Promise<Bom | null> {
        throw new Error("Method not implemented.");
    }

    async updateBom(bom: Bom): Promise<Bom | null> {
        throw new Error("Method not implemented.");
    }

    async createBom(bom: Bom): Promise<Bom | null> {
        throw new Error("Method not implemented.");
    }

    async deleteBom(partBomId: string): Promise<Bom | null> {
        throw new Error("Method not implemented.");
    }
}