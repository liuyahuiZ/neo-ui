import ReactDOM from 'react-dom';
import React , { Component }from 'react';
import {Components, Parts, utils} from '../../neo';
import styles from '../common/style';
import Code from '../common/Code';
import '../../Style/comment.scss'

const dom = {};
const marginStyle = {
  margin: '10px'
};
const click = function (event) {
  console.log('onclick');
  console.log(event);
  console.log(dom);
  // marginStyle.margin = '40px';
};
const {
    Button,
    Row,
    Col,
    Progress,
    ProgressDrag,
    ProgressCircle
  } = Components;

class ProgressDoc extends Component {
    constructor(props) {
      super(props);
      this.state = {
          confirmDirty: false,
      };
    }
      
    render() {
        return(
          <section className="doc">
          <Row >
            <Col span={24}>
              <h2>Progress 进度条</h2>
              <div>用于展示操作进度，告知用户当前状态和预期</div>
            </Col>
            <Col span={24}>
              <h3>基础用法</h3>
            </Col>
            <Col span={24} style={styles.codeBox}>
              <Progress percent={30} barColor={'#F96C43'} radius={10} />
              <Progress percent={57} barColor={'#76BFDC'} radius={10} />
              <Progress percent={99} barColor={'#FF6157'} radius={10} />
            </Col>
            <Code codes={`import { Components } from '../../neo';
const { Progress } = Components;
<Progress percent={30} barColor={'#F96C43'} radius={10} />
<Progress percent={57} barColor={'#76BFDC'} radius={10} />
<Progress percent={99} barColor={'#FF6157'} radius={10} />`} />
            <Col span={24}>
              <h3>长度根据外层容器长度变化</h3>
            </Col>
            <Col span={12} style={styles.codeBox}>
              <Progress percent={40} barColor={'#79D46D'} radius={10} />
              <Progress percent={80} />
            </Col>
            <Code codes={`import { Components } from '../../neo';
const { Progress } = Components;
<Progress percent={40} barColor={'#79D46D'} radius={10} />
<Progress percent={80} />`} />
          <Col span={24}>
              <h3>可拖拽的progress</h3>
          </Col>
          <Col span={22}>
            <ProgressDrag percent={100} 
            barColor={'linear-gradient(90deg, #93C770 40%, #3FEFEC 60%)'} bgColor={'#333'}
            style={{height: '7px'}} barRoundStyle={{}}
            radius={20} onChange={(v)=>{ console.log(v)}} barWidthDisable />
            <ProgressDrag percent={50} barColor={'linear-gradient(90deg, #93C770 40%, #3FEFEC 60%)'} bgColor={'#333'} style={{height: '7px'}} radius={20} barWidthDisable />
            <ProgressDrag percent={10} barColor={'linear-gradient(90deg, #93C770 40%, #3FEFEC 60%)'} bgColor={'#333'} style={{height: '7px'}} radius={20} />
            <ProgressDrag percent={80} barColor={'#FF6157'} bgColor={'#ccc'} style={{height: '7px'}} radius={20} />
          </Col>
          
          <Col span={24}>
              <h3>环形progress</h3>
          </Col>
          <Col span={8} style={{padding: '1rem'}}>
              <ProgressCircle score={60} show={true} innerText={`${60}%`} />
          </Col>
          <Col span={8} style={{padding: '1rem'}}>
              <ProgressCircle score={90} show={true} innerText={`${90}%`} />
          </Col>
          <Col span={8} style={{padding: '1rem'}}>
              <ProgressCircle score={100} show={true} innerText={`${80}%`} />
          </Col>
          </Row>
          </section>
        );
    }
}
export default ProgressDoc;