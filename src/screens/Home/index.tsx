import { Text, View, TextInput, TouchableOpacity, FlatList, Alert} from "react-native";
import {styles} from './styles'
import { Participant } from "../../components/Participant";
export default function Home(){
const participants=['Ricardo', 'Rodrigo', 'Vini', 'Biro', 'Armando','Gustavo', 'Jose','Pedro','Matheus','Augusto','Laude','Renan'];

  function handleParticipantAdd(){
    if(participants.includes("Ricardo")){
      return Alert.alert("Participante existe", "Já existe um participante na lista com esse nome.")
    }
    console.log("Você clicou no botão adicionar!")
  }
  function handleParticipantRemove(name: string){
   Alert.alert("Remover",`Remover o participante ${name}?`,[
    {
      text:"Sim",
      onPress:() => Alert.alert("Deletado!")
    },
    {
      text:"Não",
      style: "cancel"
    }
   ])

console.log(`Você clicou em remover o participante ${name}`);
  }
  
  return(
    <View style={styles.container}>
  
    <Text style={styles.eventName}>Nome do evento</Text>
     
    <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2022</Text>
    
    <View style={styles.form}>
    <TextInput 
    style={styles.input}
    placeholder="Nome do participante"
    placeholderTextColor="#6b6b6b"
    />
    <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
      <Text style={styles.buttonText}>
        +
      </Text>
    </TouchableOpacity>
    </View>

<FlatList
data={participants}
keyExtractor={item => item}
renderItem={({ item }) => (
  <Participant 
  key={item}
  name={item}
  onRemove={() => handleParticipantRemove("item")} />
)}
showsVerticalScrollIndicator={false}
ListEmptyComponent={() => (
  <Text style={styles.listEmptyText}>
    Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença.
  </Text>
)}
/>

    </View>
  )
}