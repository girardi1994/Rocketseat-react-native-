import { Text, View, TextInput, TouchableOpacity} from "react-native";
import {styles} from './styles'
import { Participant } from "../../components/Participant";
export default function Home(){
  function handleParticipantAdd(){
    console.log("Você clicou no botão adicionar!")
  }
  function handleParticipantRemove(name: string){
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

    <Participant name="Ricardo" onRemove={() => handleParticipantRemove("Ricardo")} />
    <Participant name="Rodrigo" onRemove={() => handleParticipantRemove("Rodrigo")} />
    <Participant name="Vini" onRemove={() => handleParticipantRemove("Vini")} />
    <Participant name="Biro" onRemove={() => handleParticipantRemove("Biro")} />
    </View>
  )
}