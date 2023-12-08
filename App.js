import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.Aplicativo}>

      <View style={styles.container_barra_topo}>
      </View>
        <View style={styles.container_login}>
          <View style={styles.container_imagem}> 
            <Image
              source={require("./src/assets/imagem_teste.png")}
              style={styles.logo}
            />
          </View>

          <View style={styles.container_usuario_senha}>
            <View style={styles.container_usuario}>
              <Text style = {styles.Text_usuario}>Usuário</Text>
            </View>
            <View style={styles.container_senha}>
              <Text>Usuário</Text>
            </View>
          </View>
            <StatusBar style="auto" />
        </View>
      <View style={styles.container_barra_rodape}>
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container_barra_topo: {
    width: 500,
    height: 80,
    backgroundColor: '#1F1F1F',
  },
  container_login: {
    backgroundColor: '#FFFF',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 50,
    paddingBottom: 50
  },
  container_imagem:{
    marginBottom: 120
  },
  logo: {
    borderRadius : 500,
    height: 200,
    width: 200,
  },
  container_usuario: {
    marginTop: 50,
    width: 221,
    height: 43,
    backgroundColor: '#D9D9D9',
    borderRadius: 15,
    justifyContent: 'center',
    paddingLeft: 20
  },
  container_usuario_senha:{
    paddingTop: 70 
  },
  container_senha:{
    marginTop : 50,
    width: 221,
    height: 43,
    backgroundColor: '#D9D9D9',
    borderRadius: 15,
    justifyContent: 'center',
    paddingLeft: 20
  },
  Text_usuario: {
    opacity : 0.7
  },
  container_barra_rodape:{
    justifyContent: 'space-around',
    height: 150,
    backgroundColor: '#1F1F1F',
    flexDirection: 'row'
  }

});
