export interface Bom {
    id: string;
    partBomId: string;
    matId: string;
    pigmentId?: string;
    pigmentRatio?: number;
    cavity: number;
    virgin: number;
    weight: number;
    runner: number;
}

export interface BomRepository {
    getAllBom(): Promise<Bom[] | null>
    getBomByPartBomId(partBomId: string): Promise<Bom | null>
    getBomByMatId(matId: string): Promise<Bom | null>

    updateBom(bom: Bom): Promise<Bom | null>

    createBom(bom: Bom): Promise<Bom | null>

    deleteBom(partBomId: string): Promise<Bom | null>
}