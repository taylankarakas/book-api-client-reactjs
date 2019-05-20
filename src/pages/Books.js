import React, { Component } from 'react';
import { Row, Col } from 'antd';
import Api from '../api';
import BookCard from '../components/BookCard';

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
        console.log(this.state.bookList)
        return(
            <main style={{ marginTop: 40 }}>
                <Row>
                    <Col span={16} offset={4}>
                        <BookCard />
                        <BookCard />
                        <BookCard />
                        <BookCard />
                        <BookCard />
                    </Col>
                </Row>
            </main>
        )
    }
}