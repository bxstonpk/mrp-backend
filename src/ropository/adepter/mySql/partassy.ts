import { Partassy, PartassyRepository } from "../../port/partassy";
import { Pool } from "mysql2/promise";

export class MySqlPartassyRepository implements PartassyRepository {
    private db: Pool;

    constructor(db: Pool) {
        this.db = db;
    }

    async getAllPartassy(): Promise<Partassy[] | null> {
        throw new Error("Method not implemented.");
    }

    async getPartassyById(id: number): Promise<Partassy | null> {
        throw new Error("Method not implemented.");
    }

    async createPartassy(partassy: Partassy): Promise<Boolean | null> {
        throw new Error("Method not implemented.");
    }

    async updatePartassy(partassy: Partassy): Promise<Boolean | null> {
        throw new Error("Method not implemented.");
    }
    
    async deletePartassy(id: number): Promise<Boolean | null> {
        throw new Error("Method not implemented.");
    }
}