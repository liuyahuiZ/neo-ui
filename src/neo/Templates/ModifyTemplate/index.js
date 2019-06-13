import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import ReactDom from 'react-dom';
import { Buttons, Row, Col } from '../../Components';

import styles from './style';
import { EditConditionPart } from '../../Parts';
// import fetch from '../../utils/fetch';
import fetch from '../../utils/request';
import * as arrayUtils from '../../utils/array';

class ModifyTemplate extends Component {
  // 初始化编辑参数（如果是编辑）
  constructor(props) {
    super(props);
    this.state = {
      ButtonStatus: false,
      urlInfo: this.props.urlInfo || {},
      pageParmes: this.props.pageParmes,
      searchCondition: this.props.searchCondition || [],
      searchUrlCondition: this.props.searchUrlCondition || {},
      editItemList: this.props.editItemList
    };
  }

  componentDidMount(){
    this.fetchSearchData()
  }
  componentWillReceiveProps(nextProps){
    this.setState({
      urlInfo: nextProps.urlInfo,
      editItemList: nextProps.editItemList,
      pageParmes: nextProps.pageParmes,
      searchCondition: nextProps.searchCondition,
      searchUrlCondition: nextProps.searchUrlCondition,
    }, ()=>{
      this.fetchSearchData()
    })
  }

  setReq(condition, parmes){
    if(!parmes) return;
    let resp = {}
    for(let i=0;i<condition.length;i++){
      resp[condition[i].key] = parmes[condition[i].key]
    }
    return resp
  }

  fetchSearchData(){
    const { searchUrlCondition, pageParmes, searchCondition } = this.state;
    const self = this;
    if(searchUrlCondition&&searchUrlCondition.url) {
      fetch(searchUrlCondition.url, {
        method: searchUrlCondition.method,
        data: searchCondition&&searchCondition.length>0 ? self.setReq(searchCondition, pageParmes): {},
      }, searchUrlCondition.header||{}).then((res) => {
        if (res.code === '0000') {
          self.setState({
            pageData: res.data
          })
          Toaster.toaster({ type: 'error', content: res.msg, time: 3000 });
        } else {
          Toaster.toaster({ type: 'error', content: res.msg, time: 3000 });
        }
      }).catch(()=>{
        
      });
    }
  }
  mergeList(array, obj) {
    if (!obj) {
      return;
    }
    arrayUtils.forEach(array, (item) => {
      if (item.items) {
        arrayUtils.forEach(item.items, (t) => {
          if (obj[t.key]) {
            t.value = obj[t.key];
          }
        });
      } else if (obj[item.key]) {
        item.value = obj[item.key];
      }
    });
  }

  mergeDetail(array, pageData) {
    return array&&array.length>0 ? array.map((info) => {
      // console.log(info);
      if (info.items) {
        arrayUtils.forEach(info.items, (item) => {
          item.value = pageData[item.key];
        });
      } else {
        info.value = pageData[info.key];
      }

      return info;
    }) : {};
  }

  fetData(comdata){
    const { urlInfo } = this.state;
    fetch(urlInfo.url, {
      method: urlInfo.method,
      data: comdata,
    }, urlInfo.header||{}).then((res) => {
      this.setState({ ButtonStatus: false });
      if (res.code === '0000') {
        Toaster.toaster({ type: 'error', content: res.msg, time: 3000 });
      } else {
        this.setState({ ButtonStatus: false });
        Toaster.toaster({ type: 'error', content: res.msg, time: 3000 });
      }
    }).catch(()=>{
      this.setState({ ButtonStatus: false });
    });
  }

  save() {
    const { checkValid, getData } = this.$$editPart;
    if (checkValid()) {
      const comdata = getData();
      this.setState({ ButtonStatus: true });
      this.fetData(comdata);
    }
  }


  render() {
    const { valid } = this.props;
    const { pageData, editItemList } = this.state;
    
    // let newEditItemList = this.mergeList(editItemList, respData);
    const mergedDetailList = pageData&&JSON.stringify(pageData)!=='{}' ? this.mergeDetail(editItemList, pageData): editItemList  //DetailTemplate.mergeDetail(detailList, respData);
    return (
      <Row justify={"center"}>
        <Col>
        <EditConditionPart
          editItemList={mergedDetailList}
          valid={valid}
          ref={(ref) => {
            this.$$editPart = ref;
          }}
        />
        </Col>
        <Col span={6}>
          <Buttons text={'保存'} type={'primary'} disabled={this.state.ButtonStatus} onClick={()=>{this.save()}} />
        </Col>
      </Row>
    );
  }
}

ModifyTemplate.propTypes = {
  editItemList: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  valid: PropTypes.arrayOf(PropTypes.shape()),
  respData: PropTypes.shape(),
  urlInfo: PropTypes.shape(),
  searchCondition:  PropTypes.oneOfType([PropTypes.shape({}),PropTypes.array]),
  searchUrlCondition: PropTypes.shape(),
};

ModifyTemplate.defaultProps = {
  valid: [],
  respData: {},
  urlInfo: {},
  searchCondition: [],
  searchUrlCondition: {},
  editItemList: []
};

export default ModifyTemplate;
