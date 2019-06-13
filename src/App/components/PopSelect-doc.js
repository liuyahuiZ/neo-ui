import ReactDOM from 'react-dom';
import React , { Component }from 'react';
import {Components, Parts, utils} from '../../neo';
import styles from '../common/style';
import Code from '../common/Code';
import '../../Style/comment.scss'

const dom = {};
const marginStyle = {
  margin: '10px 0'
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
    Row,
    Col,
    Icon,
    PopSelect,
    Input,
    PopContainer, Picker
  } = Components;

const area = 
    [
      {code:1,name:'第1大区'},
      {code:2,name:'第2大区'},
      {code:3,name:'第3大区'}
    ];
const compoeny = [
      {code:6,name:'第6中区','aCode':2},
      {code:1,name:'第1中区','aCode':1},
      {code:2,name:'第2中区','aCode':1},
      {code:3,name:'第3中区','aCode':1},
      {code:4,name:'第4中区','aCode':2},
      {code:5,name:'第5中区','aCode':3},
      {code:7,name:'第7中区','aCode':2},
      {code:8,name:'第8中区','aCode':2},
      {code:9,name:'第9中区','aCode':2},
      {code:10,name:'第10中区','aCode':1},
      {code:11,name:'第11中区','aCode':3},
      {code:12,name:'第12中区','aCode':3},
      {code:13,name:'第13中区','aCode':3}
    ];
const dcns = [
      {code:14,name:'第14中区','aCode':10},
      {code:15,name:'第15中区','aCode':11},
      {code:16,name:'第16中区','aCode':12},
      {code:17,name:'第17中区','aCode':13},
    ];

const demoData = [[
    {code:1,name:'第1大区'},
    {code:2,name:'第2大区'},
    {code:3,name:'第3大区'}
  ],[
    {code:6,name:'第6中区','aCode':2},
    {code:1,name:'第1中区','aCode':1},
    {code:2,name:'第2中区','aCode':1},
    {code:3,name:'第3中区','aCode':1},
    {code:4,name:'第4中区','aCode':2},
    {code:5,name:'第5中区','aCode':3},
    {code:7,name:'第7中区','aCode':2},
    {code:8,name:'第8中区','aCode':2},
    {code:9,name:'第9中区','aCode':2},
    {code:10,name:'第10中区','aCode':1},
    {code:11,name:'第11中区','aCode':3},
    {code:12,name:'第12中区','aCode':3},
    {code:13,name:'第13中区','aCode':3}
  ],[
    {code:14,name:'第14中区','aCode':10},
    {code:15,name:'第15中区','aCode':11},
    {code:16,name:'第16中区','aCode':12},
    {code:17,name:'第17中区','aCode':13},
  ]]

class ToasterDoc extends Component {
    constructor(props) {
      super(props);
      this.state = {
          confirmDirty: false,
          parents:[],
          area: area,
          compoeny: compoeny,
          dcns: dcns,
          datas: demoData,
          dataMap: []
      };
    }
    setArr(num){
        let arr = []
        for(let i=0;i<num;i++){
            if(i<=9) { i = `0${i}`}
            arr.push({
                "text": i,
                "value": i
            })
        }
        return arr;
    }
    doSheet(){
      const {meatType } = this.state;
      PopSelect.formConfirm({
        title: '',
        content: 'this is a warning',
        options: [
        {
            "text": "上海",
            "value": "1"
        },
        {
            "text": "北京",
            "value": "2"
        },
        {
            "text": "杭州",
            "value": "3"
        },
        {
            "text": "广州",
            "value": "4"
        },
        {
            "text": "南京",
            "value": "5"
        },
        {
            "text": "苏州",
            "value": "6"
        },
        {
            "text": "深圳",
            "value": "7"
        },
        {
            "text": "成都",
            "value": "8"
        },
        {
            "text": "重庆",
            "value": "9"
        },
        {
            "text": "天津",
            "value": "10"
        },
        {
            "text": "宁波",
            "value": "11"
        },
        {
            "text": "无锡",
            "value": "13"
        },
        {
            "text": "福州",
            "value": "14"
        },
        {
            "text": "厦门",
            "value": "15"
        }],
        btnSure: {
          text: '完成',
          type: 'link'
        },
        btnCancle: {
          text: '取消',
          type: 'link'
        } },
        (val) => {
          console.log(val)
         },
        (val) => { console.log(val) });
    }

