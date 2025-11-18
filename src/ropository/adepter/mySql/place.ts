import { Place, PlaceRepository } from "../../port/place";
import { Pool } from "mysql2/promise";

export class MySqlPlaceRepository implements PlaceRepository {
    private db: Pool;

    constructor(db: Pool) {
        this.db = db;
    }

    getAllPlace(): Promise<Place[] | null> {
        throw new Error("Method not implemented.");
    }

    getPlaceById(id: number): Promise<Place | null> {
        throw new Error("Method not implemented.");
    }

    createPlace(place: Place): Promise<Place | null> {
        throw new Error("Method not implemented.");
    }

    updatePlace(place: Place): Promise<Place | null> {
        throw new Error("Method not implemented.");
    }
    
    deletePlace(id: number): Promise<Place | null> {
        throw new Error("Method not implemented.");
    }
}