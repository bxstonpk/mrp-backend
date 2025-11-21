export interface Pigment {
    id: string;
    name: string;
}

export interface PigmentRepository {
    getAllPigment(): Promise<Pigment[] | null>;
    getPigmentById(id: string): Promise<Pigment | null>;

    createPigment(pigment: Pigment): Promise<Boolean | null>;
    updatePigment(pigment: Pigment): Promise<Boolean | null>;
    deletePigment(id: string): Promise<Boolean | null>;
}