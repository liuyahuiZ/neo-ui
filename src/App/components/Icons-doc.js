import ReactDOM from 'react-dom';
import React , { Component }from 'react';
import {Components, Parts, utils} from '../../WAP';
import styles from '../common/style';
import icons from '../common/icon';
import '../../Style/comment.scss';
import Highlight from 'react-highlight';

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
    Icon
  } = Components;
  
class IconsDoc extends Component {
    constructor(props) {
      super(props);
      this.state = {
          confirmDirty: false,
      };
    }
      
    render() {
        const iconsMap = icons.map((item) => {
          const icon = (<Icon iconName={item.name} size={'150%'} key={item.name} />);
          return icon;
        });
        return(
          <section className="doc">
          <Row>
            <Col span={24}>
              <h2>Icons 图标</h2>
              <div>集成Ionic的Icons图标</div>
            </Col>
            <Col span={24}>
              <h3>基础用法</h3>
            </Col>
            <Col span={24} style={styles.codeBox}>
              <Row>
                <Col span={2}>
                <Icon iconName={'android-happy'} size={'120%'} />
                </Col>
                <Col span={20}>
                <code>{`<Icon iconName={'android-happy'} size={'120%'} />`}</code>
                </Col>
              </Row>
            </Col>
            <Col span={24} style={styles.codeBox}>
              {iconsMap}
            </Col>
          </Row>
          </section>
        );
    }
}
export default IconsDoc;