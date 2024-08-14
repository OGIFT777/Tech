import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { TodoList } from './Screens/TodoList';
import { Opay } from './Screens/Opay';
import { Jiji } from './Screens/Jiji';
import { Login } from './Screens/Login';
import { TripPlanner } from './Screens/TripPlanner';
import { AssignmentRN } from './Screens/AssignmentRN';



export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <AssignmentRN/>
    </View>
  );
};


