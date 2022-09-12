import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const Search = (props) => {
    const { searchMovies = Function.prototype } = props

    const [search, setSearch] = useState('')
    const [type, setType] = useState('')

    const handeFilter = (e) => {
        setType(e.target.dataset.type);
        searchMovies(search, e.target.dataset.type)

    }
    return (
        <View style={styles.body}>
            <TextInput
            style={styles.input}
                placeholder='Введите название фильма'
                value={search}
                onChangeText={(text) => setSearch(text)}
            />
            <TouchableOpacity 
           
            onPress={() => searchMovies(search, type)}
            >
            <Text style={styles.btnText}>Поиск</Text>
            </TouchableOpacity>
        </View>

    )
}

export default Search

const styles = StyleSheet.create({
    body:{
        flexDirection: 'row',
        marginHorizontal: 20,
        marginVertical: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    input:{
        width: '70%',
        fontSize: 20
    },
    btnText:{
       fontSize: 22,
       borderWidth: 1,
       padding: 5,
       borderRadius: 5
    }
})