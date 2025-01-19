import React from "react";
import { Dimensions, StyleSheet, Text, View, Image, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, SafeAreaView, Button, Alert, Platform, StatusBar } from "react-native"; 
// SafeAreaView adds top padding to ensure content is in a safe area, not overlapping notch (Some phones have a notch, think phone nav bar where the time and notifs(statusbar) are)

export default function App() {
    //define lengthly functions here! 
    const handlePress = () => console.log("Text Pressed")
    console.log("App executed");
    console.log(Dimensions.get("screen")) //gets dimensions of user screen

    return (
        // attribute numberOfLines={NumValue} is num of lines for your txt. Note: Excess text will be cut  
        <SafeAreaView style={styles.container}> 
            <View 
                style={{
                backgroundColor: "#fff", 
                flex: 1,
                flexDirection: "row",
                // width: 100%,
                // height: "30", 
                justifyContent:"center", //main axis: x-axis 
                alignItems: "baseline", //secondary axis: y-axis  
                alignContent: "center", //For entire content, only works if there is wrapping
            }}>
                <View
                    style={{
                    backgroundColor: "pink", 
                    width: 100,
                    height: 300, 
                }}/>
                <View
                style={{
                    backgroundColor: "gold", 
                    width: 100,
                    height: 200, 
                }}/>
                <View
                style={{
                    backgroundColor: "tomato", 
                    //flex: 1,
                    width: 100,
                    height: 100, 
                    alignSelf: "flex-start",//aglins individually 
                }}/>
            </View>
            <Text numberOfLines={1} onPress={() => console.log("The text is clipped")}>Hello World </Text>
            <Image source={require('../../assets/images/favicon.png')} /> 
            <Button
                color="orange"
                title="Alert function" onPress={() => Alert.alert("My title", "My message", [
                    {text: "Yes", onPress: () =>console.log("Yes")}, 
                    {text: "No", onPress: () =>console.log("No")},
                ])}/>
            <Button 
                color="blue"
                title="Prompt function" 
                onPress={() => 
                    Alert.prompt("My title", "My message", text => console.log(text))
                }    
            />
            
            <TouchableHighlight 
                onPress={() => console.log("Image tapped")}>
                <View style={{
                    width:200, 
                    height: 70, 
                    backgroundColor: "dodgerblue", 
                }}>
                </View>
            </TouchableHighlight>
            <Image 
                fadeDuration={1000}
                blurRadius={10}
                source={{
                width: 200,
                height: 300,
                uri: "https://picsum.photos/200/300",
                }} 
            /> 
       
        </SafeAreaView>
    ); // STATIC IMGS: require()    Note:require() returns a number that refrences the img, console.log(require('../../assets/images/favicon.png'))
       // path of image is RELATIVE to the loaction of your CURRENT FILE Note: Must get to root first then work way down to img location  
       // ./ = current directory 
       // ../ refers to parent directory ; = ONE LEVEL from current folder 
       // ../../ TWO levels and so on 

       // NETWORK IMGS: {uri: "link"} 
       // Note: Must specify dimensions WITHIN obj to show ; use attributes width & height

       //IMG EFFECTS must be added onto the image element OUTSIDE the source attribute 

//TOUCHABLES 
// Img does not permit onPress command ; must be wrapped inside a TouchableWithoutFeedback component 


}


const buttonColor = { backgroundColor: "green"}
const styles = StyleSheet.create({
    container:{
        flex: 1, 
        backgroundColor: '#fff',
        alignItems: "center",
        paddingTop: Platform.OS == "android" ? StatusBar.currentHeight: 0, 

    },
});
//Styling directly/ inline will not validate properties/ check for errors as compared to passing an object/ creating a stylesheet
//PLATFORM
//Platform keyword allows us to work dynamically 

//GENERAL 
// To display/render a component (ex: image) must import it's respective component first
//Shortcut: Instead of importing before hand, when first using the component there will be an option to automatically import 
//Multi-cursor editing: editing open & close tags at once, highlight the tag and press Ctrl + D and type. Remember to Esc to end
// Andoid, Alert.prompt ONLY WORKS IN IOS 
// (Ctrl + Space ) in emptey quotation marks to browse through all possible values of an attribute! 