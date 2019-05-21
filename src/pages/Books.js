import React, { Component } from 'react';
import { Row, Col } from 'antd';
import BookCard from '../components/BookCard';
import Spin from '../components/Spin';
import { connect } from 'react-redux';
import { getBooks } from '../actions/bookActions';

class Books extends Component {

    componentDidMount() {
        this.props.getbook()
    }

    render() {
        const { list } = this.props.books;
        const books = list.map(item => {
            return (
                <BookCard
                    key={item._id}
                    author_name= {'taylan'}
                />
            )
        } )
        return(
            <main style={{ marginTop: 40 }}>
                <Row>
                    <Col span={16} offset={4}>
                        { this.props.books.status === 'loaded' ? books : <Spin /> }
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