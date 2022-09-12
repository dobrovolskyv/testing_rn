import { StyleSheet, Text, View, Linking, Button } from 'react-native'
import React from 'react'

const Contact = () => {
    const linkTelegram = ()=>{Linking.openURL('https://t.me/dobrovolsky_v')}
  return (
    <View style={styles.body}>
        <View style={styles.cyrcle}></View>
      <Text style={styles.text} onPress={linkTelegram}>Связаться со - <Text style={styles.span}>мной</Text></Text>
      
    </View>
  )
}

export default Contact

const styles = StyleSheet.create({
    body:{
        height: 200,
        marginVertical: 100,
        borderRadius: 50,
        marginHorizontal: 80,
        
    },
    text:{
        fontSize: 35,
        
    },
    span:{
        color: '#f59b00'
    },
    cyrcle:{
        position: 'absolute',
        left: -20,
        top: -10,
        backgroundColor: '#8f9ebd',
        borderRadius: 50,
        width: 100,
        height: 100

    }
})