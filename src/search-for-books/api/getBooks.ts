import { getBookResponse, getBooksProps, getBooksRequestError, getBooksResponse } from './types';

  
const key = "AIzaSyAw3d_Yd8vVgpnV8qeBS6al7XQ9kdRGvKE";


export async function getBooks(props: getBooksProps):Promise<getBooksResponse|getBooksRequestError>{
    const {indexStart, searchText, categories, sortingMethod } = props
    const categoriesText = categories ? `+subject:${categories}`:"";

    const query = new URLSearchParams();
    query.set("key",key);
    query.set("q",searchText + categoriesText);
    query.set("startIndex", indexStart );
    query.set("orderBy", sortingMethod );
    query.set("maxResults", "30");



    try{
        const res = await fetch(`https://www.googleapis.com/books/v1/volumes?${query.toString()}`);
        const json: getBooksResponse = await res.json();

        return json;
    }catch{
        return {error: true}
    }
}
export async function getBook(bookId: string):Promise<getBookResponse|getBooksRequestError>{
    const query = new URLSearchParams();
    query.set("key",key);
    
    try{
        const res = await fetch(`https://www.googleapis.com/books/v1/volumes/${bookId}?${query.toString()}`);
        const json: getBookResponse = await res.json();
        return json;
    }catch{
        return {
            error: true,
        }
    }
}