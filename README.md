## neo-ui

一款基于react的UI框架，采用组件分级化思想，将组件分为低阶级组件，中阶组件，高阶组件。

预览地址 http://www.wetalks.cn/neo-ui/

github https://github.com/liuyahuiZ/neo-ui

## 开发模式

低阶组件 ：**Components** 部分，属于最底层的组件，跟业务毫无关联，只实现最基础应有的功能，比如Button, input, select等。将其封装暴露出该有的方法和属性，供更高阶的组件调用。

中阶组件 ：**Parts** 部分，属于交互层的组合组件，实现一些特定业务需求的组件，比如TablePart，EditPart，SearchPart等。将其封装暴露出该有的方法和属性，供更高阶的组件调用。

高阶组件 ：**Templates** 部分，属于最上层的组件，页面级的应用，通常是将中阶组件和低阶组件组合使用，来实现某些业务场景的交互和页面。

## 安装

推荐使用 npm 的方式安装，它能更好地和 webpack 打包工具配合使用。

```
npm install
```

## 快速上手

```javascript
import ReactDOM from 'react-dom';
import React , { Component }from 'react';
import {Components, Parts, utils} from 'neo';
const { Buttons, Input, Modal } = Components;
class Info extends Component {
    constructor(props) {
      super(props);
      this.state = {
          confirmDirty: false,
      };
    }
    render(){
        return (<Buttons
                text="confirm"
                type={'primary'}
                style={{'marginTop':'20px'}}
                onClick={() => { Modal.confirm({ title: 'warning', content: 'this is a warning', type: 'small' }, () => { alert('this is sure callback'); }, () => { alert('this is cancle callback'); }); }}
              />)
    }

```

## 效果图

<div>
<img width='30%' src="http://neo-blick.oss-cn-shanghai.aliyuncs.com/neo-1.png?Expires=1560389161&OSSAccessKeyId=TMP.AgFkf5hkLuqlXu5eujLtWKEXzJCd6GwpfE0jw6jPdlAEZWi3bu5D994FxgbFADAtAhUAuWrRqjRlfkYl_EMZtfIA_6_ewF4CFHKqP--JH3MiFCFYd0XW5El8pDTM&Signature=NZd7Dwh%2B2PzqYOQ2qnFOzfF8vN0%3D" />
<img width='30%' src="http://neo-blick.oss-cn-shanghai.aliyuncs.com/neo-2.png?Expires=1560389184&OSSAccessKeyId=TMP.AgFkf5hkLuqlXu5eujLtWKEXzJCd6GwpfE0jw6jPdlAEZWi3bu5D994FxgbFADAtAhUAuWrRqjRlfkYl_EMZtfIA_6_ewF4CFHKqP--JH3MiFCFYd0XW5El8pDTM&Signature=V0b2KKfu3%2FOlo%2BoY69uZ7QcXo1Q%3D" />
<img width='30%' src="http://neo-blick.oss-cn-shanghai.aliyuncs.com/neo-3.png?Expires=1560389235&OSSAccessKeyId=TMP.AgFkf5hkLuqlXu5eujLtWKEXzJCd6GwpfE0jw6jPdlAEZWi3bu5D994FxgbFADAtAhUAuWrRqjRlfkYl_EMZtfIA_6_ewF4CFHKqP--JH3MiFCFYd0XW5El8pDTM&Signature=g3yGk6m2HAZoSgo01ykDBTJEFPo%3D"/>
</div>

<div>
  <img width='30%' src="http://neo-blick.oss-cn-shanghai.aliyuncs.com/neo-4.png?Expires=1560389246&OSSAccessKeyId=TMP.AgFkf5hkLuqlXu5eujLtWKEXzJCd6GwpfE0jw6jPdlAEZWi3bu5D994FxgbFADAtAhUAuWrRqjRlfkYl_EMZtfIA_6_ewF4CFHKqP--JH3MiFCFYd0XW5El8pDTM&Signature=5STg6sRvajy%2BrGvFJY%2BlGMK4wIQ%3D" />
  <img width='30%' src="http://neo-blick.oss-cn-shanghai.aliyuncs.com/neo-5.png?Expires=1560389298&OSSAccessKeyId=TMP.AgFkf5hkLuqlXu5eujLtWKEXzJCd6GwpfE0jw6jPdlAEZWi3bu5D994FxgbFADAtAhUAuWrRqjRlfkYl_EMZtfIA_6_ewF4CFHKqP--JH3MiFCFYd0XW5El8pDTM&Signature=xfP5u9Wh4ZLvKaLZLS6Cg8qHE0I%3D" />
  <img width='30%' src="http://neo-blick.oss-cn-shanghai.aliyuncs.com/neo-6.png?Expires=1560389311&OSSAccessKeyId=TMP.AgFkf5hkLuqlXu5eujLtWKEXzJCd6GwpfE0jw6jPdlAEZWi3bu5D994FxgbFADAtAhUAuWrRqjRlfkYl_EMZtfIA_6_ewF4CFHKqP--JH3MiFCFYd0XW5El8pDTM&Signature=UyoAP6FGtp%2F2v7oJDb0tZJji2L8%3D" />
</div>

<div>
  <img width='30%' src="http://neo-blick.oss-cn-shanghai.aliyuncs.com/neo-7.png?Expires=1560389328&OSSAccessKeyId=TMP.AgFkf5hkLuqlXu5eujLtWKEXzJCd6GwpfE0jw6jPdlAEZWi3bu5D994FxgbFADAtAhUAuWrRqjRlfkYl_EMZtfIA_6_ewF4CFHKqP--JH3MiFCFYd0XW5El8pDTM&Signature=YRR%2Bc6qcMEPpW0UdCEeYrOhfQXI%3D" />
  <img width='30%' src="http://neo-blick.oss-cn-shanghai.aliyuncs.com/neo-8.png?Expires=1560389338&OSSAccessKeyId=TMP.AgFkf5hkLuqlXu5eujLtWKEXzJCd6GwpfE0jw6jPdlAEZWi3bu5D994FxgbFADAtAhUAuWrRqjRlfkYl_EMZtfIA_6_ewF4CFHKqP--JH3MiFCFYd0XW5El8pDTM&Signature=gh3H5Ot0lKu4kHtgVcfdk8sDK%2Bk%3D" />
  <img width='30%' src="http://neo-blick.oss-cn-shanghai.aliyuncs.com/neo-9.png?Expires=1560389349&OSSAccessKeyId=TMP.AgFkf5hkLuqlXu5eujLtWKEXzJCd6GwpfE0jw6jPdlAEZWi3bu5D994FxgbFADAtAhUAuWrRqjRlfkYl_EMZtfIA_6_ewF4CFHKqP--JH3MiFCFYd0XW5El8pDTM&Signature=nYmy4PFB8DI3bvAqBHYdTyWeymg%3D" />
</div>
