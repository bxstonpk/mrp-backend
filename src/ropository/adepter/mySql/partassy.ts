import { Partassy, PartassyRepository } from "../../port/partassy";
import { Pool } from "mysql2/promise";

export class MySqlPartassyRepository implements PartassyRepository {
    private db: Pool;

    constructor(db: Pool) {
        this.db = db;
    }

    getAllPartassy(): Promise<Partassy[] | null> {
        throw new Error("Method not implemented.");
    }

    getPartassyById(id: number): Promise<Partassy | null> {
        throw new Error("Method not implemented.");
    }

    createPartassy(partassy: Partassy): Promise<Partassy | null> {
        throw new Error("Method not implemented.");
    }

    updatePartassy(partassy: Partassy): Promise<Partassy | null> {
        throw new Error("Method not implemented.");
    }
    
    deletePartassy(id: number): Promise<Partassy | null> {
        throw new Error("Method not implemented.");
    }
}