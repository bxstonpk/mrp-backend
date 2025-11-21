import { Place, PlaceRepository } from "../../port/place";
import { Pool } from "mysql2/promise";

export class MySqlPlaceRepository implements PlaceRepository {
    private db: Pool;

    constructor(db: Pool) {
        this.db = db;
    }

    async getAllPlace(): Promise<Place[] | null> {
        throw new Error("Method not implemented.");
    }

    async getPlaceById(id: number): Promise<Place | null> {
        throw new Error("Method not implemented.");
    }

    async createPlace(place: Place): Promise<Boolean | null> {
        throw new Error("Method not implemented.");
    }

    async updatePlace(place: Place): Promise<Boolean | null> {
        throw new Error("Method not implemented.");
    }
    
    async deletePlace(id: number): Promise<Boolean | null> {
        throw new Error("Method not implemented.");
    }
}