export interface Bom {
    stiId: string;
    partBomId: string;
    matId: string;
    pigmentId?: string | null;
    pigmentRatio?: number | null;
    cavity: number;
    virgin: number;
    weight: number;
    runner: number;
}

export interface BomRepository {
    getAllBom(): Promise<Bom[] | null>
    getBomByPartBomId(partBomId: string): Promise<Bom[] | null>
    getBomByMatId(matId: string): Promise<Bom[] | null>

    updateBom(bom: Bom): Promise<Boolean | null>

    createBom(bom: Bom): Promise<Boolean | null>

    deleteBom(partBomId: string): Promise<Boolean | null>
}