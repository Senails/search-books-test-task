import { BookInfo, pushToBooksList, reset, setBooksList, setCountResults, setFirstLoading, setLoading } from "./redux-books-slice";
import { dispatch, getState } from "../../redux";
import { getBooks } from "../api/getBooks";
import { getBooksRequestError, getBooksResponse } from "../api/types";
import { getFormStore } from "./form-state";


export async function FirstLoading(){
    const { inputtext, sorting, categories} = getFormStore();

    dispatch(reset());
    dispatch(setLoading(true));

    const json = await getBooks({
        searchText: inputtext,
        sortingMethod: sorting,
        indexStart: "0",
        categories: categories!=="all"? categories : undefined,
    });

    if ((json as getBooksRequestError).error || (json as getBooksResponse).totalItems === 0){
        dispatch(setCountResults(0))
        dispatch(setBooksList([]))
    }else{
        const data = json as getBooksResponse;
        dispatch(setCountResults(data.totalItems))

        const bookList: BookInfo[] = data.items.map((elem)=>{
            return {
                imageURL: elem.volumeInfo.imageLinks?.thumbnail,
                autorsNames: elem.volumeInfo.authors || [""],
                bookName: elem.volumeInfo.title,
                categorie: elem.volumeInfo.categories?.[0]||undefined,
                linkURL: `/book/${elem.id}`,
            }
        })

        dispatch(setBooksList(bookList))
    }

    dispatch(setLoading(false));
    dispatch(setFirstLoading(false));
}

export async function LoadMore(){
    const { inputtext, sorting, categories} = getFormStore();
    const { booksList,  } = getState().books;

    dispatch(setLoading(true));

    const json = await getBooks({
        searchText: inputtext,
        sortingMethod: sorting,
        indexStart: `${booksList.length}`,
        categories: categories!=="all"? categories : undefined,
    });

    if ((json as getBooksRequestError).error || (json as getBooksResponse).totalItems === 0){
        dispatch(setCountResults(0))
        dispatch(setBooksList([]))
    }else{
        const data = json as getBooksResponse;
        dispatch(setCountResults(data.totalItems))

        const bookList: BookInfo[] = data.items.map((elem)=>{
            return {
                imageURL: elem.volumeInfo.imageLinks?.thumbnail||undefined,
                autorsNames: elem.volumeInfo.authors || [""],
                bookName: elem.volumeInfo.title,
                categorie: elem.volumeInfo.categories?.[0]||undefined,
                linkURL: `/book/${elem.id}`,
            }
        })

        dispatch(pushToBooksList(bookList))
    }

    dispatch(setLoading(false));
}