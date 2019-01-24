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
    TagRadio,
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
  
const radioclick = function (value) {
  console.log(value);
};
class RadioDoc extends Component {
    constructor(props) {
      super(props);
      this.state = {
          confirmDirty: false,
      };
    }
      
    render() {
        const checkboxOptions = [{ value: 1, text: 'JAVA', checked: true }, { value: 2, text: 'PHP' }, { value: 3, text: 'C++', disabled: true }];
        return(
            <section className="doc">
            <Row>
            <Col span={24}>
              <h2>Radio 单选框</h2>
              <div>在一组备选项中进行单选</div>
            </Col>
            <Col span={24}>
              <h3>基础用法</h3>
            </Col>
            <Col span={24} style={styles.codeBox}>
            <Radio
                options={[{ value: 1, text: 'js' }, { value: 2, text: 'Jquery', checked: true }, { value: 3, text: 'Angular', disabled: true },{ value: 4, text: 'react' } ]}
                onChange={click}
            />
            </Col>
            <Col span={24}>
              <h2>Tag Radio</h2>
            </Col>
            <Col span={24} style={styles.codeBox}>
              <TagRadio options={[{ value: 1, text: 'js' }, { value: 2, text: 'Jquery', checked: true }, { value: 3, text: 'Angular disabled', disabled: true },{ value: 4, text: 'react' } ]}
                checkStyle={{"backgroundColor":"#999","color": '#fff'}} normalStyle={{"backgroundColor":"#f5f5f5","color": '#1a1a1a'}}
                onChange={click} />
            </Col>
            <Code codes={`import { Components } from '../../WAP';
const { Radio } = Components;
<Radio
  options={[{ value: 1, text: 'haha' }, { value: 2, text: 'haha2', checked: true }]}
  onChange={click}
/>`} />
            <Col span={24}>
              <h2>Checkbox 多选框</h2>
              <div>一组备选项中进行多选</div>
            </Col>
            <Col span={24}>
              <h3>基础用法</h3>
            </Col>
            <Col span={24} style={styles.codeBox}>
              <Checkbox
                ref={(checkbox) => { dom.checkbox = checkbox; }}
                options={checkboxOptions}
                onChange={click}
              />
            </Col>
            <Code codes={`import { Components } from '../../WAP';
const { Checkbox } = Components;
<Checkbox
  ref={(checkbox) => { dom.checkbox = checkbox; }}
  options={checkboxOptions}
  onChange={click}
/>`} />     
            <Col span={24}>
              <h3>全选用法</h3>
            </Col>
            <Col style={styles.codeBox}>
              <Row>
                <Col >
                  <Checkbox
                    options={[{ value: '1', text: '全选' }]}
                    onChange={(data) => {
                      console.log(data);
                      if (data[1].checkStatus === 'checked') {
                        this.$$checkbox2.checkAll(true);
                      } else {
                        this.$$checkbox2.checkAll(false);
                      }
                    }}
                    ref={(r) => { this.$$checkbox1 = r; }}
                  />
                </Col>
                <Col>
                  <Checkbox
                    options={[{ value: '1', text: 'PS', checkStatus: 'checked' },
                    { value: '2', text: 'JS' },
                    { value: '3', text: 'CSS3', disabled: true },
                  { value: '4', text: 'HTML5' }]}
                    onChange={radioclick}
                    ref={(r) => { this.$$checkbox2 = r; }}
                  />
                </Col>
                <Code codes={`import { Components } from '../../WAP';
const { Checkbox } = Components;
<Checkbox
options={[{ value: '1', text: '全选' }]}
onChange={(data) => {
  console.log(data);
  if (data[1].checkStatus === 'checked') {
    this.$$checkbox2.checkAll(true);
  } else {
    this.$$checkbox2.checkAll(false);
  }
}}
ref={(r) => { this.$$checkbox1 = r; }}
/>
<Checkbox
options={[{ value: '1', text: 'haha', checkStatus: 'checked' },
{ value: '2', text: 'haha2' },
{ value: '3', text: 'haha3', disabled: true },
{ value: '4', text: 'haha4' }]}
onChange={radioclick}
ref={(r) => { this.$$checkbox2 = r; }}
/>`} />
              </Row>
            </Col>
          </Row>
          </section>
        );
    }
}
export default RadioDoc;