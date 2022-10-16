import { StatusBar } from 'expo-status-bar';
import { Alert, Image,TextInput, StyleSheet, Text, View, Button, ScrollView, Switch} 
from 'react-native';
import React,{useState} from 'react'
import imgSuper from './assets/super.png'

export default function App() {
  const [usuario, setUsuario] = useState('A')
  const [ligado, setLigado] = useState(true) 

  function handleSwitch(){
    setLigado(!ligado)
  }

  return (
    <ScrollView>
      <View style={[styles.container, {backgroundColor:'red'}]}>
        
        <Switch 
          value={ligado}
          onValueChange={handleSwitch}
          >
        </Switch>

        <Image
          source={imgSuper}
          style={{display: ligado ? "flex" : "none"}}
        />
        <TextInput
          style={styles.input}
          onChange={(text)=>setUsuario(text.nativeEvent.text)}
          keyboardType="default"
          placeholder='digite seu numero'
          value={usuario}
        />
        <Button
          title='click aqui'
          onPress={()=>{Alert.alert('valor atual', usuario)}}
        />


        <View
          onTouchStart={(event)=>{
            Alert.alert('TOQUE', 'Clique iniciado')
          }}
          onTouchEnd={(event)=>{
            Alert.alert('TOQUE', 'Toque finalizado')
          }}
        >
        <Text style={[styles.texto, styles.border]}>
            oi
        </Text>
        </View>
        
          <Text
            selectable={false}
            onPress={()=>{console.log("pressionado")}}
            onLongPress={()=>{console.log("pressionamento longo")}}
          >Open up App.tsx to start working on your app!
          </Text>
        <StatusBar style="auto" />
        
        <Text>
          <Text>ola</Text>
          <Text> mundo</Text>
        </Text>

        <View>
          <Text>ola</Text>
          <Text>mundo</Text>
        </View>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    height:40,
    margin:12,
    borderWidth:1,
    padding:10,
    backgroundColor:'white'
  },
  border:{
    borderColor: 'red',
    borderWidth: 3
  },
  texto:{
    fontSize:20,
    fontWeight:'bold',
    backgroundColor: 'blue',
    color:'white',
    padding:20,
  }
});
