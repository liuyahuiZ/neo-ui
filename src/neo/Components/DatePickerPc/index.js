import React from 'react'; // 引入 react
import { Component, PropTypes } from 'react';
import  DatePickerCom  from './date_picker'; // 引入组件
import { getDefaultDate, formatViewMonth, formatViewDate, addListenerForWebviewDidAppear, getLastDate} from '../../utils/date'
import '../Style/datePicker.scss';
import Icon from '../Icon';
import {getDateTimeStr} from '../../utils/timeStamp';
import moment from 'moment'; 

class DatePicker extends Component {
    constructor(props) {
        super(props);
        this.state={
            datePickerVisible:false,
            startDate: this.props.startDate || moment().subtract(1, 'days').format('YYYY-MM-DD'),
            endDate: this.props.endDate || moment().subtract(1, 'days').format('YYYY-MM-DD'),
            dateType: this.props.dateType || 2,
            model: this.props.model|| 'simple',
            allowToday: this.props.allowToday || true
        }
        this.getValue = this.getValue.bind(this);
    }

    componentDidMount () {
        this.backFromDatePicker();
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            startDate: nextProps.startDate || moment().subtract(1, 'days').format('YYYY-MM-DD'),
            endDate: nextProps.endDate || moment().subtract(1, 'days').format('YYYY-MM-DD'),
            dateType: nextProps.dateType || 2,
            model: nextProps.model,
            allowToday: nextProps.allowToday
        })
    }

    toDateString(date){
        let dateString = new Date(date).getTime()
        return dateString
    }
    getValue() {
        const {model} = this.state;
        if(model == 'date') {
            return getDateTimeStr(this.state.startDate);
        }
        return {startDate : getDateTimeStr(this.state.startDate), endDate: getDateTimeStr(this.state.endDate)};
    }

    backFromDatePicker () {
        addListenerForWebviewDidAppear(() => {
            const date = Storage.getItem('datePicker');

            if (date && date.selected) {
                this.props.handleDateChange && this.props.handleDateChange(date);

                Storage.removeItem('datePicker');
            }
        });
    }

    openDatePicker () {
        //打开前调用
        if(this.props.handleDateBefore)
            this.props.handleDateBefore()
        this.setState({
            datePickerVisible:true
        })
    }
    dataPickerCallback(data){
        this.setState({
            startDate: data.startDate || moment().subtract(1, 'days').format('YYYY-MM-DD'),
            endDate: data.endDate || moment().subtract(1, 'days').format('YYYY-MM-DD'),
            dateType: data.type || 2,
            datePickerVisible:false
        })
        this.props.callback(data);
    }
    lastDatePicker(){
        if(this.props.startDate!=this.props.endDate) return
        let date=getLastDate(this.props.startDate)
        this.props.callback(
            {
                selected: true,
                startDate:date,
                endDate: date,
                type: 2
            }
        );
    }
    nextDatePicker(){
        if(this.props.allowToday){
            if(this.props.startDate!=this.props.endDate || this.props.startDate==getRecentDate()) return
        }else{
            if(this.props.startDate!=this.props.endDate || this.props.startDate==getDefaultDate()) return
        }
        let date=getNextDate(this.props.startDate)
        this.props.callback(
            {
                selected: true,
                startDate: date,
                endDate: date,
                type: 2
            }
        );
    }
    getLiClass(isNext){
        let className="per3"
        if(this.props.startDate==this.props.endDate){
            className+=" show"
        }
        if(this.props.allowToday){
            if(isNext &&  this.props.startDate==getRecentDate()){
                className+=" deny"
            }
        }else{
            if(isNext &&  this.props.startDate==getDefaultDate()){
                className+=" deny"
            }
        }
        return className

    }
    render () {
        const {model, startDate, endDate, dateType, allowToday} = this.state;
        const {style} = this.props
        console.log('style');
        if(model == 'simple')
            return(
                <div className={`com-datepick ${this.props.className||''}`} style={typeof style =='string'? JSON.parse(style): style}>
                    <div className="inside" onClick={this.openDatePicker.bind(this)}>
                        <span>{this.props.btnText||formatViewDate(startDate, endDate)}</span>
                    </div>
                    <DatePickerCom
                        query={{
                            start_date: startDate,
                            end_date: endDate,
                            date_type: dateType,
                            allow_today: allowToday,
                        }}
                        closeCom={function(){
                            this.setState({
                                datePickerVisible:false
                            })
                        }.bind(this)}
                        callback={this.dataPickerCallback.bind(this)}
                        visible={this.state.datePickerVisible}
                    ></DatePickerCom>
                </div>
            )
        else if(model == 'month')
            return(
                <div className="com-datepick">
                    <ul className="m-nav clearfix">
                        <li className="per1 down" onClick={this.openDatePicker.bind(this)}>
                            <span>{formatViewMonth(startDate)}</span>
                        </li>
                    </ul>
                    <DatePickerCom
                        query={{
                            start_date:startDate,
                            end_date: endDate,
                            date_type: dateType,
                            allow_today: allowToday,
                            hide_type:true
                        }}
                        closeCom={function(){
                            this.setState({
                                datePickerVisible:false
                            })
                        }.bind(this)}
                        className={this.props.className}
                        callback={this.dataPickerCallback.bind(this)}
                        visible={this.state.datePickerVisible}
                    ></DatePickerCom>
                </div>
            );
        else
            return(
                <div className="com-datepick">
                    <div className="inside" onClick={this.openDatePicker.bind(this)}>
                        <span>{formatViewDate(startDate, endDate)}</span>
                    </div>
                    <DatePickerCom
                        query={{
                            start_date: startDate,
                            end_date: endDate,
                            date_type: dateType,
                            allow_today: allowToday,
                            hide_type:true
                        }}
                        closeCom={function(){
                            this.setState({
                                datePickerVisible:false
                            })
                        }.bind(this)}
                        className={this.props.className}
                        callback={this.dataPickerCallback.bind(this)}
                        visible={this.state.datePickerVisible}
                    ></DatePickerCom>
                </div>
            );
            
    }
}
DatePicker.defaultProps = {
    allowToday: true,
    handleDateChange: function () {},
    model: 'simple',
    dateType: 2,
    startDate: moment().subtract(1, 'days').format('YYYY-MM-DD'),
    endDate: moment().subtract(1, 'days').format('YYYY-MM-DD')
};
// DatePicker.propTypes = {
// 	startDate: PropTypes.string.isRequired,
// 	endDate: PropTypes.string.isRequired,
// 	dateType: PropTypes.number.isRequired,
// 	handleDateChange: PropTypes.func
// };

export default DatePicker;