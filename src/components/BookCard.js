import React, { Component } from 'react';
import { Card, Icon, Avatar, Progress, Col, message } from 'antd';
import 'antd/dist/antd.css';
import './BookCard.css';
const { Meta } = Card;

export default class BookCard extends Component {
    constructor() {
        super();
        this.state = {
            like: false,
            likeCounter: 0
        }
        this.likeControl = this.likeControl.bind(this);
    }

    likeControl () {
        let likeCount = this.state.likeCounter;

        if(!this.state.like) {
            this.setState({ like: true, likeCounter: likeCount + 1 });
            return;
        } 
        this.setState({ like: false, likeCounter: likeCount -= 1 });
    }

    render() {
        const success = () => {
            message.success('This book card shared', 1);
          };
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
                        actions={[
                            <Icon
                                type="like"
                                onClick={ this.likeControl }
                                theme={this.state.like ? 'filled' : ''}
                            />,
                            <Icon
                                type="retweet"
                                onClick={ success }
                            />
                        ]}
                    >
                        <Meta
                            avatar={<Avatar src={ this.props.author_avatar ? this.props.author_avatar : 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' } />}
                            title={ this.props.title }
                            description={ this.props.author_name ? this.props.author_name : 'test' }
                        />
                        <div className={'score-progress'}>
                            <span>Point:</span>
                            <Progress type="circle" percent={this.state.likeCounter * 5} width={30} />
                        </div>
                    </Card>
                </Col>
            </>
        )
    }
}