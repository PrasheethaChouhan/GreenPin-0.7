import React, { Component } from 'react';
import { StyleSheet, Dimensions, KeyboardAvoidingView,ScrollView, View , Text,TextInput,TouchableOpacity,Button,Image} from 'react-native';
import MyHeader from '../components/MyHeader'

export default class PlantATree extends React.Component {
  constructor(){
    super()
    this.state={
      username : '',
      password: '',
      isVisible : false,
      firstName : "",
      lastName : "",
      mobileNumber:"",
      address : "",
      confirmPassword : ""
    }
  }



    render() {
      return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <MyHeader title="GreenPin" options={this.props.options}/>  
                <Text>Profile Screen</Text>  
               
      <View style={styles.modalContainer}>
        <ScrollView style={{width:'100%'}}>
          <KeyboardAvoidingView style={{flex:1,justifyContent:'center', alignItems:'center'}}>
          <Text
            style={{justifyContent:'center', alignSelf:'center', fontSize:30,color:'white',margin:50}}
            >Registration</Text>
          <TextInput
            style={styles.formTextInput}
            placeholder ={"plant name"}
            placeholderTextColor="black" 
            maxLength ={8}
            onChangeText={(text)=>{
              this.setState({
                firstName: text
              })
            }}
          />
          <TextInput
            style={styles.formTextInput}
            placeholder ={"plant type"}
            placeholderTextColor="black" 
            maxLength ={8}
            onChangeText={(text)=>{
              this.setState({
                lastName: text
              })
            }}
          />
          <TextInput
            style={styles.formTextInput}
            placeholder ={"event type"}
            placeholderTextColor="black" 
            maxLength ={10}
            keyboardType={'numeric'}
            onChangeText={(text)=>{
              this.setState({
                mobileNumber: text
              })
            }}
          />
          <TextInput
            style={styles.formTextInput}
            placeholder ={"Address"}
            placeholderTextColor="black" 
            multiline = {true}
            onChangeText={(text)=>{
              this.setState({
                address: text
              })
            }}
          />
          <TextInput
            style={styles.formTextInput}
            placeholder ={"Location"}
            placeholderTextColor="black" 
            keyboardType ={'email-address'}
            onChangeText={(text)=>{
              this.setState({
                username: text
              })
            }}
          /><TextInput
            style={styles.formTextInput}
            placeholder ={"Age"}
            placeholderTextColor="black" 
            secureTextEntry = {true}
            onChangeText={(text)=>{
              this.setState({
                password: text
              })
            }}
          /><TextInput
            style={styles.formTextInput}
            placeholder ={"place holder"}
            secureTextEntry = {true}
            onChangeText={(text)=>{
              this.setState({
                confirmPassword: text
              })
            }}
          />
          <View style={styles.modalBackButton}>
            <TouchableOpacity
              style={styles.registerButton}
          //    onPress={()=>
           //     this.userSignUp(this.state.username, this.state.password, this.state.confirmPassword)
           //   }
            >
            <Text style={styles.registerButtonText}>Register</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.modalBackButton}>
            <TouchableOpacity
           //   style={styles.cancelButton}
          //    onPress={()=>this.setState({"isVisible":false})}
            >
            <Text style={{color:'white'}}>Cancel</Text>
            </TouchableOpacity>
          </View>
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
       </View>
      
      
      )
    }}

    const styles = StyleSheet.create({
      container:{
        flex:1,
        backgroundColor:'black'
      },
      profileContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
      },
      title :{
        fontSize:60,
        fontWeight:'300',
        // fontFamily:'AvenirNext-Heavy',
        color : 'green'
      },
      loginBox:{
        width: 300,
        height: 35,
        borderBottomWidth: 1.5,
        borderColor:'black',
        fontSize: 20,
        marginBottom:20,
        marginTop:5
    
      },
      button:{
        width:"75%",
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:25,
        backgroundColor:"blue",
        elevation:10
      },
      buttonContainer:{
        flex:1,
      },
      modalContainer:{
        flex:1,
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:"#358856",
        marginRight:30,
        marginLeft : 30,
        marginTop:80,
        marginBottom:80,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
      },
      formTextInput:{
        width:"75%",
        height:35,
        alignSelf:'center',
        borderColor:'black',
        color:'white',
        borderRadius:10,
        borderWidth:1,
        marginTop:20,
        padding:10,
       

      },
      registerButton:{
        width:200,
        height:40,
        alignItems:'center',
        justifyContent:'center',
        borderWidth:1,
        borderRadius:10,
        marginTop:30
      },
      registerButtonText:{
        color:'white',
        fontSize:15,
        fontWeight:'bold'
      },
      cancelButton:{
        width:200,
        height:30,
        justifyContent:'center',
        alignItems:'center',
        marginTop:5,
      },
    })