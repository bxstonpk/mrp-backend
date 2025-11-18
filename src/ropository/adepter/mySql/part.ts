import { Part, PartRepository } from "../../port/part";
import { Pool } from "mysql2/promise";

export class MySqlPartRepository implements PartRepository {
    private db: Pool;

    constructor(db: Pool) {
        this.db = db;
    }

    getAllPart(): Promise<Part[] | null> {
        throw new Error("Method not implemented.");
    }

    getPartById(id: string): Promise<Part | null> {
        throw new Error("Method not implemented.");
    }

    createPart(part: Part): Promise<Part | null> {
        throw new Error("Method not implemented.");
    }

    updatePart(part: Part): Promise<Part | null> {
        throw new Error("Method not implemented.");
    }

    deletePart(id: string): Promise<Part | null> {
        throw new Error("Method not implemented.");
    }
}