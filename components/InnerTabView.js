import * as React from 'react';
import { View, StyleSheet, Dimensions, SafeAreaView } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';

const FirstRoute = () => (
    <View style={[styles.scene, { backgroundColor: '#ff4081' }]} />
);

const SecondRoute = () => (
    <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
);

const initialLayout = { width: Dimensions.get('window').width };

export default InnerTabView = () => {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: 'First' },
        { key: 'second', title: 'Second' },
    ]);

    const renderScene = SceneMap({
        first: FirstRoute,
        second: SecondRoute,
    });

    return (
        <View style={{ flex: 1 }}>
            <SafeAreaView />
            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={initialLayout}
            />
            <SafeAreaView />
        </View>
    );
}

const styles = StyleSheet.create({
    scene: {
        flex: 1,
    },
});

// import React, { Component } from 'react'
// import { Dimensions, Text, View, StyleSheet } from 'react-native'
// import { TabView, SceneMap } from 'react-native-tab-view';

// const initialLayout = { width: panelWidth };

// const FirstRoute = () => (
//     <View style={[styles.scene, { backgroundColor: '#ff4081' }]}>
//         <Text>first</Text>
//     </View>
// );

// const SecondRoute = () => (
//     <View style={[styles.scene, { backgroundColor: '#673ab7' }]} >
//         <Text>second</Text>
//     </View>
// );

// const windowHeight = Dimensions.get('window').height;
// const panelWidth = Dimensions.get('window').width - 30;
// const panelHight = windowHeight - 150;
// export default class InnerTabView extends Component {
//     state = {
//         index: 0,
//         routes: [
//             { key: 'first', title: 'First' },
//             { key: 'second', title: 'Second' },
//         ],
//     }

//     renderScene = () => SceneMap({
//         first: FirstRoute,
//         second: SecondRoute,
//     });

//     render() {
//         const { index, routes } = this.state;

//         return (
//             <TabView
//                 navigationState={{ index, routes }}
//                 renderScene={this.renderScene}
//                 onIndexChange={(index) => this.setState({ index })}
//                 initialLayout={initialLayout}
//             />
//         )
//     }
// }

// const styles = StyleSheet.create({
//     centeredView: {
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//         // marginTop: 22,
//     },
//     modalView: {
//         // margin: 20,
//         width: panelWidth,
//         height: panelHight,
//         backgroundColor: "white",
//         borderRadius: 20,
//         padding: 35,
//         alignItems: "center",
//         shadowColor: "#000",
//         shadowOffset: {
//             width: 0,
//             height: 2
//         },
//         shadowOpacity: 0.5,
//         shadowRadius: 10,
//         elevation: 5
//     },
//     openButton: {
//         backgroundColor: "#F194FF",
//         borderRadius: 20,
//         padding: 10,
//         elevation: 2
//     },
//     textStyle: {
//         color: "white",
//         fontWeight: "bold",
//         textAlign: "center"
//     },
//     modalText: {
//         marginBottom: 15,
//         textAlign: "center"
//     },
//     scene: {
//         flex: 1,
//     },

// });
