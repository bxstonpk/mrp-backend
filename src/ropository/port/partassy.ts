export interface Partassy {
    id: number
    parentId: string
    childId: string
}

export interface PartassyRepository {
    getAllPartassy(): Promise<Partassy[] | null>
    getPartassyById(id: number): Promise<Partassy | null>

    createPartassy(partassy: Partassy): Promise<Boolean | null>
    updatePartassy(partassy: Partassy): Promise<Boolean | null>
    deletePartassy(id: number): Promise<Boolean | null>
}