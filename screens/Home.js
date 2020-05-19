import React from 'react'
import { View, Button, TouchableOpacity} from 'react-native'
import { UserCard } from '../components/UserCard'


export const Home = ({ navigation }) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

        <Button
        title="Profile"
        onPress={() => navigation.navigate('Profile')}
        />
        <Button
        title="Chat"
        onPress={() => navigation.navigate('Chat')}
        />
       <View>
        <UserCard
        coverImage="https://i.pinimg.com/originals/ef/b9/e3/efb9e3d537019fbcfef062e4aee92184.jpg"
        thumbnailUrl="https://i.pinimg.com/originals/37/a0/4b/37a04b46e13b3b9729a60f6a61b409a9.jpg"
        title="The dog"
        secondaryText="seniore"
         />

        <UserCard
        coverImage="https://i.pinimg.com/originals/ef/b9/e3/efb9e3d537019fbcfef062e4aee92184.jpg"
        thumbnailUrl="https://i.pinimg.com/originals/37/a0/4b/37a04b46e13b3b9729a60f6a61b409a9.jpg"
        title="The dog"
        secondaryText="seniore"
         />

        <UserCard
        coverImage="https://i.pinimg.com/originals/ef/b9/e3/efb9e3d537019fbcfef062e4aee92184.jpg"
        thumbnailUrl="https://i.pinimg.com/originals/37/a0/4b/37a04b46e13b3b9729a60f6a61b409a9.jpg"
        title="The dog"
        secondaryText="seniore"
         />
        </View>
      </View>
    );
  }


  