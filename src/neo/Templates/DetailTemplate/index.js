import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import ReactDom from 'react-dom';

import fetch from '../../utils/request';
import Button from '../../Components/Button';
import * as arrayUtils from '../../utils/array';
import styles from './style';

import { DetailPart } from '../../Parts';

class DetailTemplate extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pageData: {},
      urlInfo: this.props.urlInfo,
      pageParmes: this.props.pageParmes,
      searchCondition: this.props.searchCondition
    };
  }
  componentDidMount(){
    this.fetData()
  }
  componentWillReceiveProps(nextProps){
    this.setState({
      urlInfo: nextProps.urlInfo,
      pageParmes: nextProps.pageParmes,
      searchCondition: nextProps.searchCondition
    }, ()=>{
      this.fetData()
    })
  }
  
  setReq(condition, parmes){
    if(!parmes) return;
    let resp = {}
    for(let i=0;i<condition.length;i++){
      resp[condition[i].key] = condition[i].value ? condition[i].value :parmes[condition[i].key]
    }
    return resp
  }

  fetData(){
    const { urlInfo, pageParmes, searchCondition } = this.state;
    const self = this;
    if(urlInfo&&urlInfo.url) {
      fetch(urlInfo.url, {
        method: urlInfo.method,
        data: searchCondition&&searchCondition.length>0 ? self.setReq(searchCondition, pageParmes): {},
      }, urlInfo.header||{}).then((res) => {
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

  mergeDetail(detailList, pageData) {
    return detailList&&detailList.length>0 ? detailList.map((info) => {
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

  buttonAction(info){
    const { pageData } = this.state;
    const self = this;
    if(info&&info.url) {
      fetch(info.url, {
        method: info.method,
        data: info.options&&info.options>0 ? self.setReq(info.options, pageData): {},
      }).then((res) => {
        if (res.code === '0000') {
          Toaster.toaster({ type: 'error', content: res.msg, time: 3000 });
        } else {
          Toaster.toaster({ type: 'error', content: res.msg, time: 3000 });
        }
      }).catch(()=>{
        
      });
    }
  }

  render() {
    const { detailList, funcButton  } = this.props;
    const { pageData } = this.state;
    const mergedDetailList = pageData&&JSON.stringify(pageData)!=='{}' ? this.mergeDetail(detailList, pageData): detailList  //DetailTemplate.mergeDetail(detailList, respData);
    const self = this;
    return (
      <div>
        <DetailPart
          detailList={mergedDetailList}
          data={pageData}
        />
        <div style={styles.container} >
          <span style={styles.text} />
          {
            funcButton&&funcButton.length>0?funcButton.map((btn, idx) => {
              // 默认显示打开，当规则满足时不显示； 默认显示关闭，当规则满足时显示
              // true true false , true false true
              // false true true, false false false
              let showStatus =  false;
              if(btn.rule&&btn.rule.length>0) {
                // console.log('rule', btn.rule, pageData);
                for(let i=0;i < btn.rule.length;i++){
                  // console.log('pageData', pageData[btn.rule[i].text])
                  if(pageData[btn.rule[i].text]&&(pageData[btn.rule[i].text] == btn.rule[i].value) ) {
                    showStatus = true;
                  }
                }
              }
              console.log('btn.ruleModal:', btn.ruleModal, 'showStatus:', showStatus)
              return (btn.ruleModal - showStatus) !== 0 ?  (<Button key={btn.text} style={styles.btn} text={btn.text} onClick={()=>{
                self.buttonAction(btn)
              }} />) : ''
            }) : ''
          }
        </div>
      </div>
    );
  }
}

DetailTemplate.propTypes = {
  detailList: PropTypes.oneOfType([PropTypes.shape({}), PropTypes.array]),
  btns: PropTypes.arrayOf(PropTypes.shape()),
  funcButton: PropTypes.arrayOf(PropTypes.shape()),
  pageParmes: PropTypes.shape(),
  searchCondition:  PropTypes.oneOfType([PropTypes.shape({}),PropTypes.array])
};

DetailTemplate.defaultProps = {
  valid: [],
  btns: [],
  funcButton: [],
  pageParmes: {},
  searchCondition: [],
  detailList: []
};

export default DetailTemplate;