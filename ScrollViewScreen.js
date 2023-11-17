import React from 'react';
import { View, Text, ScrollView, Button, StyleSheet } from 'react-native';
import { guestsData } from './FlatListScreen';

const getInitials = (name) => {
  const nameArray = name.split(' ');
  return nameArray.map((word) => word[0]).join('').toUpperCase();
};

const ScrollViewScreen = ({ navigation }) => {
  return (
    <View>
      <Button
        title="Use FlatList"
        onPress={() => navigation.navigate('FlatList')}
      />
      <ScrollView>
        {guestsData.map((item) => (
          <View key={item.id} style={styles.itemContainer}>
            <View style={styles.avatarContainer}>
              <Text style={styles.avatarText}>{getInitials(item.name)}</Text>
            </View>
            <View>
              <Text style={styles.boldText}>{item.name}</Text>
              <Text style={styles.smallText}>{item.address}</Text>
            </View>
            <Text style={styles.dots}>{'\u2022\u2022\u2022'}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft:12,
    marginTop:10,
  },
  avatarContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#00ace6',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  avatarText: {
    color: 'white',
    fontWeight: 'bold',
  },
  boldText: {
    fontWeight: 'bold',
  },
  smallText: {
    fontSize: 12,
  },
  dots: {
    marginLeft: 'auto',
    marginRight: 15,
    fontSize: 20,
  },
});

export default ScrollViewScreen;
