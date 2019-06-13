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
  
class DatepickerDoc extends Component {
    constructor(props) {
      super(props);
      this.state = {
          confirmDirty: false,
      };
    }
      
    render() {
        return(
          <section className="doc">
          <Row>
          <Col span={24}>
            <h2>FileUp 文件上传</h2>
          </Col>
          <Col span={24}>
            <h3>基础用法</h3>
          </Col>
          <Col span={24} style={styles.codeBox}>
            <FileUp />
          </Col>
          <Code codes={`import { Components } from '../../neo';
const { FileUp } = Components;
<FileUp />`} />
          </Row>
          </section>
        );
    }
}
export default DatepickerDoc;