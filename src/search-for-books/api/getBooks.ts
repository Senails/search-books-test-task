type props= {
    indexStart: string,
    searchText: string,
    categories?: "all"|"art"|"biography"|"computers"|"history"|"medical"|"poetry",
    sortingMethod: "relevance"|"newest",
}   

const key = "AIzaSyAw3d_Yd8vVgpnV8qeBS6al7XQ9kdRGvKE";

export async function getBooks(props: props){
    const {indexStart, searchText, categories, sortingMethod } = props
    const categoriesText = categories ? `+subject:${categories}`:"";

    const query = new URLSearchParams();
    query.set("key",key);
    query.set("q",searchText + categoriesText);
    query.set("startIndex", indexStart );
    query.set("orderBy", sortingMethod );
    query.set("maxResults", "30");


    const res = await fetch("https://www.googleapis.com/books/v1/volumes"+`?${query.toString()}`);
    return await res.json();
}

export async function getBook(bookId: string){
    const query = new URLSearchParams();
    query.set("key",key);
    
    const res = await fetch(`https://www.googleapis.com/books/v1/volumes/${bookId}`+`?${query.toString()}`);
    const json = await res.json();

    return json;
}