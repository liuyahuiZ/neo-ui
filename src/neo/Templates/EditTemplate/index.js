import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import ReactDom from 'react-dom';
import { Buttons, Row, Col } from '../../Components';

import styles from './style';
import { EditConditionPart } from '../../Parts';
// import fetch from '../../utils/fetch';
import fetch from '../../utils/request';
import * as arrayUtils from '../../utils/array';

class EditTemplate extends Component {
  // 初始化编辑参数（如果是编辑）
  constructor() {
    super();
    this.state = {
      ButtonStatus: false
    };
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

  fetData(comdata){
    const { urlInfo } = this.props;
    fetch(urlInfo.url, {
      method: urlInfo.method,
      data: comdata,
    }, urlInfo.header||{}).then((res) => {
      console.log(res);
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
    const { editItemList, valid, respData } = this.props;
    // let newEditItemList = this.mergeList(editItemList, respData);
    return (
      <Row justify={"center"}>
        <Col>
        <EditConditionPart
          editItemList={editItemList}
          respData={respData}
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

EditTemplate.propTypes = {
  editItemList: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  valid: PropTypes.arrayOf(PropTypes.shape()),
  respData: PropTypes.shape(),
  urlInfo: PropTypes.shape(),
};

EditTemplate.defaultProps = {
  valid: [],
  respData: {},
  urlInfo: {}
};

export default EditTemplate;
