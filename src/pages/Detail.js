import React, { Component } from 'react';
import { Row, Col } from 'antd';
import DetailCard from '../components/DetailCard';
import { connect } from 'react-redux';
import { getBookDetail, getBooks } from '../actions/bookActions';
import { getAuthors } from '../actions/authorActions';

class Detail extends Component {
    componentWillMount = () => {
        this.props.getBooks();
    };

    render() {
        const { id } = this.props.match.params;
        const { list } = this.props.books;

        const book = list.map(item => {
            if(item._id === id) {
                return (
                    <DetailCard
                        key = { item._id}
                        avatar = { item.author.avatar }
                        title = { item.title }
                        description = { `${ item.author.name }  ${ item.author.surname }` }
                        year = { item.year }
                        loading = { this.props.books.status === 'loading' ? true : false }
                    />
                )
            }
        })
        return(
            <main style={{ marginTop: 40 }}>
                <Row>
                    <Col span={8} offset={4}>
                        { book }
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
    getBooks : getBooks,
    getBookDetail : getBookDetail,
    getAuthors : getAuthors
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);