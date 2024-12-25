```javascript
import React, { memo } from 'react';
import { FlatList, StyleSheet, View, Text, Separator } from 'react-native';

const Item = memo(({ item }) => (
  <View style={styles.item}>
    <Text>{item.title}</Text>
  </View>
));

const data = Array.from({ length: 1000 }, (_, i) => ({ id: i, title: `Item ${i}` }));

const FlatListBugSolution = () => (
  <FlatList
    data={data}
    keyExtractor={(item) => item.id}
    renderItem={({ item }) => <Item item={item} />}
    ItemSeparatorComponent={() => <Separator style={styles.separator} />}
  />
);

export default FlatListBugSolution;

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  separator: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 5,
  },
});
```