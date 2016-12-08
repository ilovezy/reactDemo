import React from 'react';
import Header from '../../components/Header'
import { Row, Col } from 'antd'
import { Button } from 'antd'
// import 'antd/dist/antd.css';
import './TestAntDesign.scss'
import { BackTop, Steps, Tabs, message } from 'antd'

const Step = Steps.Step;
const TabPane = Tabs.TabPane;
const info = function () {
  message.info('this is a simele message')
}
message.config({
  top: 200
})

export default class TestAntDesign extends React.Component {
  render(){
    return (
      <div>
        <Header title="about"/>

        <div className="antd-container">
          <Row gutter={16}>
            <Col span={12}>
              <h2>buttons</h2>

              <Button type="primary">click</Button>
            </Col>
            <Col span={12}>
              <h2>buttons</h2>

              <Button type="primary">click</Button>
            </Col>
            <Col span={12}>
              <h2>buttons</h2>

              <Button type="primary">click</Button>
            </Col>
            <Col span={12}>
              <h2>buttons</h2>

              <Button type="primary">click</Button>
            </Col>
          </Row>

          <br/>

          <Steps current={1}>
            <Step title="finished" description='this is a'></Step>
            <Step title="ggfg" description='this is a description'></Step>
            <Step title="111223" description='this is a description'></Step>
          </Steps>

          <br/>

          <Tabs defaultActiveKey="1">
            <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
            <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
            <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
          </Tabs>

          <br/>

          <Button onClick={info}>click</Button>

          <BackTop/>
        </div>
      </div>
    )
  }
}