import ReactDOM from 'react-dom';
import React , { Component }from 'react';
import {Components, Parts, utils} from '../../WAP';
import styles from '../common/style';
import Code from '../common/Code';
import '../../Style/comment.scss';
import menu from '../../Config/MenuList'
import Highlight from 'react-highlight';

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
    Buttons,
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
    List,
    Item
  } = Components;
  
class ListDoc extends Component {
    constructor(props) {
      super(props);
      this.state = {
          confirmDirty: false,
      };
    }

    render() {
        return(
          <section>
            <Item leftContent={{text:'组件展示'}} style={{padding: '0 0.5rem'}} />
            <List
                Date={menu}
            />
            <Item leftContent={{text:'到底了-_-'}} style={{padding: '0 0.5rem'}} />
        </section>
        );
    }
}
export default ListDoc;
