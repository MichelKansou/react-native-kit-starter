import React from 'react';
import { View, Text, Image, Platform} from 'react-native';
import { Router, Scene, Switch } from 'react-native-router-flux';
import { connect } from 'react-redux';

// Config
import styles from './styles';
import images from './images';

// Routes
import Home from '../routes/Home';
import Profile from '../routes/Home2';
import Auth from '../routes/Auth';

const RouterWithRedux = connect()(Router);

const TabIcon = ({selected, iconSource}) => {
    let selectedAndoidTab = null;
    if (Platform.OS === 'android' && selected) {
        selectedAndoidTab = <Text style={styles.selectedAndoidTab}></Text>;
    }
    return (
        <View style={styles.TabIconContainer}>
            <Image style={selected ? styles.selectedIcon : styles.icon} source={iconSource} />
            {selectedAndoidTab}
        </View>
    )
};

class Routes extends React.Component {

    componentWillReceiveProps(nextProps) {
        if (nextProps.connected) {

        }
    }

    render() {
        const { connected } = this.props;

        return (
            <RouterWithRedux>
                <Scene key="root"
                    tabs={true}
                    component={connect(state => ({account: state.account}))(Switch)}
                    selector={(props)=> props.account.get('connected') ? "tab_bar" : "login"}
                    >
                    <Scene key="login" component={Auth} hideNavBar={true}/>
                    <Scene key="tab_bar" tabs={true} tabBarStyle={(Platform.OS === 'android') ? styles.androidtabBarStyle : styles.iOSTabBarStyle}>
                        <Scene key="home" component={Home} title="Home" hideNavBar={(Platform.OS === 'android')} iconSource={images.icons.home} icon={TabIcon} renderBackButton={null}/>
                        <Scene key="profile" component={Profile} title="Profile" hideNavBar={(Platform.OS === 'android')} iconSource={images.icons.profile} icon={TabIcon}/>
                        <Scene key="settings" component={Profile} title="Settings" hideNavBar={(Platform.OS === 'android')} iconSource={images.icons.settings} icon={TabIcon}/>
                    </Scene>
                </Scene>
            </RouterWithRedux>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        connected: state.account.get('connected')
    };
};

export default connect(mapStateToProps)(Routes);
