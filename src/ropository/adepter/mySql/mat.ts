import { Mat, MatRepository } from "../../port/mat";
import { Pool } from "mysql2/promise";

export class MySqlMatRepository implements MatRepository {
    private db: Pool;

    constructor(db: Pool) {
        this.db = db;
    }

    getAllMat(): Promise<Mat[] | null> {
        throw new Error("Method not implemented.");
    }

    getMatById(id: string): Promise<Mat | null> {
        throw new Error("Method not implemented.");
    }

    createMat(mat: Mat): Promise<Mat | null> {
        throw new Error("Method not implemented.");
    }

    updateMat(mat: Mat): Promise<Mat | null> {
        throw new Error("Method not implemented.");
    }
    
    deleteMat(id: string): Promise<Mat | null> {
        throw new Error("Method not implemented.");
    }
}