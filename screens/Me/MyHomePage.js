import React, {Component} from 'react';
import {StyleSheet} from 'react-native'
import {Container, View, Thumbnail, Text} from "native-base";

class MyHomePage extends Component {
    render() {
        return (
            <Container>
                <View>
                    <View>
                        <Thumbnail large source={{uri: '/assets/images/robot-dev.png'}} />
                    </View>
                    <View>
                        <Text></Text>
                    </View>
                </View>
            </Container>
        );
    }
}


const style = StyleSheet.create({
    accountImage: {
        flex: 'none'
    }
});

export default MyHomePage;