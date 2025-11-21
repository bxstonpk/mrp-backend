import { Pool } from "mysql2/promise"

import { MySqlBomRepository } from "./bom";
import { MySqlForecastRepository } from "./forecast";
import { MySqlMatRepository } from "./mat";
import { MySqlPartassyRepository } from "./partassy";
import { MySqlPartRepository } from "./part";
import { MySqlPigmentRepository } from "./pigment";
import { MySqlPlaceRepository } from "./place";

export class MySqlRopository {
    private db: Pool

    constructor(db: Pool) {
        this.db = db;
    }

    get bomRepository() { return new MySqlBomRepository(this.db) }
    get forecastRepository() { return new MySqlForecastRepository(this.db) }
    get matRepository() { return new MySqlMatRepository(this.db) }
    get partassyRepository() { return new MySqlPartassyRepository(this.db) }
    get partRepository() { return new MySqlPartRepository(this.db) }
    get pigmentRepository() { return new MySqlPigmentRepository(this.db) }
    get placeRepository() { return new MySqlPlaceRepository(this.db) }
}