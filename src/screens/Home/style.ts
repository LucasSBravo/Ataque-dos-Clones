import { StyleSheet, Platform, TouchableOpacity } from "react-native";

export const estilo = StyleSheet.create({
  header: {
    backgroundColor: "#ff8c00",
    width: 600,
    height: 80,
  },
  container:{
    flex:1,
    backgroundColor:"green",
    paddingTop: 60,
    paddingHorizontal: 30
  },
  textNotification: {
    marginLeft: 160,
    // textAlign:'center',
    marginTop: 50,
    color: "#fff",
    fontSize: 15,
  },
  leftArrow: {
    position: "absolute",
    marginTop: 52,
    paddingLeft: 15,
    color: "#fff",
  },
  settings: {
    position: "absolute",
    marginLeft: 360,
    marginTop: 50,
    color: "#fff",
  },
  
  /* estilização da flatList*/
  flatItens: {
    marginLeft: 30,
    marginRight: 30,
    fontSize: 15,
  },

  flatItensTitle:{
    marginLeft: 30,
    marginRight: 30,
    fontSize:15,
    fontWeight:'bold',
    marginTop: 13,
    marginBottom:13,
  },

  headerAnterior: {
    backgroundColor: "lightgrey",
    height: 50,
  },

  textAnterior: {
    marginTop: 10,
    marginLeft: 15,
    fontSize: 15,
  },

  breakLine: {
    marginLeft: 30,
    marginRight: 30,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
