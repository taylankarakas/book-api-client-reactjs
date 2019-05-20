import React, { Component } from 'react';
import Api from '../api';

export default class Books extends Component {
    constructor() {
        super();
        this.Api = new Api();
        this.state =  {
            bookList: []
        }
    }

    componentDidMount() {
        this.Api.bookList()
            .then((res) => this.setState({
                bookList: res
            }))
            .catch((err) => console.log(err))
    }

    render() {
        return(
            <>
                Books Page
            </>
        )
    }
}