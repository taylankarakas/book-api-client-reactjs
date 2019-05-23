import React, { Component } from 'react';
import { Row, Col } from 'antd';
import DetailCard from '../components/DetailCard';
import { connect } from 'react-redux';
import { getBookDetail } from '../actions/bookActions';
import { getAuthors } from '../actions/authorActions';

class Detail extends Component {
    constructor() {
        super();
        this._findTheAuthorOfBook = this._findTheAuthorOfBook.bind(this);
    }

    componentWillMount = () => {
        const { id } = this.props.match.params;
        this.props.getBookDetail(id);
        this.props.getAuthors();
    };

    _findTheAuthorOfBook() {
        const { author_id } = this.props.books.bookDetail;
        this.props.authors.authorList.map(item => {
            if(item._id === author_id) {
                console.log(item)
                return;
            }
        })
    }

    render() {
        console.log(this.props.authors)
        return(
            <main style={{ marginTop: 40 }}>
                <Row>
                    <Col span={8} offset={4}>
                        <DetailCard 
                            avatar= { this.props.books.bookDetail.image }
                        />
                        { this._findTheAuthorOfBook() }
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
    getBookDetail : getBookDetail,
    getAuthors : getAuthors
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);