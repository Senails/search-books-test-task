type props= {
    indexStart: string,
    searchText: string,
    categories?: "all"|"art"|"biography"|"computers"|"history"|"medical"|"poetry",
    sortingMethod: "relevance"|"newest",
}   

const key = "AIzaSyAw3d_Yd8vVgpnV8qeBS6al7XQ9kdRGvKE";


export type requestError = {
    error: any
}

export type getBooksResponse = {
    items: getBookResponse[],
    totalItems: number,
}


export async function getBooks(props: props):Promise<getBooksResponse|requestError>{
    const {indexStart, searchText, categories, sortingMethod } = props
    const categoriesText = categories ? `+subject:${categories}`:"";

    const query = new URLSearchParams();
    query.set("key",key);
    query.set("q",searchText + categoriesText);
    query.set("startIndex", indexStart );
    query.set("orderBy", sortingMethod );
    query.set("maxResults", "30");


    const res = await fetch("https://www.googleapis.com/books/v1/volumes"+`?${query.toString()}`);
    const json: getBooksResponse = await res.json();

    console.log(props, json);

    return json;
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

export async function getBook(bookId: string):Promise<getBookResponse|requestError>{
    const query = new URLSearchParams();
    query.set("key",key);
    
    try{
        const res = await fetch(`https://www.googleapis.com/books/v1/volumes/${bookId}`+`?${query.toString()}`);
        const json: getBookResponse = await res.json();
        return json;
    }catch{
        return {
            error: true,
        }
    }
}