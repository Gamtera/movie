import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const MovieCard = ({ title, imageUrl, width }) => {
  return (
    <TouchableOpacity style={[styles.card, { width: width - 4 }]}>
      <Image
        source={{ uri: imageUrl }}
        style={[styles.image, { width: width - 4 }]}
        defaultSource={require('../../assets/placeholder.png')}
        resizeMode="cover"
        resizeMethod="resize"
      />
      <View style={styles.info}>
        <Text style={styles.title} numberOfLines={1}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 2,
  },
  image: {
    aspectRatio: 2/3,
    borderRadius: 8,
    backgroundColor: '#ddd',
  },
  info: {
    padding: 4,
  },
  title: {
    fontSize: 12,
    fontWeight: '500',
    textAlign: 'center',
  },
});

export default MovieCard;
