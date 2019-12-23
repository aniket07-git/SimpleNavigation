import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Home extends React.Component {
    render(){
    return (
    <View style={styles.container}>
      <Text>Hey Bro !! </Text>
      <Button
        title= "Go to follow page"
        onPress = {()=>{
            this.props.navigation.navigate("Follow")
        }}
      />
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
