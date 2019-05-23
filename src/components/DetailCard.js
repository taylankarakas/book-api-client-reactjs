import React, { Component } from 'react';
import { Skeleton, Card, Avatar, Icon, Collapse } from 'antd';

const { Meta } = Card;
const Panel = Collapse.Panel;

export default class DetailCard extends Component {

    state = {
        loading: false,
      };

    render() {

        const customPanelStyle = {
            background: '#f7f7f7',
            borderRadius: 4,
            marginBottom: 24,
            border: 0,
            marginTop: 30,
            overflow: 'hidden',
          };

        const { loading } = this.state;

        return(
            <>
                <Card
                    actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
                    >
                    <Skeleton loading={loading} avatar active>
                        <Meta
                            avatar={
                                <Avatar src={ this.props.avatar } style={{ width: 70, height: 70 }} />
                            }
                            title="Card title"
                            description="This is the description"
                        />
                        <Collapse
                            bordered={false}
                            expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}
                        >
                                <Panel header="This is panel header 1" key="1" style={customPanelStyle}>
                                    <p>ada</p>
                                </Panel>
                        </Collapse>
                    </Skeleton>
                </Card>
            </>
        )
    }
}