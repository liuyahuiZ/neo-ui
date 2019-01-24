import ReactDOM from 'react-dom';
import React , { Component }from 'react';
import {Components, Parts, utils} from '../../WAP';
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
    Input,
    DatePicker,
    Textarea,
    Select,
    Selects,
    Radio,
    Checkbox,
    Container,
    Toaster,
    Modal,
    RichEditor,
    Dynamic,
    Loader,
    Tab,
    Grid,
    Row,
    Col,
    Progress,
    FileUp,
    Icon,
    LabelGroup,
    MyTree,
    Tree,
    Carousel,
    Collapse,
    Panel,
    Switch,
    Step
  } = Components;
  
class StepDoc extends Component {
    constructor(props) {
      super(props);
      this.state = {
          confirmDirty: false,
      };
    }
      
    render() {
      const labelMap = [{ text: '123', icon: 'android-happy', type: 'gray' },
      { text: '123', icon: 'android-happy', type: 'primary' },
      { text: '123', icon: 'ios-checkmark', type: 'success' },
      { text: '123', icon: 'ios-information', type: 'warning' },
      { text: '123', icon: 'ios-alarm-outline', type: 'normal' },
      { text: '123', icon: 'android-settings', type: 'error' }];
        return(
          <section className="doc">
          <Row>
            <Col span={24}>
              <h2>Step 步骤条</h2>
            </Col>
            <Col span={24}>
              <h3>基础用法</h3>
            </Col>
            <Col span={24} style={styles.codeBox}>
              <Step nowStep={1} stepStyle={{ activeColor: '#fd5023', defaultColor: '#333' }} stepOption={[{title: '身份认证'}, 
              {title:'绑卡'},
              {title: '信息确认'},
              {title: '开户'}]} />
            </Col>
            <Col span={24} style={styles.codeBox}>
              <Step nowStep={2} stepStyle={{ activeColor: '#fd5023', defaultColor: '#333' }}  stepOption={[{title: '身份认证'}, 
              {title:'绑卡'},
              {title: '信息确认'},
              {title: '开户'}]} />
            </Col>
            <Col span={24} style={styles.codeBox}>
              <Step nowStep={3} stepStyle={{ activeColor: '#fd5023', defaultColor: '#333' }} stepOption={[{title: '身份认证'}, 
              {title:'绑卡'},
              {title: '信息确认'},
              {title: '开户'}]} />
            </Col>
            <Code codes={`import { Components } from '../../WAP';
const { LabelGroup } = Components;
const labelMap = [{ text: '123', icon: 'android-happy', type: 'gray' },
  { text: '123', icon: 'android-happy', type: 'primary' },
  { text: '123', icon: 'ios-checkmark', type: 'success' },
  { text: '123', icon: 'ios-information', type: 'warning' },
  { text: '123', icon: 'ios-alarm-outline', type: 'normal' },
  { text: '123', icon: 'android-settings', type: 'error' }];
<LabelGroup options={labelMap} />
/>`} />
          </Row>
          </section>
        );
    }
}
export default StepDoc;