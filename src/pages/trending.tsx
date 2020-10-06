import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { Feather as Icon } from '@expo/vector-icons';

const Trending = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Icon name="arrow-left" size={25} color="#9932CC" />
      </TouchableOpacity>
      
      <Text>
        Trending
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default Trending
