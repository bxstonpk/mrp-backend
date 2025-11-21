export interface Mat {
    id: string;
    matName: string;
    supplier: string;
    boi: boolean;
}

export interface MatRepository {
    getAllMat(): Promise<Mat[] | null>;
    getMatById(id: string): Promise<Mat | null>;
    
    createMat(mat: Mat): Promise<Boolean | null>;
    updateMat(mat: Mat): Promise<Boolean | null>;
    deleteMat(id: string): Promise<Boolean | null>;
}