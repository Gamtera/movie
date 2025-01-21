import React from 'react';
import { View, FlatList, StyleSheet, SafeAreaView, Dimensions } from 'react-native';
import MovieCard from '../components/MovieCard';
import { movies } from '../data/mockData';

const numColumns = 3;
const screenWidth = Dimensions.get('window').width;
const itemWidth = screenWidth / numColumns;

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        numColumns={numColumns}
        renderItem={({ item }) => (
          <MovieCard
            title={item.title}
            imageUrl={item.imageUrl}
            rating={item.rating}
            width={itemWidth}
          />
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});

export default HomeScreen;