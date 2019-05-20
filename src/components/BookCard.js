import React, { Component } from 'react';
import { Card, Icon, Avatar, Progress, Col } from 'antd';
import 'antd/dist/antd.css';
const { Meta } = Card;

export default class BookCard extends Component {
    render() {
        return (
            <>
                <Col span={6}>
                    <Card
                        style={{ marginRight: 10, marginBottom: 10 }}
                        cover={
                            <img
                                alt=""
                                src={ this.props.image ? this.props.image : 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png' }
                            />
                        }
                        actions={[<Icon type="like" />, <Icon type="star" />]}
                    >
                        <Meta
                            avatar={<Avatar src={ this.props.author_avatar ? this.props.author_avatar : 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' } />}
                            title={ this.props.title }
                            description={ this.props.author_name ? this.props.author_name : 'test' }
                        />
                        <Progress type="circle" percent={30} width={30} />
                    </Card>
                </Col>
            </>
        )
    }
}