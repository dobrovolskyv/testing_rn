import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

const Skills = () => {
    const skills=[{key: '-HTML: методология БЭМ, адаптивная,валидная, кроссбраузерная верстка'},
    {key: '-CSS: flex/grid, работа с svg, препроцессор SCSS, анимации(transform, transition, Parallax, MagicScroll,SVG, keyframe)'},
    {key: '-MetrializeCSS/Bootstrap '},
    {key: '-JavaScript ES6: работа с DOM, объектами, массивами, ООП,REST API, localStorage, EventLoop'},
    {key: '-GULP(базовые настройки)'},
    {key: '-Figma'},
    {key: '-React'},
    {key: 'и пакет 3D (blnder, substance painter, marmoset)'}
    ]

  return (
      <View style={styles.body}>
          <Text style={styles.skills}>My skills</Text>
          <View style={styles.row}>
              <View style={styles.marginRow}>
                  <Ionicons style={styles.img} name="ios-logo-html5" size={50} color="black" />
                  <Ionicons style={styles.img} name="logo-css3" size={50} color="black" />
                  <Ionicons style={styles.img} name="logo-sass" size={50} color="black" />
              </View>
              <View style={styles.marginRow}>
                  <Ionicons style={styles.img} name="logo-javascript" size={50} color="black" />
                  <Ionicons style={styles.img} name="logo-react" size={50} color="black" />
                  <Ionicons style={styles.img} name="logo-github" size={50} color="black" />
              </View>
          </View>
            <FlatList 
           data={skills}
            renderItem={({item})=> <Text style={styles.list} >
                {item.key}
            </Text>}
            />
          
      </View>
  )
}

export default Skills

const styles = StyleSheet.create({
    body:{
        marginTop: 70,
        alignItems: 'center'
    },
    row:{
        flexDirection: 'row',
      
    },
    marginRow:{
        margin: 50
    },
    img:{
        paddingTop: 10
    },
    skills:{
        fontSize: 40
    },
    list:{
        lineHeight: 26,
        fontSize: 18,
        marginHorizontal: 20
    }
   
})