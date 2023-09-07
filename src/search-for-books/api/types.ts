export type getBooksProps= {
    indexStart: string,
    searchText: string,
    categories?: "all"|"art"|"biography"|"computers"|"history"|"medical"|"poetry",
    sortingMethod: "relevance"|"newest",
} 

export type getBooksRequestError = {
    error: any
}

export type getBooksResponse = {
    items: getBookResponse[],
    totalItems: number,
}

export type getBookResponse = {
    id:string,
    volumeInfo: {
        authors?: string[],
        description: string,
        title: string,
        imageLinks:{
            thumbnail:string,
        },
        categories?: string[]
    }
}