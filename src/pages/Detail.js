import React, { Component } from 'react';
import { Skeleton, Row, Col } from 'antd';
import { connect } from 'react-redux';
import { getBookDetail } from '../actions/bookActions';

class Detail extends Component {

    componentWillMount = () => {
        const { id } = this.props.match.params;
        this.props.getBookDetail(id);
    };
    
    render() {
        console.log(this.props.books)
        return(
            <main style={{ marginTop: 40 }}>
                <Row>
                    <Col span={16} offset={4}>
                        <Skeleton avatar paragraph={{ rows: 4 }} />
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
    getBookDetail : getBookDetail
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);