export interface Place {
    id: number;
    placeName: string;
}

export interface PlaceRepository {
    getAllPlace(): Promise<Place[] | null>;
    getPlaceById(id: number): Promise<Place | null>;
    createPlace(place: Place): Promise<Place | null>;
    updatePlace(place: Place): Promise<Place | null>;
    deletePlace(id: number): Promise<Place | null>;
}