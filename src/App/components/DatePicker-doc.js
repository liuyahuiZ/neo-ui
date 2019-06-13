import ReactDOM from 'react-dom';
import React , { Component }from 'react';
import {Components, Parts, utils} from '../../neo';
import styles from '../common/style';
import Code from '../common/Code';
import '../../Style/comment.scss';
import moment from 'moment'; // 引入时间计算插件

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
    Buttons,
    Input,
    DatePicker,
    Row,
    Col,
  } = Components;
  
class DatePickerDoc extends Component {
    constructor(props) {
      super(props);
      const startDate = moment().subtract(1, 'days').format('YYYY-MM-DD'); // 设置开始日期，没有就默认昨天的日期
	  const endDate =  moment().subtract(1, 'days').format('YYYY-MM-DD'); // 设置结束日期，没有就默认昨天的日期
      this.state = {
          confirmDirty: false,
          datePicker: {
            startDate,
            endDate,
            dateType: 2,
            callback:(e)=>{console.log(e)}
        },
      };
    }
      
    render() {

        return(
          <section className="doc">
          <Row>
            <Col span={24}>
              <h2>DatePicker 日期选择器</h2>
            </Col>
            <Col span={24}>
              <h3>基础用法</h3>
            </Col>
    
            <Col span={24} style={styles.codeBox}>
              <Row>
                <Col>
                   <DatePicker {...this.state.datePicker} handleDateChange={(e)=>{console.log(e)}}/>
                </Col>
                <Col>
                   <DatePicker {...this.state.datePicker} handleDateChange={(e)=>{console.log(e)}} simple />
                </Col>
                <Col>
                   <DatePicker {...this.state.datePicker} handleDateChange={(e)=>{console.log(e)}} date />
                </Col>
                <Col>
                   <DatePicker {...this.state.datePicker} handleDateChange={(e)=>{console.log(e)}} month />
                </Col>
              </Row>
            </Col>
    
          </Row>
          </section>
        );
    }
}
export default DatePickerDoc;