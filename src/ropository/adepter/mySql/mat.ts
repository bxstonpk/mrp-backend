import { Mat, MatRepository } from "../../port/mat";
import { Pool } from "mysql2/promise";

export class MySqlMatRepository implements MatRepository {
    private db: Pool;

    constructor(db: Pool) {
        this.db = db;
    }

    async getAllMat(): Promise<Mat[] | null> {
        throw new Error("Method not implemented.");
    }

    async getMatById(id: string): Promise<Mat | null> {
        throw new Error("Method not implemented.");
    }

    async createMat(mat: Mat): Promise<Boolean | null> {
        throw new Error("Method not implemented.");
    }

    async updateMat(mat: Mat): Promise<Boolean | null> {
        throw new Error("Method not implemented.");
    }
    
    async deleteMat(id: string): Promise<Boolean | null> {
        throw new Error("Method not implemented.");
    }
}