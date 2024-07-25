export interface GenericDataModel<T> {
    data: T
}
export interface PagedResponseModel<T> extends GenericDataModel<T[]> {
    page: number,
    per_page: number,
    total: number,
    total_pages: number,
    // data: T[],
}
