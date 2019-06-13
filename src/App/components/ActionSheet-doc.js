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
    ActionSheet,
    PopContainer
  } = Components;

class ToasterDoc extends Component {
    constructor(props) {
      super(props);
      this.state = {
          confirmDirty: false,
          meatType: {'text': '全部肉类', 'value': '0'},
      };
    }
    doSheet(){
      const {meatType } = this.state;
      ActionSheet.formConfirm({
      content: 'this is a warning',
      defaultValue: meatType,
      options: [{'text': '全部肉类', 'value': '0'},
      {'text': '海鲜', 'value': '1'},{'text': '鸡肉', 'value': '2'},{'text': '牛肉', 'value': '3'},{'text': '羊肉', 'value': '4'},
      {'text': '鱼肉', 'value': '5'},{'text': '猪肉', 'value': '6'},{'text': '其它肉类', 'value': '7'},],
      type: 'bottom',
      showIcon: false,
      showCancleBtn: true,
      cancleCallback: (val) => {

      },
      successCallback: (val) => {
        this.setState({
          meatType: val,
        });
      }
      });
    }
    doSheet1(){
      const {meatType } = this.state;
      ActionSheet.formConfirm({
      content: 'this is a warning',
      defaultValue: meatType,
      options: [{'text': '全部肉类', 'value': '0'},
      {'text': '海鲜', 'value': '1'},{'text': '鸡肉', 'value': '2'}],
      type: 'top',
      showIcon: false,
      showCancleBtn: false,
      containerStyle: { top: '3rem'},
      cancleCallback: (val) => {

      },
      successCallback: (val) => {
        this.setState({
          meatType: val,
        });
      }
      });
    }
    doSheet3(){
      const {meatType } = this.state;
      PopContainer.confirm({
      content: (<div>
        <Row>
          <Col span={12} ><Buttons
            text="关闭"
            type={"link"}
            size={"small"}
            onClick={() => { PopContainer.closeAll() }}
          /></Col>
          <Col span={12}></Col>
          <Col >
            12312312
          </Col>
        </Row>
        </div>),
      type: 'bottom',
      containerStyle: { top: '3rem'},
      });
    }
    render() {
        return(
          <section className="doc">
          <Row>
            <Col span={24}>
              <h2>ActionSheet 弹出选择</h2>
              <div>悬浮出现在页面上方，显示全局的通知提醒消息。</div>
            </Col>
            <Col span={24}>
              <h3>基础用法</h3>
            </Col>
            <Col span={24} style={styles.codeBox}>
              <Buttons
                text="do ActionSheet 下"
                type={"success"}
                style={marginStyle}
                onClick={() => { this.doSheet() }}
              />

              <Buttons
                text="do ActionSheet 上"
                type={"success"}
                style={marginStyle}
                onClick={() => { this.doSheet1() }}
              />
              <Buttons
                text="do Pop"
                type={"success"}
                style={marginStyle}
                onClick={() => { this.doSheet3() }}
              />

            </Col>
            <Code codes={`import { Components } from '../../neo';
const { Buttons, Toaster } = Components;
<Buttons
  text="success"
  type={"success"}
  style={marginStyle}
  onClick={() => { Toaster.toaster({ type: 'success', content: 'this is a success', time: 2000 }); }}
/>
`} />
          </Row>
          </section>
        );
    }
}
export default ToasterDoc;
