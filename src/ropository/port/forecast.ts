export interface ForecastHeader {
    id: number;
    placeId: number;
    documentNo: string;
    version: number;
    forecastMonth: Date;
}

export interface ForecastDetail {
    id: number
    headerId: number
    forMonth: string
    qty: number
    partId: string
}

export interface ForecastAggregate {
    header: ForecastHeader;
    details: ForecastDetail[];
}

export interface ForecastRepository {
    getAllForecast(): Promise<ForecastAggregate[] | null>;
    getForecastById(id: number): Promise<ForecastAggregate | null>;

    createForecast(dto: ForecastAggregate): Promise<ForecastAggregate | null>;
    updateForecast(dto: ForecastAggregate): Promise<ForecastAggregate | null>;
    deleteForecast(id: number): Promise<Boolean>;
}