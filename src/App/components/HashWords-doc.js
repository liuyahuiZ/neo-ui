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
    HashWords,
    RandomNumber,
    Input
  } = Components;

class ToasterDoc extends Component {
    constructor(props) {
      super(props);
      this.state = {
          confirmDirty: false,
          number: 8888
      };
    }

    render() {
        const {number} = this.state;
        return(
          <section className="doc">
          <Row>
            <Col span={24}>
              <h2>HashWords 随机大小字体颜色</h2>
            </Col>
            <Col span={24}>
              <h3>基础用法</h3>
            </Col>
            <Col span={24} style={styles.codeBox}>
              <HashWords words={['鸡蛋','水果','鱼香肉丝','再来再来一瓶']} style={{height: '10rem', fontSize: '4rem'}}/>
            </Col>
            <Col style={styles.codeBox}>
              <RandomNumber value={number} />
            </Col>

            <Code codes={`import { Components } from '../../neo';
const { Buttons, Toaster } = Components;
<HashWords words={['鸡蛋','水果','鱼香肉丝','再来再来一瓶']} style={{height: '10rem', fontSize: '4rem'}}/>`} />
          </Row>
          </section>
        );
    }
}
export default ToasterDoc;
