import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Resume = () => {
  return (
    <View style={styles.body}>
      <Text style={styles.text}>Привет, меня зовут Влад. </Text>
      <Text style={styles.text}>По тестовому заданию сделал поиск фильмов с одного АПИ. Там запросы на название,картинки и год выпуска фильма. Вводите пожалуйста название фильмов на английском. </Text>
      <Text style={styles.text}>Сейчас заинтересовала мобильная разработка и ваша стажировка на которой хочу получить новый опыт и знания для дальнейшей работы. Примеры кода и работ можете посмотреть на моей гитхаб странице</Text>
    </View>
  )
}

export default Resume

const styles = StyleSheet.create({
    body:{
        marginTop: -50,
        marginHorizontal: 20,
        fontSize: 20,
        backgroundColor: '#8f9ebd',
        borderRadius: 20,
        padding: 15
        
    },
    text:{
        lineHeight: 26,
        fontSize: 18
    }
})