import { ForecastAggregate, ForecastRepository } from "../../port/forecast";
import { Pool } from "mysql2/promise";

export class MySqlForecastRepository implements ForecastRepository {
    private db: Pool;

    constructor(db: Pool) {
        this.db = db;
    }

    async getAllForecast(): Promise<ForecastAggregate[] | null> {
        throw new Error("Method not implemented.");
    }

    async getForecastById(id: number): Promise<ForecastAggregate | null> {
        throw new Error("Method not implemented.");
    }

    async createForecast(dto: ForecastAggregate): Promise<ForecastAggregate | null> {
        throw new Error("Method not implemented.");
    }

    async updateForecast(dto: ForecastAggregate): Promise<ForecastAggregate | null> {
        throw new Error("Method not implemented.");
    }

    async deleteForecast(id: number): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }
}