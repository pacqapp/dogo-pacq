import React from 'react'
import { View, Button, TouchableOpacity} from 'react-native'
import { UserCard } from '../components/UserCard'
import PicturesScreen from '../components/UserCamera'


export const Home = ({ navigation }) => {
    return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-around' }}>
       <View style={{ flex: 1, flexDirection: 'row', padding: 10, margin: 10 }}>
       <PicturesScreen></PicturesScreen>
       <Button
        title="Profile"
        onPress={() => navigation.navigate('Profile')}
        />
        <Button
        title="Chat"
        onPress={() => navigation.navigate('Chat')}
        /></View>
       <View>
        <UserCard
        coverImage="https://i.kym-cdn.com/photos/images/facebook/001/607/299/939.jpeg"
        thumbnailUrl="https://i.pinimg.com/originals/37/a0/4b/37a04b46e13b3b9729a60f6a61b409a9.jpg"
        title="The dog"
        secondaryText="seniore"
         />

        <UserCard
        coverImage="https://secureservercdn.net/50.62.174.113/evq.339.myftpupload.com/wp-content/uploads/2019/07/dogs-2195708_640.jpg"
        thumbnailUrl="https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg"
        title="The Boston"
        secondaryText="yolo"
         />
        <UserCard
        coverImage="https://static.boredpanda.com/blog/wp-content/uploads/2013/12/tuna-melts-my-heart-raw.jpg"
        thumbnailUrl="https://i.pinimg.com/originals/ef/b9/e3/efb9e3d537019fbcfef062e4aee92184.jpg"
        title="THE dog"
        secondaryText="seniore"
         />
        </View>
      </View>
    );
  }


  