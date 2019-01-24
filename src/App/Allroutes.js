import React, {Component} from 'react'
import { Router, Route, hashHistory, IndexRedirect } from 'react-router';
import AllComponent from './AllComponent'
import Menu from './components/Menu'

import RadioDoc from './components/Radio-doc'
import SwitchDoc from './components/Switch-doc'

import ProgressDoc from './components/Progress-doc'
import TabDoc from './components/Tab-doc'
import CollapseDoc from './components/Collapse-doc'
import LabelDoc from './components/Label-doc'
import TreeDoc from './components/Tree-doc'
import CarouselDoc from './components/Carousel-doc'
import FileUpDoc from './components/FileUp-doc'
import ListDoc from './components/List-doc'
import DatePickerDoc from './components/DatePicker-doc'
import VerifyCodeDoc from './components/VerifyCode-doc'
import ActionSheetDoc from './components/ActionSheet-doc'
import PopSelectDoc from './components/PopSelect-doc'
import RateDoc from './components/Rate-doc'
import HashWordsDoc from './components/HashWords-doc'
import DashBoardDoc from './components/DashBoard-doc'

const Bottons = (location, cb) => {
  require.ensure([], require => {
      cb(null, require('./components/Buttons').default)
  },'Bottons')
};

const MenuDoc = (location, cb) => {
  require.ensure([], require => {
      cb(null, require('./components/Menu-doc').default)
  },'MenuDoc')
};

const GridDoc = (location, cb) => {
  require.ensure([], require => {
      cb(null, require('./components/Grid-doc').default)
  },'GridDoc')
};

const InputDoc = (location, cb) => {
  require.ensure([], require => {
      cb(null, require('./components/Input-doc').default)
  },'InputDoc')
};

const IconsDoc = (location, cb) => {
  require.ensure([], require => {
      cb(null, require('./components/Icons-doc').default)
  },'IconsDoc')
};

const ConfirmDoc = (location, cb) => {
  require.ensure([], require => {
      cb(null, require('./components/Confirm-doc').default)
  },'ConfirmDoc')
};

const PopOverDoc = (location, cb) => {
  require.ensure([], require => {
      cb(null, require('./components/PopOver-doc').default)
  },'PopOverDoc')
};

const ToatserDoc = (location, cb) => {
  require.ensure([], require => {
      cb(null, require('./components/Toatser-doc').default)
  },'ToatserDoc')
};

const PullRefreshDoc = (location, cb) => {
  require.ensure([], require => {
      cb(null, require('./components/PullRefresh-doc').default)
  },'PullRefreshDoc')
};

const LoadMoreDoc = (location, cb) => {
  require.ensure([], require => {
      cb(null, require('./components/LoadMore-doc').default)
  },'LoadMoreDoc')
};

const StepDoc = (location, cb) => {
  require.ensure([], require => {
      cb(null, require('./components/Step-doc').default)
  },'StepDoc')
};

class MyRouter extends Component{
  constructor(props) {
    super(props);
  }
  render() {
    return (
    <Router history={hashHistory}>
      <Route path={'/'} component={AllComponent} >
        <IndexRedirect to="/component/ComponentLists" />
      </Route>
      <Route path={'component'} component={AllComponent} >
        <Route path={'Button'} getComponent={Bottons} />
        <Route path={'ComponentLists'} component={ListDoc} />
        <Route path={'Menus'} component={Menu} />
        <Route path={'Confirm'} getComponent={ConfirmDoc} />
        <Route path={'Grid'} getComponent={GridDoc} />
        <Route path={'Input'} getComponent={InputDoc} />
        <Route path={'Radio&Checkbox'} component={RadioDoc} />
        <Route path={'Switch'} component={SwitchDoc} />
        <Route path={'Toaser'} getComponent={ToatserDoc} />
        <Route path={'Icons'} getComponent={IconsDoc} />
        <Route path={'Progress'} component={ProgressDoc} />
        <Route path={'Tab'} component={TabDoc} />
        <Route path={'Collapse'} component={CollapseDoc} />
        <Route path={'Label'} component={LabelDoc} />
        <Route path={'Tree'} component={TreeDoc} />
        <Route path={'Carousel'} component={CarouselDoc} />
        <Route path={'FileUp'} component={FileUpDoc} />
        <Route path={'Menu'} getComponent={MenuDoc} />
        <Route path={'PopOver'} getComponent={PopOverDoc} />
        <Route path={'VerifyCode'} component={VerifyCodeDoc} />
        <Route path={'DatePicker'} component={DatePickerDoc} />
        <Route path={'ActionSheet'} component={ActionSheetDoc} />
        <Route path={'PopSelect'} component={PopSelectDoc} />
        <Route path={'Rate'} component={RateDoc} />
        <Route path={'HashWords'} component={HashWordsDoc} />
        <Route path={'DashBoard'} component={DashBoardDoc} />
        <Route path={'PullRefresh'} getComponent={PullRefreshDoc} />
        <Route path={'LoadMore'} getComponent={LoadMoreDoc} />
        <Route path={'Step'} getComponent={StepDoc} />
      </Route>
    </Router>
    )
  }
}
export default MyRouter
