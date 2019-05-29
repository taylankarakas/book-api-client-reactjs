import React, { Component } from 'react';
import { Skeleton, Card, Avatar, Icon, Collapse, Progress } from 'antd';
import './DetailCard.css';

const { Meta } = Card;
const Panel = Collapse.Panel;

export default class DetailCard extends Component {
    constructor() {
        super();
        this.state = {
            loading: true
        }
    }

    componentWillMount() {
        setTimeout(() => {
            this.setState({ loading: false })
        }, 500);
    }

    render() {
        return(
            <Card
                actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
            >
                <Skeleton loading={ this.state.loading } avatar active paragraph={{ rows: 2 }}>
                    <Meta
                        avatar = {
                            <Avatar src={ this.props.avatar } style={{ width: 70, height: 70 }} />
                        }
                        title = { this.props.title }
                        description = { this.props.description }
                    />
                    <Collapse
                        bordered={false}
                        expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}
                    >
                            <Panel class={ 'panel' } header="book summary" key="1">
                                <p>{ this.props.summary || 'test' }</p>
                            </Panel>
                    </Collapse>
                    <div className={'detail-card-progress'}>
                        <Progress type="circle" percent={ this.props.point } width={50} />
                    </div>
                </Skeleton>
            </Card>
        )
    }
}