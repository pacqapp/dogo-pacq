import React from 'react'
import { View, ScrollView, TextInput, Text, Button} from 'react-native'
import PicturesScreen from '../components/UserCamera'

export const RegisterUser = ({ navigation }) => {
  return (
    <ScrollView>
    <View>
      <PicturesScreen></PicturesScreen>
    </View>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Name</Text>
    <TextInput
      style={{
        height: 40,
        padding: 20,
        borderColor: 'gray',
        borderWidth: 0.5
      }}
    />
    <Text>Age</Text>
    <TextInput
      style={{
        height: 40,
        padding: 20,
        borderColor: 'gray',
        borderWidth: 0.5
      }}
    /><Text>Description</Text>
    <TextInput
      style={{
        height: 40,
        padding: 20,
        borderColor: 'gray',
        borderWidth: 0.5
      }}
    />
    <Button
    title="Save"
    onPress={() => navigation.navigate('Profile')}
    />
    </View>
  </ScrollView>
    )
}

