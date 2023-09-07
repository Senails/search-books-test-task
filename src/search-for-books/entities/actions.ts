import { BookInfo, reset, setBooksList, setCountResults, setFirstLoading, setLoading } from ".";
import { dispatch, getState } from "../../redux";
import { getBook, getBooks } from "../api/getBooks";
import { getFormStore } from "../widgets/search-form/formState";


export async function onClickSubmit(){
    const { inputtext, sorting, categories} = getFormStore();
    const { booksList } = getState().books;

    dispatch(reset());
    dispatch(setFirstLoading(true));
    dispatch(setLoading(true));

    let json; 

    try{
        json = await getBooks({
            searchText: inputtext,
            sortingMethod: sorting,
            indexStart: `${booksList.length}`,
            categories: categories!=="all"? categories : undefined,
        });
    }catch{
        json={error: true};
    }

    if (json.error){
        dispatch(setCountResults(0))
        dispatch(setBooksList([]))
    }else{
        console.log(json);
        dispatch(setCountResults(json.totalItems))
        const bookList: BookInfo[] = json.items.map((elem: any)=>{

            // console.log(elem);

            // console.log(elem.volumeInfo.imageLinks?.thumbnail);
            // // console.log(elem.volumeInfo.authors);
            // console.log(elem.volumeInfo.title);
            // // console.log(elem.volumeInfo.categories[0]);
            // console.log(`/book/${elem.id}`);


            return {
                imageURL: elem.volumeInfo.imageLinks?.thumbnail,
                autorName: "elem.volumeInfo.authors[0]",
                bookName: elem.volumeInfo.title,
                categorie: "elem.volumeInfo.categories[0]",
                linkURL: `/book/${elem.id}`,
            }
        })

        dispatch(setBooksList(bookList))
    }

    dispatch(setLoading(false));
    dispatch(setFirstLoading(false));

    console.log(json.items[0].volumeInfo);
}

export async function LoadMore(){

}