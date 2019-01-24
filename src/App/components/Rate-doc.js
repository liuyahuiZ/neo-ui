import ReactDOM from 'react-dom';
import React , { Component }from 'react';
import {Components, Parts, utils} from '../../WAP';
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
    Rate
  } = Components;

class ToasterDoc extends Component {
    constructor(props) {
      super(props);
      this.state = {
          confirmDirty: false
      };
    }

    render() {
        return(
          <section className="doc">
          <Row>
            <Col span={24}>
              <h2>Reta 等级</h2>
            </Col>
            <Col span={24}>
              <h3>基础用法</h3>
            </Col>
            <Col span={24} style={styles.codeBox}>
              <Rate value={0} allCode={5} fontSize={'1.6rem'} normalColor={'#EBEBEB'} activeColor={'#EFCB47'}/>
            </Col>
            <Col span={24} style={styles.codeBox}>
              <Rate value={2} allCode={5} fontSize={'1.6rem'} normalColor={'#EBEBEB'} activeColor={'#EFCB47'}/>
            </Col>
            <Col span={24} style={styles.codeBox}>
              <Rate value={4.7} allCode={5} fontSize={'1.6rem'} normalColor={'#EBEBEB'} activeColor={'#EFCB47'}/>
            </Col>
            <Col span={24} style={styles.codeBox}>
              <Rate value={5} allCode={5} fontSize={'1.6rem'} normalColor={'#EBEBEB'} activeColor={'#EFCB47'}/>
            </Col>
            <Code codes={`import { Components } from '../../WAP';
const { Buttons, Toaster } = Components;
  <Rate value={0} allCode={5} fontSize={'1.6rem'} normalColor={'#EBEBEB'} activeColor={'#EFCB47'}/>
  <Rate value={2} allCode={5} fontSize={'1.6rem'} normalColor={'#EBEBEB'} activeColor={'#EFCB47'}/>
  <Rate value={4.7} allCode={5} fontSize={'1.6rem'} normalColor={'#EBEBEB'} activeColor={'#EFCB47'}/>
  <Rate value={5} allCode={5} fontSize={'1.6rem'} normalColor={'#EBEBEB'} activeColor={'#EFCB47'}/>
`} />
          </Row>
          </section>
        );
    }
}
export default ToasterDoc;
