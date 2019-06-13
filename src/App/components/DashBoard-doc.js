import ReactDOM from 'react-dom';
import React , { Component }from 'react';
import {Components, Parts, utils} from '../../neo';
import styles from '../common/style';
import Code from '../common/Code';
import '../../Style/comment.scss'

const dom = {};
const marginStyle = {
  margin: '10px 0'
};
const click = function (event) {
  console.log('onclick');
  console.log(event);
  console.log(dom);
  // marginStyle.margin = '40px';
};
const {
    Button,
    Buttons,
    Row,
    Col,
    Icon,
    DashBoard
  } = Components;

class ToasterDoc extends Component {
    constructor(props) {
        super(props);
        this.state={
          value: 90
        }
    }
    randomValue(){
      this.setState({
        value: Number((Math.random()*100).toFixed(2))
      })
    }

    render() {
      const {value} = this.state
        return(
          <section className="doc">
          <Row>
            <Col span={24}>
              <h2>DashBoard 仪表盘</h2>
            </Col>
            <Col span={24}>
              <h3>基础用法</h3>
            </Col>
            <Col span={24} style={styles.codeBox}>
              <DashBoard score={value} showOutterScore />
              <Buttons
              text="primary"
              type={"primary"}
              style={marginStyle}
              onClick={() => { this.randomValue() }} />
            </Col>

            <Code codes={`import { Components } from '../../neo';
const { Buttons, DashBoard } = Components;
<DashBoard score={value} showOutterScore />
<Buttons
text="primary"
type={"primary"}
style={marginStyle}
onClick={() => { this.randomValue() }} />`} />
          </Row>
          </section>
        );
    }
}
export default ToasterDoc;
