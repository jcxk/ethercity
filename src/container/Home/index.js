import aframe from 'aframe';
import {Entity, Scene} from 'aframe-react';
import React from 'react';
import {connect} from 'react-redux';
import {AppBar} from "material-ui";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Drawer from 'material-ui/Drawer';
import Form from './Form';
import * as AppActions from "../../actions/app";

export class Home extends React.Component {

 constructor(props) {
        super(props);
        this.state = {open: false};
        this.handleToggle = this.handleToggle.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.addHouse = this.addHouse.bind(this);
        console.log(this.props);
    }

    handleToggle() {
        this.setState({open: !this.state.open});
    }

    handleClose() {
        this.setState({open: true});
    }

    componentDidMount() {
        //const { dispatch } = this.props;

        this.props.dispatch(AppActions.fetchCity());
    }

    addHouse(values) {
        console.log(values);
        this.props.dispatch(AppActions.addHouse(values));
    }
    render() {

        if (this.props.city !== undefined) {
            return (
            <div>
                        <MuiThemeProvider>
                                <div>
                                    <AppBar
                                        onLeftIconButtonTouchTap={this.handleToggle}
                                        title="ETHereum City"
                                    />
                                    <Drawer width="20%"
                                            docked={true}
                                            open={this.state.open}
                                            onRequestChange={(open) => this.setState({open})}
                                    >
                                        <Form onSubmit={this.addHouse}/>
                                    </Drawer>
                                </div>
                            </MuiThemeProvider>
                    <Scene>
                        <a-assets>
                            <a-asset-item id="road_asset_obj" src="/assets/obj/base_street1.obj"/>
                            <a-asset-item id="road_asset_mtl" src="/assets/obj/base_street1.mtl"/>
                            <a-asset-item id="house1_obj" src="/assets/obj/bld_house1.obj"/>
                            <a-asset-item id="house1_mtl" src="/assets/obj/bld_house1.mtl"/>
                            <a-asset-item id="grass_obj" src="/assets/obj/base_grass1.obj"/>
                            <a-asset-item id="grass_mtl" src="/assets/obj/base_grass1.mtl"/>
                            <img alt="ground" id="groundTexture"
                                 src="https://cdn.aframe.io/a-painter/images/floor.jpg"/>
                            <img alt="sky" id="skyTexture" src="https://cdn.aframe.io/a-painter/images/sky.jpg"/>
                        </a-assets>


                        <Entity primitive="a-plane" src="#groundTexture" rotation="-90 0 0" height="100" width="100"/>
                        <Entity primitive="a-light" type="ambient" color="#445451"/>
                        <Entity primitive="a-light" type="point" intensity="2" position="2 4 4"/>
                        <Entity primitive="a-sky" height="2048" radius="30" src="#skyTexture" theta-length="90"
                                width="2048"/>
                        <Entity particle-system={{preset: 'snow', particleCount: 2000}}/>
                        <Entity text={{value: 'Hello, A-Frame React!', align: 'center'}}
                                position={{x: 0, y: 2, z: -1}}/>

                        <Entity id="city" position={{x: 0, y: 0, z: 0}}>
                            {this.props.city.map((item) => {
                                let objModel = `obj: #${item.asset_name}_obj; mtl: #${item.asset_name}_mtl;`;

                                return [
                                    <Entity position="0 0 0.4" scale="0.01 0.01 0.01"
                                            obj-model="obj: #road_asset_obj; mtl: #road_asset_mtl;"></Entity>,
                                    <Entity position={item.pos} scale="0.01 0.01 0.01"
                                            obj-model="obj: #grass_obj; mtl: #grass_mtl;"></Entity>,
                                    <Entity click-drag position={item.pos} scale="0.004 0.004 0.004"
                                            obj-model={objModel}></Entity>
                                ]
                            })}

                        </Entity>

                        <a-entity id="cameraWrapper" position="-1.4 1.41 2.92"
                                  rotation="-12.834254610930437 -16.844959176846217 0">
                            <a-entity id="camera" touch-controls camera look-controls wasd-controls="fly: true"></a-entity>
                        </a-entity>

                    </Scene>
                    </div>
            );
        }
        else {
            return <p>Loading</p>
        }
    }
}
function mapStateToProps(state) {
    return {
        city: state.app.objects
    };
}
export default connect(mapStateToProps)(Home);