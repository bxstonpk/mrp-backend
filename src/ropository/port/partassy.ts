export interface Partassy {
    id: number
    parentId: string
    childId: string
}

export interface PartassyRepository {
    getAllPartassy(): Promise<Partassy[] | null>
    getPartassyById(id: number): Promise<Partassy | null>

    createPartassy(partassy: Partassy): Promise<Partassy | null>
    updatePartassy(partassy: Partassy): Promise<Partassy | null>
    deletePartassy(id: number): Promise<Partassy | null>
}