import React, { Component } from 'react';
import { Card, Icon, Avatar, Progress, Col } from 'antd';
import 'antd/dist/antd.css';
import './BookCard.css';
const { Meta } = Card;

export default class BookCard extends Component {
    render() {
        return (
            <>
                <Col span={6}>
                    <Card
                        className={'bookcard'}
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
                        <div className={'score-progress'}>
                            <span>Imdb Score: </span>
                            <Progress type="circle" percent={30} width={30} />
                        </div>
                    </Card>
                </Col>
            </>
        )
    }
}