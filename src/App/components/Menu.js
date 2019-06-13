import ReactDOM from 'react-dom';
import React , { Component }from 'react';
import {Components, Parts, utils} from '../../neo';
import styles from '../common/style';
import Code from '../common/Code';
import '../../Style/comment.scss';
import menu from '../../Config/Menu'
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
    Switch
  } = Components;
  
class MenusDoc extends Component {
    constructor(props) {
      super(props);
      this.state = {
          confirmDirty: false,
      };
    }

    render() {
        return(
          <section className="doc">
            <Tree
                Date={menu}
                display={'show'}
                activeNode={'Buttons'}
            />
        </section>
        );
    }
}
export default MenusDoc;
