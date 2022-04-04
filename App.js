import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  RefreshControl,
  SectionList,
  FlatList,
  Button,
  linking,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const App = () => {

  const [Items, setItems] = useState([
    {name: 'Item 1' },
    {name: 'Item 2' },
    {name: 'Item 3' },
    {name: 'Item 4' },
    {name: 'Item 5' },
    {name: 'Item 6' },
    {name: 'Item 7' },
    {name: 'Item 8' },
    {name: 'Item 9' },
    {name: 'Item 27' },
    {name: 'Item 78' },
  ]);
  const [Refreshing, setRefreshing] = useState(false);
  const [DATA, setDATA] = useState([
    {
      title: 'Title 1',
      data: ['Item 1-1', 'Item 1-2'],
    }
  ])

  const onRefresh = () => {
    setRefreshing(true);
    const num = DATA.length + 1
    setDATA([...DATA, {title: 'Title ' + num.toString(), data: ['Item ' + num.toString() + '-1','Item ' + num.toString() + '-2'],}]);
    setRefreshing(false);
  }

  return (
    <SectionList
    keyExtractor={(item,index)=>index.toString()}
    sections={DATA}
    renderItem={({item})=> (
      <View style={styles.item2}>
          <Text style={styles.item2}>{item}</Text>
      </View>
      )}
      renderSectionHeader={({section})=>(
        <View style={styles.item}>
          <Text style={styles.text}>{section.title}</Text>
        </View>
      )}
      refreshControl={
            <RefreshControl
              refreshing={Refreshing}
              onRefresh={onRefresh}
              colors={['#ff00ff']}
            />
      }
    />
    // <FlatList
    // keyExtractor={(item,index)=>index.toString()}
    // data={Items}
    // renderItem={({item})=> (
    //   <View style={styles.item}>
    //     <Text style={styles.text}>{item.name}</Text>
    //   </View>
    // )}
    // refreshControl={
    //     <RefreshControl
    //       refreshing={Refreshing}
    //       onRefresh={onRefresh}
    //       colors={['#ff00ff']}
    //     />
    //   }
    // />

    // <ScrollView
    //   style={styles.body}
    //   refreshControl={
    //     <RefreshControl
    //       refreshing={Refreshing}
    //       onRefresh={onRefresh}
    //       colors={['#ff00ff']}
    //     />
    //   }
    // >
    //   {
    //     Items.map((object) => {
    //       return (
    //         <View style={styles.item} key={object.key}>
    //           <Text style={styles.text}>{object.item}</Text>
    //         </View>
    //       )
    //     })
    //   }
    // </ScrollView>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
  },
  item: {
    margin: 10,
    backgroundColor: '#4ae1fa',
    justifyContent: 'center',
    alignItems: 'center',
  },
  item2:{
    margin: 8,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#000000',
    fontSize: 35,
    borderColor: '#000000',
  },
  text: {
    color: '#000000',
    fontSize: 45,
    fontStyle: 'italic',
    margin: 10,
  },
});

export default App;