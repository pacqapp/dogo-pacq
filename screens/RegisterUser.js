import React from 'react'
import { View, Text, Image, ScrollView, TextInput } from 'react-native'

export const RegisterUser = () => {
  return (
    <View><ScrollView>
    <View>
      <Text>Some more text</Text>
      <Image source={{uri: "https://reactnative.dev/docs/assets/p_cat2.png"}} style={{width: 200, height: 200}}/>
    </View>
    <TextInput
      style={{
        height: 40,
        width: 600,
        borderColor: 'gray',
        borderWidth: 0.5
      }}
      defaultValue="Name"
    />
    <TextInput
      style={{
        height: 40,
        width: 600,
        borderColor: 'gray',
        borderWidth: 0.5
      }}
      defaultValue="Age"
    />
    <TextInput
      style={{
        height: 40,
        width: 600,
        borderColor: 'gray',
        borderWidth: 0.5
      }}
      defaultValue="Description"
    />
  </ScrollView></View>
    )
}

