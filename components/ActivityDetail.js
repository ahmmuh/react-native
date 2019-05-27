import React, { Component } from 'react'
import {StyleSheet,View, Image, Text} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

class ActivitiesDetailScreen extends Component {

    static navigationOptions = {
        title: 'Activity Detail'
      }
  render() {
    const { navigation } = this.props;
    const activityId = navigation.getParam('activityId', 'NO-ID');
    const image = navigation.getParam('image', 'NO-IMAGE');
    const description = navigation.getParam('description', 'NO-DESCRIPTION');
    const start = navigation.getParam('start', 'NO-START-TIME');
    const end = navigation.getParam('end', 'NO-END-TIME');
    const where = navigation.getParam('where', 'NO-PLACE');
    const contact = navigation.getParam('contact', 'NO-CONTECT-PERSON');
    const phone = navigation.getParam('phone', 'NO-PHONE-NUMBER');
    const week = navigation.getParam('week', 'NO-WEEK');


    return (
     <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
       <Text style={styles.description}>{description}</Text>
       <Image source = {{uri: image }}style={{flex: 1, height: 200}}/>

       <Text style={styles.infoItems}>Week: {' '}{week}</Text>
    <Text style={styles.infoItems}>Start:{' '}{start}</Text>
       <Text style={styles.infoItems}>End: {' '} {end}</Text>
       <Text style={styles.infoItems}>where: {' '} {where}</Text>
       <Text style={styles.infoItems}>Contact: {' '} {contact}</Text>
       <Text style={styles.infoItems}>Phone: {' '} {phone}</Text>
      

       </ScrollView>

     </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection: 'column',
    alignContent: 'center',
    alignItems: 'center',    
  },
  scrollView:{
    flex: 1, 
    padding: 30,
    margin: 5,
    borderWidth: 0.2,
  },
  description:{
    fontSize: 20,
    color: 'green',
    fontStyle: 'italic',
    top: -20
    
    
  },
  infoItems:{
    fontSize: 20,
    fontStyle: 'italic'

    
  }

})

export default ActivitiesDetailScreen