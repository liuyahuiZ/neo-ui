import ReactDOM from 'react-dom';
import React , { Component }from 'react';
import {Components, Parts, utils} from '../../neo';
import styles from '../common/style';
import Code from '../common/Code';
import '../../Style/comment.scss';
import menu from '../../Config/MenuList'

const {
    Buttons,
    Row,
    Col,
    Icon,
    PullRefresh,
    LoadMore
  } = Components;

class PullRefreshDoc extends Component {
    constructor(props) {
      super(props);
      this.state = {
        enableLoad: 'canload',
        productList: [{},{},{},{},{},{}]
      };
    }

    loadmore(){
      console.log('load...');
      const { productList } = this.state;
      let products = productList;
      const self = this;
      // 'loading' 'loaded' 'canload'
      self.setState({
        enableLoad: 'loading'
      })
      setTimeout(()=>{
        let enableLoad = 'loading';
        if( products.length >= 100 ) {
          enableLoad = 'loaded'
        } else{
          enableLoad = 'canload';
          products = products.concat([{name: 'query'},{name: 'gets'},{name: 'gets1'},{name: 'gets1'},{name: 'gets1'}]);
        }
        
        self.setState({
          productList: products,
          enableLoad: enableLoad
        })
      }, 3000);
    }

    render() {
      const { productList, enableLoad } = this.state;
      const productListDom = productList.map((itm, idx)=>{
        return (
        <Row className="padding-all-2r bg-show border-bottom border-color-f5f5f5"  key={`${idx}-itm`}>
          <Col span={14}>
            <Row>
                <Col span={5}>
                  <Icon iconName={'social-codepen '} size={'180%'} iconColor={'#4698F9'} />
                </Col>
                <Col span={19}>
                  <Row>
                    <Col>定期理财</Col>
                    <Col className="font-size-8 textclolor-gray">年华利率6.00%</Col>
                  </Row>
                </Col>
            </Row>
          </Col>
          <Col span={10} className="font-size-8 textclolor-gray-red text-align-right">银行信用 当日起息</Col>
        </Row>)
      });
        return(
          <section >
            <LoadMore enableLoad={enableLoad} percent={20}  loadfunc={()=>{this.loadmore()}} className="bg-f5f5f5">
              {productListDom}
            </LoadMore>
          </section>
        );
    }
}
export default PullRefreshDoc;
