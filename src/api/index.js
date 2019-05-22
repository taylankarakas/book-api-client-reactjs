class Api {
    constructor(){
        this.api = 'http://localhost:3001/api/';
    }

    callApi = async(endpoint) => {
        return(
            await fetch(endpoint)
                .then((response) => response.json())
                .catch((err => { return { error: err } }))
        )
    }

    bookList = (endpoint = 'books') => {
        return this.callApi(this.api + endpoint)
    }

    bookDetail = (book_id, endpoint = 'books') => {
        return this.callApi(this.api + endpoint + '/' + book_id)
    }
}

export default Api;