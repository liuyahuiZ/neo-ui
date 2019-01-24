import ReactDOM from 'react-dom';
import React , { Component }from 'react';
import {Components, Parts, utils} from '../WAP';
import { Router, Route, hashHistory, IndexRedirect } from 'react-router';
import styles from './common/style';
import icons from './common/icon';
import '../Style/comment.scss'
import '../Style/highlight.scss'
import qr from 'qr-image';

const {
    Button,
    Input,
    Row,
    Col,
    PageTransition
  } = Components;
  const {HeaderPart } = Parts

class AllCompenent extends Component {
    constructor(props) {
      super(props);
      this.state = {
          action: 'enter',
          compontArr: [],
          titleArr: [],
          historyArr:[],
          moving: true,
          imgsrc: '',
      };
      this.actions = this.actions.bind(this);
    }
    componentDidMount(){
        const arr = [];
        const histArr = [];
        arr.push(this.props.children);
        histArr.push(this.props.location.pathname);
        this.setState({
            compontArr: arr,
            historyArr: histArr,
            titleArr: histArr,
            moving: false
        })
    }
    componentWillReceiveProps(nextProps) {
        // console.log(nextProps);
        const { moving, historyArr } = this.state;
        // console.log(moving, historyArr)
        if(moving) {
            this.setState({
                moving: false
            });
            return;
        } 
        if(nextProps.location.pathname === '/') {
            this.setState({
                historyArr: [],
            })
            this.changeContent('leave', nextProps)
            return
        }
        if(nextProps.location.action === "PUSH") {
            this.changeContent('enter', nextProps)
        } else if(nextProps.location.action === "POP") {
            this.changeContent('leave', nextProps)
        }
    }
    
    changeContent(action, nextProps){
        const self = this;
        const arr = this.state.compontArr;
        const titArr = this.state.titleArr;
        
        if(arr.length < 2) {   
            let child = React.cloneElement(nextProps.children, { pageIn: 123 });
            arr.push(child);
            titArr.push(nextProps.location.pathname);
        }
        this.setState({
            compontArr: arr,
            action: action,
            titleArr: titArr,
            moving: true,
        })
        setTimeout(()=> {
            const arr = self.state.compontArr;
            const titArr = this.state.titleArr;
            arr.shift();
            titArr.shift();

            let child = React.cloneElement(arr[0], { pageIn: '' });
            self.setState({
                compontArr: [child],
                titleArr:titArr,
                moving: false
            })
        }, 600)
    }

    actions(){
        const {historyArr, action} = this.state;
        hashHistory.goBack();
    }
    // actions(){
    //     const action = this.state.action;
    //     hashHistory.push('/component/Lists');
    // }
    createQr() {
        let qr_png = qr.imageSync('I love QR!', { type: 'png' });
        console.log(qr_png);
        let b64encoded = btoa(String.fromCharCode.apply(null, qr_png));
        console.log(b64encoded);
        this.setState({
            imgsrc: `data:image/png;base64,${b64encoded}`
        })
    }
    render() {
        const self = this;
        const {compontArr, titleArr} = this.state;
        const Action = this.state.action;
        let actionArr = [{action: 'leave', enter: 'doc-enter', leave:'doc-leave' },
        {action: 'enter', enter: 'doc-enter', leave:'doc-leave-end' }];
        if(Action === 'enter') {
            actionArr = [{action: 'leave', enter: 'doc-enter', leave:'doc-leave-end' },
            {action: 'enter', enter: 'doc-enter', leave:'doc-leave' }];
        }
        let ZIndex = 5;
        const components = this.state.compontArr.map((item, idx) => {
            if(compontArr.length > 1){
                return (<PageTransition
                    act={actionArr[idx].action}
                    enter={actionArr[idx].enter}
                    leave={actionArr[idx].leave}
                    key={`${idx}-com`}
                    ><div className="pageContent transf pages"  style={{zIndex: ZIndex - idx}}>{item}</div>
                    </PageTransition>);
            }
            return (<div className="pageContent transf" key={`${idx}-com`}>{item}</div>);
        });
        return(
            <div>
                <HeaderPart titlepart={titleArr} action={Action} onback={() => {this.actions()}}/>
                <div id='sdk_lib'></div>
                {components}
            </div>
        );
    }
}

export default AllCompenent;
