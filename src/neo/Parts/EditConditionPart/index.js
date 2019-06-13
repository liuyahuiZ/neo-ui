import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './style';
import { Toaster, Row, Col } from '../../Components/';
import { isArray } from '../../utils/base';
import isValid from '../../utils/validFuncs';
import * as arrayUtils from '../../utils/array';
import genInput from '../factory';

class EditPart extends Component {
  static checkRequired(valid, conditionValid) {
    if (!isArray(valid)) {
      valid = [valid];
    }

    if (conditionValid || valid.indexOf('required') > -1) {
      return (
        <span style={styles.require}>*</span>
      );
    }

    return null;
  }
  constructor(props) {
    super(props);
    this.state = {
      hasItems: true,
      respData: this.props.respData
    };
    this.getData = this.getData.bind(this);
    this.checkValid = this.checkValid.bind(this);
    this.genInput = genInput.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      respData: nextProps.respData
    });
  }
  getDomData(item, format) {
    const $$dom = this[`$$${item.key}`];
    const value = $$dom.getValue ? $$dom.getValue() : $$dom.value;

    if (format && item.format && value !== '') {
      return item.format(value);
    }

    return value;
  }
  getData() {
    const { editItemList } = this.props;
    const data = {};
    arrayUtils.forEach(editItemList, (item) => {
      data[item.key] = this.getDomData(item, true);
      // arrayUtils.forEach(item.items, (it) => {
      //   data[it.key] = this.getDomData(it, true);
      // });
    });

    return data;
  }

  checkItemValid(item) {
    const { valid } = item;
    const $$dom = this[`$$${item.key}`];
    const value = $$dom.getValue ? $$dom.getValue() : $$dom.value;
    return isValid(value, valid);
  }
  checkValid() {
    const { editItemList, valid } = this.props;

    let status =  true;
    // 单个校验
    for(let i=0;i<editItemList.length;i++){
      const res = this.checkItemValid(editItemList[i]);
      if (!res && editItemList[i].errorMsg) {
        status = false;
        Toaster.toaster({ type: 'error', content: editItemList[i].errorMsg }, true);
      }
    }
    return status;
    // const listValid = arrayUtils.every(editItemList, (item) => {
    //   const res = this.checkItemValid(item);
    //   if (!res && item.errorMsg) {
    //     Toaster.toaster({ type: 'error', content: item.errorMsg }, true);
    //   }

    //   const children = arrayUtils.every(item.items, (it) => {
    //     const res = this.checkItemValid(it);
    //     if (!res && it.errorMsg) {
    //       Toaster.toaster({ type: 'error', content: it.errorMsg }, true);
    //     }
    //     return res;
    //   });

    //   if (!children) {
    //     return false;
    //   }

    //   行内校验
    //   let innerres = true;
    //   if (item.valid && !item.hasNoChild) {
    //     const childValues = item.items.map(i => this.getDomData(i));
    //     innerres = item.valid(...childValues);
    //   }
    //   if (!innerres) {
    //     Toaster.toaster({ type: 'error', content: item.errorMsg });
    //   }

    //   return innerres;
    // });

    // if (!listValid) {
    //   return false;
    // }

    // 全局校验
    const wholeValid = arrayUtils.every(valid, (item) => {
      const params = item.params.map((key) => {
        const $$dom = this[`$$${key}`];
        return $$dom.getValue ? $$dom.getValue() : $$dom.value;
      });
      const validFunc = item.func;

      const validRes = validFunc(...params);

      if (!validRes) {
        Toaster.toaster({ type: 'error', content: item.errorMsg });
      }
      return validRes;
    });

    if (valid && !wholeValid) {
      return false;
    }
    return true;
  }
  render() {
    const { editItemList } = this.props;
    const { respData } = this.state;
    arrayUtils.mergeList(editItemList, respData);
    return (
      <div>
        {
          editItemList.map((editItem, idx) => {
            const key = `${idx}-${editItem.text}`;
            // if (!editItem.items || !editItem.items.length) {
            //   // const item = Object.assign({}, editItem, { text: '' });
            //   // editItem.items = [item];
            //   editItem.hasNoChild = true;
            // }

            const dispStyle = {};

            if (editItem.isShow) {
              const params = editItem.isShowParams.map(p => respData[p]);
              if (!editItem.isShow(...params)) {
                dispStyle.display = 'none';
              }
            }

            return (
              <div
                key={key}
                ref={(dom) => {
                  this[`$$wrap-${editItem.key}`] = dom;
                }}
                style={Object.assign({}, styles.container, editItem.wrapStyle, dispStyle)}
              >
                <Row>
                  <Col span={8} className="text-align-right"><span style={styles.text} >
                  {
                    EditPart.checkRequired(editItem.valid, editItem.conditionValid)
                  }
                  <span style={editItem.textStyle}>
                    {editItem.text}：
                  </span>
                  
                </span>
                </Col>
                <Col span={16}>
                {editItem ? <Row>
                          <Col span={20}>{this.genInput(editItem)}</Col>
                          <Col span={4} className="text-align-center">{editItem.after || ''}{editItem.remark || ''}</Col>
                  </Row>: ''}
                {/* {editItem.items.length > 1 ? editItem.items.map((item, innerIdx) => {
                    const innerkey = `inner-${innerIdx}`;
                    return (
                      <div style={styles.inline} key={innerkey}>
                        <Row>
                          {item.text ? <Col span={4}><span style={item.textStyle}>{item.text}</span></Col> : ''}
                          <Col span={16}>{this.genInput(item)}</Col>
                          <Col span={4} className="text-align-center">{item.after || ''}{item.remark || ''}</Col>
                        </Row>
                      </div>
                    );
                  })
                : ''} */}
                </Col>
                </Row>
              </div>
            );
          })
        }
      </div>
    );
  }
}

EditPart.propTypes = {
  editItemList: PropTypes.arrayOf(PropTypes.shape({})),
  valid: PropTypes.arrayOf(PropTypes.shape()),
  respData: PropTypes.oneOfType([PropTypes.shape({}),
    PropTypes.arrayOf(PropTypes.shape({})), PropTypes.func]),
};

EditPart.defaultProps = {
  valid: [],
  respData: {}
};


EditPart.defaultProps = {
  editItemList: []
};

export default EditPart;
