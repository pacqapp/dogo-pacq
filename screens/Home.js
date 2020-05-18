import React from 'react';
import { Text, View, Button} from 'react-native';

export const Home = ({ navigation }) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>From home</Text>
        <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
        />
        <Button
        title="Go to Chat"
        onPress={() => navigation.navigate('Chat')}
        />
      </View>
    );
  }


  