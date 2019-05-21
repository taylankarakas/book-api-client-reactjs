import React, { Component } from 'react';
import { Row, Col } from 'antd';
import Api from '../api';
import BookCard from '../components/BookCard';
import { connect } from 'react-redux';
import { getBooks } from '../actions/bookActions';

class Books extends Component {
    constructor() {
        super();
        this.Api = new Api();
        this.state =  {
            bookList: []
        }
    }

    componentDidMount() {
        this.props.getbook()
    }

    render() {
        console.log(this.props.books)
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

const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = {
    getbook: getBooks
}

export default connect(mapStateToProps, mapDispatchToProps)(Books);