    doPop(){
        PopSelect.formConfirm({
          title: '',
          options: [
          {
              "text": "上海",
              "value": "1"
          },
          {
              "text": "北京",
              "value": "2"
          },
          {
              "text": "杭州",
              "value": "3"
          },
          {
              "text": "广州",
              "value": "4"
          },
          {
              "text": "南京",
              "value": "5"
          },
          {
              "text": "苏州",
              "value": "6"
          },
          {
              "text": "深圳",
              "value": "7"
          }],
          btnSure: {
            text: '完成',
            type: 'link'
          },
          btnCancle: {
            text: '取消',
            type: 'link'
          } },
          (val) => {
            console.log(val)
           },
          (val) => { console.log(val) });
      }
      addRessDoPop(){
        PopSelect.formConfirm({
          type: 'address',
          title: '',
          defaultValue: ['湖南省','长沙市','开福区'],
          options: [],
          onChange: (e)=>{
            console.log(e);
          },
          btnSure: {
            text: '完成',
            type: 'link'
          },
          btnCancle: {
            text: '取消',
            type: 'link'
          }},
          (val) => {
            console.log(val)
           },
          (val) => { console.log(val) });
      }

    // checkIn(arr, key) {
    //     let checkArrS = false;
    //     let result = '';
    //     let AllRes = [];
    //     let Parent = [];
    //     for (let i = 0; i < arr.length; i++) {
    //         if (arr[i].title.indexOf(key) >= 0) {
    //             checkArrS = true;
    //             Parent.push(arr[i]);
    //             if (arr[i].children&&arr[i].children.length > 0) {
    //                 result = this.checkIn(arr[i].children, key);
    //             //   console.log('result1', result)
    //                 if(result.checkArrS){
    //                     AllRes.push(result);
    //                 }
    //             }
    //         } else {
    //             if (arr[i].children&&arr[i].children.length > 0) {
    //                 result = this.checkIn(arr[i].children, key);
    //                 // console.log('result2', result)
    //                 if(result.checkArrS){
    //                     Parent.push(arr[i]);
    //                     AllRes.push(result);
    //                 }
    //             }
    //         }
    //     }
    //     return { checkArrS: checkArrS, results: result, Parent: Parent, AllRes: AllRes };
    // }
    setValue(key, val){
        this.setState({[key]: val});
    }
    selectOver(v, idx){
        console.log(v);
        this.setValue('time',  v);
        this.setValue('timeStr',  new Date().getTime());
    }

