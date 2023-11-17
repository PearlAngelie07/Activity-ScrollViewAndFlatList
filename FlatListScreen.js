import React from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';

export const guestsData = [
  { id: '1', name: 'Eren Yeager', address: 'Shiganshina District' },
  { id: '2', name: 'Mikasa Ackerman', address: 'Shiganshina District ' },
  { id: '3', name: 'Armin Arlert', address: 'Shiganshina District ' },
  { id: '4', name: 'Sasha Braus', address: 'Dauper Village' },
  { id: '5', name: 'Connie Springer', address: 'Ragako Village' },
  { id: '6', name: 'Jean Kirschtein', address: 'Trost District' },
  { id: '7', name: 'Hange Zoe', address: 'Wall Rose' },
  { id: '8', name: 'Historia Reiss', address: 'Wall Sheena' },
  { id: '9', name: 'Erwin Smith', address: 'Wall Rose' },
  { id: '10', name: 'Reiner Braun', address: 'Liberio, Marley' },
  { id: '11', name: 'Annie Leonhart', address: 'Liberio, Marley' },
  { id: '12', name: 'Bertholdt Hoover', address: 'Liberio, Marley' },
  { id: '13', name: 'Levi Ackerman', address: 'Underground City' },
  { id: '14', name: 'Kenny Ackerman', address: 'Underground City' },
  { id: '15', name: 'Pieck Finger', address: 'Liberio, Marley' },
  { id: '16', name: 'Zeke Yeager', address: 'Liberio, Marley' },
  { id: '17', name: 'Grisha Yeager', address: 'Liberio, Marley' },
  { id: '18', name: 'Tom Ksaver', address: 'Liberio, Marley' },
  { id: '19', name: 'Floch Forster', address: 'Trost District' },
  { id: '20', name: 'Hitch Dreyse', address: 'Stohess District' },
];

const FlatListScreen = ({ navigation }) => {
  return (
    <View>
      <Button
        title="Use ScrollView"
        onPress={() => navigation.navigate('ScrollView')}
      />
      <FlatList
        data={guestsData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.boldText}>{item.name}</Text>
            <Text style={styles.smallText}>{item.address}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    marginLeft:15,
    marginTop:15,
  },
  boldText: {
    fontWeight: 'bold',
  },
  smallText: {
    fontSize: 12,
  },
});

export default FlatListScreen;
