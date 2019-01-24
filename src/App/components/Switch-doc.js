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
    Item
  } = Components;
  
class SwitchDoc extends Component {
    constructor(props) {
      super(props);
      this.state = {
          confirmDirty: false,
      };
    }
      
    render() {
        const switchChange = (date) => {
          console.log(date);
        };
        return(
          <section className="doc">
              <Row>
              <Col span={24}>
                <h2>Switch 开关</h2>
                <div>表示两种相互对立的状态间的切换，多用于触发「开/关」</div>
              </Col>
              <Col span={24}>
                <h3>基础用法</h3>
              </Col>
              <Col span={24} style={styles.codeBox}>
                <Row>
                <Col>
                  <Item
                  leftContent={{text:'基础组件', style: {flex: '7'}}} 
                  rightContent={{text: (<Switch checkedText={0} unCheckText={1} value={true} />), style: {flex: '1'}}} />
                </Col>
                <Col>
                  <Item
                  leftContent={{text:'基础组件', style: {flex: '7'}}} 
                  rightContent={{text: (<Switch checkedText={'-'} unCheckText={'o'} onchange={switchChange} />), style: {flex: '1'}}} />
                </Col>
                <Col>
                  <Item
                  leftContent={{text:'基础组件', style: {flex: '7'}}} 
                  rightContent={{text: (<Switch checkedText={0} unCheckText={1} bgColor={'#4BD963'} value={true} />), style: {flex: '1'}}} />
                </Col>
                <Col>
                  <Item
                  leftContent={{text:'基础组件', style: {flex: '7'}}} 
                  rightContent={{text: (<Switch checkedText={0} unCheckText={1} bgColor={'#FF6157'} value={true} />), style: {flex: '1'}}} />
                </Col>
                <Col>
                  <Item
                  leftContent={{text:'基础组件', style: {flex: '7'}}} 
                  rightContent={{text: (<Switch checkedText={0} unCheckText={1} bgColor={'#FFD479'} value={true} />), style: {flex: '1'}}} />
                </Col>
                </Row>
              </Col>
          </Row>
        </section>
        );
    }
}
export default SwitchDoc;