    selectTime(){
        const self = this;
        const Hours = this.setArr(24);
        const Minuit = this.setArr(60);
        const Second = this.setArr(60);
        let theHours = 0;let theMinuit = 0;let theSecond = 0;
        PopContainer.confirm({
          content: (<Row>
              <Col span={24} className={'text-align-center'}  >
                  <Row>
                      <Col span={12} className="text-align-left line-height-2r padding-all" onClick={() => { PopContainer.closeAll() }}>
                      <Icon iconName={"android-close"} size={'130%'} iconColor={'#000'} /></Col>
                      <Col span={12} className="text-align-right line-height-2r padding-all" onClick={() => { PopContainer.closeAll();
                      self.selectOver(`${theHours}:${theMinuit}:${theSecond}`) }}>完成</Col>
                  </Row>
              </Col>
              <Col span={8} className={'overflow-hide text-align-center line-height-2r'}>时</Col>
              <Col span={8} className={'overflow-hide text-align-center line-height-2r'}>分</Col>
              <Col span={8} className={'overflow-hide text-align-center line-height-2r'}>秒</Col>
              <Col span={8} className={'overflow-hide'}>
                  <Picker data={{list: Hours, 
                  defaultValue: Hours[0],
                  displayValue (name) {
                      return name.text;
                  }}} onChange={(v)=>{
                      theHours = v.value;
                      // self.setValue(v)
                  }} />
              </Col>
              <Col span={8} className={'overflow-hide'}>
              <Picker data={{list: Minuit, 
                defaultValue: Minuit[0],
                displayValue (name) {
                  return name.text;
                }}} onChange={(v)=>{
                  theMinuit = v.value;
                  // self.setValue(v)
                }} />
              </Col>
              <Col span={8} className={'overflow-hide'}>
              <Picker data={{list: Second, 
                defaultValue: Second[0],
                displayValue (name) {
                  return name.text;
                }}} onChange={(v)=>{
                  theSecond = v.value;
                  // self.setValue(v)
                }} />
              </Col>
          </Row>),
        type: 'bottom',
        containerStyle: { top: '3rem'},
        });
    }
    setValue(key,val){
        this.setState({[key]: val});
    }

