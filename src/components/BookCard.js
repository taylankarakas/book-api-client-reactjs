import React, { Component } from 'react';
import { Card, Icon, Avatar, Progress, Col, message, Button } from 'antd';
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
                                src={ this.props.image }
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
                            avatar={<Avatar src={ this.props.author_avatar } />}
                            title={ '' }
                            description={ this.props.book_title ? this.props.book_title : 'test' }
                        />
                        <div className={'score-progress'}>
                            <span>Point:</span>
                            <Progress type="circle" percent={this.props.point} width={30} />
                        </div>
                        <div className={'author-info'} onClick={ () => console.log(this.props.id) } >
                            <span>Author: { this.props.author_name } { this.props.author_surname }</span>
                        </div>
                        <Button type="link" className={'book-detail-direction-btn'} >
                            Author Detail
                            <Icon type="right" />
                        </Button>
                    </Card>
                </Col>
            </>
        )
    }
}