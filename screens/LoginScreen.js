import react, { useState } from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const LoginScreen = ({navigation}) =>{
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');

    const response = async ()=>{
        fetch('http://127.0.0.1:8000/login',
        {
            method:"POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: value1,
                password: value2,
            })
        })
        .then(response=>{
            if(response=200) navigation.navigate('Home');
        }).catch(error=>{
            console.log(error);
        });
    }

    return(
    <View style={styles.mainView}>
        <View style={styles.topView}>
            <Image style={styles.logo} source={require('../assets/dasilogo.jpg')}/>
        </View>
        <View style={styles.bottomView}>
            <View><Text style={styles.loginTitle}>Login</Text></View>
            <TextInput style={styles.textInput}
            value={value1}
            onChangeText={setValue1}
            />
            <TextInput style={styles.textInput}
            value={value2}
            onChangeText={setValue2}/>
            <Button style={styles.button} onPress={response} title='penis'/>
            <View style={styles.bottom}> 
                <Text style={{color: "lightgray"}}>Forgot Password</Text>
                <Text style={{color: "blue"}}>Signup</Text>
            </View>
        </View>
    </View>
    )
};
//()=>{ navigation.navigate('Home') }

const styles = StyleSheet.create({
    mainView: {
        height: "100%",
        width: "100%",
        backgroundColor: "#ECECEC",
        flex: 1,
        flexDirection: "column"
    },
    topView: {
        height: "40%",
        alignItems: "center",
        justifyContent: "flex-end",
        //borderBottomWidth: 1,
        //borderBottomColor: "black",
    },
    bottomView: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-evenly"
    },
    logo:{
        height: 200,
        width: 200,
        borderRadius: 100,
    },
    textInput: {
        height: 40,
        width: "80%",
        fontFamily: "Roboto",
        backgroundColor: "white",
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "black"
    },
    loginTitle: {
        fontFamily: "Roboto",
        fontSize: 25,        
        fontWeight: "bold"
    },
    /*button: {
        minWidth: "80%"
    },*/
    bottom: {
        width: "80%",
        flexDirection: "row",
        justifyContent: "space-between"
    }
})

export default LoginScreen;