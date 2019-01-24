import ReactDOM from 'react-dom';
import React , { Component }from 'react';
import {Components, utils} from '../../WAP';
import { Map, Marker, Polygon } from 'react-amap';
import Heatmap from 'react-amap-plugin-heatmap';
import Geolocation from 'react-amap-plugin-geolocation';

const {
    Button,
    Grid,
    Row,
    Col,
    Search
} = Components;
class MapDemo extends Component {
    constructor(props) {
      super(props);
      this.state = {
        visible: true,
        draggable: false,
        path: [{longitude: 121.472634, latitude: 31.231706},
            {longitude: 121.473644, latitude: 31.241716},
            {longitude: 121.474654, latitude: 31.243726},
            {longitude: 121.486543, latitude: 31.246726}],
        path1: [{longitude: 121.507634, latitude: 31.227706},
            {longitude: 121.508644, latitude: 31.237716},
            {longitude: 121.52654, latitude: 31.242726},
            {longitude: 121.53654, latitude: 31.238726},
            {longitude: 121.548654, latitude: 31.236726}]
      }
      this.amapEvents={
        created: (mapInstance) => {
          console.log(mapInstance, mapInstance.getCenter());
        }
      };
      this.markerEvents = {
        created: (markerInstance) => {
          console.log(markerInstance);
        }
      }
      this.geolocaEvents = {
        created: (geoloaction) => {
        console.log(geoloaction, geoloaction.getCityInfo());
        }
      }
      this.events = {
        click: () => {console.log('clicked')},
        created: (ins) => {console.log(ins)},
        mouseover: () => {console.log('mouseover')},
        dblclick: () => {console.log('dbl clicked')}
      };
      this.markerPosition = { longitude: 121.472644, latitude: 31.231706 };
      this.markerPosition1 = { longitude: 121.522644, latitude: 31.236706 };
      this.doSearch = this.doSearch.bind(this);
    }
    componentWillReceiveProps(next) {
      const {plugin, service} = next;
   
    }
    doSearch(value) {
      console.log(value);
      this.setState({
        path1: [{longitude: 121.607634, latitude: 31.227706},
          {longitude: 121.408644, latitude: 31.237716},
          {longitude: 121.22654, latitude: 31.242726},
          {longitude: 121.33654, latitude: 31.238726},
          {longitude: 121.448654, latitude: 31.236726}]
      })
    }
    render() {

    const points = [
        {"lng":121.472644,"lat":31.231706,"count":10},
        {"lng":121.472644,"lat":31.231706,"count":11},
        {"lng":121.472644,"lat":31.231706,"count":12},
        {"lng":121.472644,"lat":31.231706,"count":13},
        {"lng":121.472644,"lat":31.231706,"count":14},
        {"lng":121.472644,"lat":31.231706,"count":15},
        {"lng":121.472644,"lat":31.231706,"count":16}
    ];
     
    // config props
    const visible = true; 
    const radius = 30; 
    const gradient = {
      '0.4':'rgb(0, 255, 255)',
      '0.65':'rgb(0, 110, 255)',
      '0.85':'rgb(100, 0, 255)',
      '1.0':'rgb(100, 0, 255)'
    };
    const zooms = [3, 18];
    const dataSet = {
      data: points,
      max: 100
    }
     
    const pluginProps = {
      visible,
      radius,
      gradient,
      zooms,
      dataSet,
    }
    const geoloaProps = {
      enableHighAccuracy:true,
      timeout: 10000,
      showButton: true
    }
        return(
          <section>
              <Row>
                  <Col span={24} style={{position: 'relative'}}>
                  <Search 
                    backIconOption={{text: '上海'}} 
                    inputOption={{icon: {
                      iconName: 'ios-search-strong',
                      iconColor: '#000',
                      size: '100%',
                      style: {padding: 0}
                    }}} 
                    buttonOption={{text: '更改', type: 'link'}} 
                    searchClick={(v)=>{this.doSearch(v)}}
                    back={()=>{ console.log('back'); }}
                  />
                  <div id="app" style={{width: '100vh', height: '70vh'}}>
                    <Map zoom={12} amapkey={'c9b175d31a0608208a13f30b28ec4ce2'} events={this.amapEvents} >
                        <Heatmap {...pluginProps} />
                        <Marker position={this.markerPosition} events={this.markerEvents} >
                            <div style={{background: '#3DBDA5',color: '#fff',padding: '5px', fontSize: '70%', minWidth: '60px'}}>静安寺商圈</div> 
                        </Marker>
                        <Marker position={this.markerPosition1} events={this.markerEvents} >
                            <div style={{background: '#FD7F1A',color: '#fff',padding: '5px', fontSize: '70%', minWidth: '60px', position: 'relative', textAlign: 'center'}}>陆家嘴商圈
                            <span className="loactionSpan">
                            </span>
                            </div>
                        </Marker>
                        <Polygon
                            events={this.events}
                            path={this.state.path}
                            draggable={this.state.draggable}
                            visible={this.state.visible}
                            style={{strokeColor: '#3DBDA5', strokeOpacity: '0.8', strokeWeight: '1', fillColor: '#3DBDA5', fillOpacity: '0.3', strokeStyle: '', strokeDasharray:'' }}
                        />
                        <Polygon
                            events={this.events}
                            path={this.state.path1}
                            draggable={this.state.draggable}
                            visible={this.state.visible}
                            style={{strokeColor: '#FB803B', strokeOpacity: '0.8', strokeWeight: '1', fillColor: '#FB803B', fillOpacity: '0.3', strokeStyle: '', strokeDasharray:'' }}
                        />
                        <Geolocation {...geoloaProps} events={this.geolocaEvents} />
                    </Map>
                  </div>
                  </Col>
              </Row>
          </section>
        );
    }
}

export default MapDemo;