    getInArr(arr, keyValue, key) {
        const theArrS = [];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i][keyValue].indexOf(key) >= 0) {
                theArrS.push(arr[i])
            }
        }
        return theArrS;
    }

    checkInArrs(arr, keyValue, key) {
        const theArrS = [];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i][keyValue]=== key) {
                theArrS.push(arr[i])
            }
        }
        return theArrS;
    }
    checkIn(arr, keyValue, key){
        let statue =  false;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i][keyValue]===key) {
                statue = true;
            }
        }
        return statue;
    }

    getItemInArr(arr, keyValue, key){
        let item = '';
        for (let i = 0; i < arr.length; i++) {
            if (arr[i][keyValue]===key) {
                item = arr[i];
                break;
            }
        }
        return item;
    }

    loopCheck(i, demoData, datas, itemData, config){
        let res = this.checkIn(datas[i-1], config.code, itemData[config.pCode]);
        if(!res){
            let item = this.getItemInArr(demoData[i-1], config.code, itemData[config.pCode])
            datas[i-1].push(item)
            if((i-1)>0){
                this.loopCheck(i-1, demoData, datas, item, config);
            }
        }
    }
    onSearch(key){
        if(key === ''){
            this.setState({
                datas: demoData,
            })
            return;
        }
        let datas = [];
        let keyWords = 'name';
        let code = 'code';
        let pCode = 'aCode';
        for(let i=0;i<demoData.length;i++){
            datas[i] = this.getInArr(demoData[i], keyWords, key);
        }
        for(let i=0;i<demoData.length;i++){
            if(i < (demoData.length-1)){
                for(let j=0;j<datas[i].length;j++){
                    let item = this.checkInArrs(demoData[i+1], pCode, datas[i][j][code]);
                    datas[i+1].push(...item);
                    if(i!==0){
                        this.loopCheck(i, demoData, datas, datas[i][j], {'code': code,'pCode': pCode});
                    }
                }
            }
            if(i=== (demoData.length-1)) {
                for(let j=0;j<datas[i].length;j++){
                   this.loopCheck(i, demoData, datas, datas[i][j], {'code': code,'pCode': pCode});
                }
            }
            datas[i] = [...new Set(datas[i])];
        }
        this.setState({
            datas: datas
        })

        // -----------------------
        // // let result = this.checkIn(gData, key);
        // let are = this.getInArr(area, 'name', key);
        // let com = this.getInArr(compoeny, 'name', key);
        // let dom = this.getInArr(dcns, 'name', key)
        
        // for(let i=0;i<are.length;i++){
        //     //向下
        //     let item = this.checkInArrs(compoeny, 'aCode', are[i].code)
        //     com.push(...item)
        // }
        // for(let i=0;i<com.length;i++){
        //     //向下
        //     let item = this.checkInArrs(dcns, 'aCode', com[i].code)
        //     dom.push(...item);
        //     //向上
        //     let res = this.checkIn(are, 'code', com[i].aCode);
        //     if(!res){
        //         let item = this.getItemInArr(area, 'code', com[i].aCode)
        //         are.push(item)
        //     }
        // }

        // for(let i=0;i<dom.length;i++){
        //     //向上
        //     let res = this.checkIn(com, 'code', dom[i].aCode);
        //     if(!res){
        //         let item = this.getItemInArr(compoeny, 'code', dom[i].aCode)
        //         com.push(item)
        //         //向上
        //         let resp = this.checkIn(are, 'code', item.aCode);
        //         if(!resp){
        //             let items = this.getItemInArr(area, 'code', item.aCode)
        //             are.push(items)
        //         }
        //     }
            
        // }

    }

    render() {
        const {user, area, compoeny, dcns, datas, time} = this.state;
        const self = this;

        let areaDom = area.map((itm, idx)=>{
            return (<div>{itm.name}-{itm.code}</div>)
        })
        let compoenyDom = compoeny.map((itm, idx)=>{
            return (<div key={`${idx}-d`}>{itm.name}-A:{itm.aCode}-{itm.code}</div>)
        })
        let dcnsDom = dcns.map((itm, idx)=>{
            return (<div key={`${idx}-d`}>{itm.name}-A:{itm.aCode}</div>)
        })

        let datasDoma = datas.length > 0 ? datas.map((itm, idx) =>{
            let itmDom = itm.map((it, id)=>{
                return (<div key={`${id}-c`}>{it.name}-P{it.aCode}</div>)
            })
            return (<Col span={24/datas.length} key={`${idx}-d`}>{itmDom}</Col>)
        }) : <Col />

        return(
          <section className="doc">
          <Row>
            <Col span={24}>
              <h2>PopSelect 选择</h2>
              <div>悬浮出现在页面上方，显示全局的通知提醒消息。</div>
            </Col>
            <Col span={24}>
              <h3>基础用法</h3>
            </Col>
            
            <Col span={24} style={styles.codeBox}>
              <Buttons
                text="do PopSelect"
                type={"success"}
                style={marginStyle}
                onClick={() => { this.doSheet() }}
              />
            </Col>
            <Col span={24}>
              <h3>选择城市</h3>
            </Col>
            <Col span={24} style={styles.codeBox}>
                  <Buttons text="城市选择"
                      type={'primary'}
                      size={'large'}
                      onClick={()=>{
                        this.doPop()
                      }} />
            </Col>
            <Col span={24}>
              <h3>三级联动</h3>
            </Col>
            <Col span={24} style={styles.codeBox}>
                  <Buttons text="省市区三级选择"
                      type={'primary'}
                      size={'large'}
                      onClick={()=>{
                        this.addRessDoPop()
                      }} />
            </Col>
            <Col span={21} style={styles.codeBox} className="line-height-3r" onClick={()=>{self.selectTime()}}>
                时间 {time}
            </Col>
            <Col span={24}>
              <h3>过滤</h3>
            </Col>
            <Col span={24} style={styles.codeBox}>
                <Input
                        value={user}
                        placeholder="请输入关键词"
                        maxLength={100}
                        onChange={(e,t,v)=>{
                            self.setValue('user',v);
                            self.onSearch(v)
                        }}
                        />
                <Row>
                    {/* <Col span={8}>{areaDom}</Col>
                    <Col span={8}>{compoenyDom}</Col>
                    <Col span={8}>{dcnsDom}</Col> */}
                    {datasDoma}
                </Row>
            </Col>
          </Row>
          </section>
        );
    }
}
export default ToasterDoc;
