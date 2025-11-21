export interface Part {
    id: string;
    partName: string;
}

export interface PartRepository {
    getAllPart(): Promise<Part[] | null>;
    getPartById(id: string): Promise<Part[] | null>;
    
    createPart(part: Part): Promise<Boolean | null>;
    updatePart(part: Part): Promise<Boolean | null>;
    deletePart(id: string): Promise<Boolean | null>;
}