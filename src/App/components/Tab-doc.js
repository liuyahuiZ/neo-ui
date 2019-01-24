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
    Switch
  } = Components;

class TabDoc extends Component {
    constructor(props) {
      super(props);
      this.state = {
          confirmDirty: false,
          resourceKey: '2'
      };
    }

    tabChange(v){
      const self = this;
      self.setState({
        'resourceKey': v
      });
    }
    render() {
      const tabOptions = [{ tabName: 'first', keyword: '1', content: 123 },
      { tabName: 'second', keyword: '2', content: (<div>23<Button text="确定" type={['primary']} style={marginStyle} /></div>) },
      { tabName: 'thired', keyword: '3', content: 3 }];
        return(
          <section className="doc">
          <Row>
            <Col span={24}>
              <h2>Tab 标签</h2>
              <div>分隔内容上有关联但属于不同类别的数据集合</div>
            </Col>
            <Col span={24}>
              <h3>基础用法</h3>
            </Col>
            <Col span={24} style={styles.codeBox}>
            <Tab options={tabOptions} active={this.state.resourceKey} onChange={(v)=>{
                this.tabChange(v);
              }} />
            </Col>
            <Code codes={`import { Components } from '../../WAP';
const { Tab } = Components;
const tabOptions = [{ tabName: 'first', content: 123, isActive: true },
  { tabName: 'second', content: (<div>23<Button text="确定" type={['primary']} style={marginStyle} /></div>), isActive: false },
  { tabName: 'thired', content: 3, isActive: false }];
<Tab options={tabOptions} />`} />
            <Col span={24}>
              <h3>切换按钮左侧</h3>
            </Col>
            <Col span={24} style={styles.codeBox}>
            <Tab options={tabOptions} modal={'MENULEFT'} active={this.state.resourceKey} onChange={(v)=>{
                this.tabChange(v);
              }} />
            </Col>
            <Code codes={`import { Components } from '../../WAP';
const { Tab } = Components;
const tabOptions = [{ tabName: 'first', content: 123, isActive: true },
  { tabName: 'second', content: (<div>23<Button text="确定" type={['primary']} style={marginStyle} /></div>), isActive: false },
  { tabName: 'thired', content: 3, isActive: false }];
<Tab options={tabOptions} modal={'MENULEFT'} />`} />
          </Row>
          </section>
        );
    }
}
export default TabDoc;
