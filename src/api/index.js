class Api {
    constructor(){
        this.api = 'http://localhost:3001/api/';
        this.LoginApi = 'http://localhost:3001/'
    }

    callApi = async(endpoint) => {
        return(
            await fetch(endpoint)
                .then((response) => response.json())
                .catch((err => { return { error: err } }))
        )
    }

    postApi = async(endpoint, datas) => {
        return(
            await fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(datas)
            })
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

    authorList = (endpoint= 'authors') => {
        return this.callApi(this.api + endpoint)
    }

    login = (datas, endpoint= 'authentication') => {
        return this.postApi(this.LoginApi + endpoint, datas)
    }
}

export default Api;