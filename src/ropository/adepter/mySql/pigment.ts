import { Pigment, PigmentRepository } from "../../port/pigment";
import { Pool } from "mysql2/promise";

export class MySqlPigmentRepository implements PigmentRepository {
    private db: Pool;

    constructor(db: Pool) {
        this.db = db;
    }

    async getAllPigment(): Promise<Pigment[] | null> {
        throw new Error("Method not implemented.");
    }

    async getPigmentById(id: string): Promise<Pigment | null> {
        throw new Error("Method not implemented.");
    }

    async createPigment(pigment: Pigment): Promise<Pigment | null> {
        throw new Error("Method not implemented.");
    }

    async updatePigment(pigment: Pigment): Promise<Pigment | null> {
        throw new Error("Method not implemented.");
    }

    async deletePigment(id: string): Promise<Pigment | null> {
        throw new Error("Method not implemented.");
    }
}