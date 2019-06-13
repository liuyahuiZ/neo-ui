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
    List
  } = Components;

class PullRefreshDoc extends Component {
    constructor(props) {
      super(props);
      this.state = {
          confirmDirty: false,
          refreshed: false,
          list: false
      };
    }

    loadFunc(){
      console.log('onload');
      setTimeout(() => {
        this.setState({
          refreshed: true,
          list: true
        })
      }, 3000);
    }

    render() {
      const { refreshed, list } = this.state;
      const listDom = list ? <List
      Date={menu}
      /> : '';
        return(
          <section >
            <PullRefresh onLoading={()=>{
              this.loadFunc()
            }} refreshed={refreshed}>
              <Row>
                <Col className="bg-7ecef4 padding-all-2r">
                  <Row>
                  <Col className="text-align-center" span={6}>
                    <Row className="padding-top-1r" justify="center">
                      <Col className="text-align-center">
                          <Icon iconName={'android-textsms '} size={'230%'} iconColor={'#fff'} />
                      </Col>
                      <Col className="text-align-center textclolor-white">Talk</Col>
                    </Row>
                  </Col>
                  <Col className="text-align-center" span={6}>
                    <Row className="padding-top-1r" justify="center">
                      <Col className="text-align-center">
                          <Icon iconName={'heart '} size={'230%'} iconColor={'#fff'} />
                      </Col>
                      <Col className="text-align-center textclolor-white">Heart</Col>
                    </Row>
                  </Col>
                  <Col className="text-align-center" span={6}>
                    <Row className="padding-top-1r" justify="center">
                      <Col className="text-align-center">
                          <Icon iconName={'filing '} size={'230%'} iconColor={'#fff'} />
                      </Col>
                      <Col className="text-align-center textclolor-white">Card</Col>
                    </Row>
                  </Col>
                  <Col className="text-align-center" span={6}>
                    <Row className="padding-top-1r" justify="center">
                      <Col className="text-align-center">
                          <Icon iconName={'android-color-palette '} size={'230%'} iconColor={'#fff'} />
                      </Col>
                      <Col className="text-align-center textclolor-white">Parint</Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
    
              <Col span={24} className="bg-show">
                  
              </Col>
              <Col className="bg-show margin-top-2 padding-all">
                <Row>
                  <Col className="line-height-2r textcolor-2d2d2d">理财推荐</Col>
                </Row>
                <Row>
                  <Col className="padding-all" span={12}>
                    <div className="heighr-4 bg-home"></div>
                  </Col>
                  <Col className="padding-all" span={12}>
                    <div className="heighr-4 bg-home"></div>
                  </Col>
                </Row>
              </Col>
              <Col className="bg-show margin-top-2 padding-all">
                <Row>
                  <Col className="line-height-2r textcolor-2d2d2d">保险推荐</Col>
                </Row>
                <Row>
                  <Col className="padding-all" >
                    <div className="heighr-4 bg-home"></div>
                  </Col>
                  <Col className="padding-all" span={12}>
                    <div className="heighr-4 bg-home"></div>
                  </Col>
                </Row>
              </Col>
              </Row>
              {listDom}
            </PullRefresh>
          </section>
        );
    }
}
export default PullRefreshDoc;
