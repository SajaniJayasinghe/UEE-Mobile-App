import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "react-native-shadow-cards";
import { View, Image, StyleSheet, Text, TouchableOpacity, ScrollView,TextInput,Button} from "react-native";
import { printToFileAsync } from 'expo-print';
import { shareAsync } from 'expo-sharing';

export default function BlogsList({ navigation }) {
  const [blog, setblog] = useState([]);
  const [filterblogs, setfilterblogs] = useState([]);
  const [search, setSearch] = useState('')

  useEffect(() => {
    axios
      .get("https://life-below-water.herokuapp.com/api/blog/getblog")
      .then((res) => {
        if (res.data.success) {
          setblog(res.data.existingBlogs);
        }
      });
  }, []);


  const searchFunc = (text) => {
    return blog.filter((blog) => blog.blogName === text)
  }

  useEffect(() => {
    setfilterblogs(searchFunc(search))
  }, [search])


  let generatePdf = async (blogName,description) => {

    const html = `

    <html>
    <head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <style>
    .card {
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      max-width: 300px;
      margin: auto;
      text-align: center;
      font-family: arial;
    }
    
    .title {
      color: grey;
      font-size: 18px;
    }
    
    button {
      border: none;
      outline: 0;
      display: inline-block;
      padding: 8px;
      color: white;
      background-color: #000;
      text-align: center;
      cursor: pointer;
      width: 100%;
      font-size: 18px;
    }
    
    a {
      text-decoration: none;
      font-size: 22px;
      color: black;
    }
    
    button:hover, a:hover {
      opacity: 0.7;
    }
    </style>
    </head>
    <body>
    
    <h2 style="text-align:center">Blogs Details  </h2>
    
    <div class="card">
      <img src="https://bokun.s3.amazonaws.com/b1e06f81-8717-4e42-90da-ae4fa6d76c24.png" alt="John" style="width:100%">
      <h1> ${blogName} </h1>
      <p class="title"> </p>
      <p>Job Period : ${description}</p>
      <div style="margin: 24px 0;">
        <a href="#"><i class="fa fa-dribbble"></i></a> 
        <a href="#"><i class="fa fa-twitter"></i></a>  
        <a href="#"><i class="fa fa-linkedin"></i></a>  
        <a href="#"><i class="fa fa-facebook"></i></a> 
      </div>
  
      <p> Thanks For view Our Blogs </p>

    </div>
    
    </body>
    </html>
    
`;

    const file = await printToFileAsync({
      html: html,
      base64: false
    });

    await shareAsync(file.uri);
  };


    return (
        <View style={styles.container}>
           <Image
        style={styles.tiny}
        source={{
          uri: "https://res.cloudinary.com/nibmsa/image/upload/v1667592233/Rectangle_6_xzuyuq.png",
        }}
      />
             <Text
        style={{
          color: "#151B54",
          textAlign: "center",
          marginTop: 30,
          fontSize: 28,
          fontWeight: "bold",
          
        }}
      >
        BLOGS LIST
      </Text>
      <TouchableOpacity
        style={[styles.containerx, styles.materialButtonDark]}
        onPress={() => navigation.navigate("AddBlog")}
      >
        <Text style={styles.addnewblog}>Add New Blog</Text>
      </TouchableOpacity>
      <TextInput style={styles.inputserach} placeholder='Search for Blogs' value={search} onChangeText={(text)=>setSearch(text)} />
       <ScrollView>
        <View style={{ display: "flex", flexDirection: "column", padding: 25 }}>
        {(search === ''? blog: filterblogs).map((blog, index) => (
            <View key={blog + index}>
      <TouchableOpacity
       onPress={() => navigation.navigate("UpdateList",{
        bid:blog._id,
        blogName:blog.blogName,
        description:blog.description,
        blogImage:blog.blogImage
       })}>
      <Card
       style={{ padding: 100, margin:-4, height:400, width:350, marginBottom:50}}
      
      >
      <Image
             style={styles.blog1}
              source={{uri:blog.blogImage}}
            />
         <Text
                  style={{
                    marginVertical: 5,
                    fontSize: 20,
                    flexDirection: "row",
                    justifyContent: "flex-end",
                    fontWeight: "bold"
                  }}
                >
                  {blog.blogName}
                </Text>
                <Text
                  style={{
                    marginVertical: 5,
                    fontSize: 15,
                    flexDirection: "row",
                    textAlign: "justify",
                    margin: -80,
                  }}
                >
                  {blog.description}
                </Text>
                <Button  title="Generate PDF" onPress={() => generatePdf(blog.blogName ,blog.description)} />

      </Card>
      </TouchableOpacity>
     
            </View>
          ))}
        </View>
      </ScrollView>
      </View>
      
        );
    };

    const styles = StyleSheet.create({
        container: {
          flex: 1,
        },
        tiny: {
          width: 470,
          height: 100,
          marginLeft: -15,
          marginTop: -50,
        },
        tiny1: {
          width: 470,
          height: 40,
          marginLeft: -15,
          marginTop: -50,
        },
        blog1: {
            width: 350,
            height: 150,
            marginLeft: -99,
            marginTop: -100,
          },

        materialButtonDark: {
            height: 50,
            width: 160,
            borderRadius: 130,
            shadowColor: "rgba(0,0,0,1)",
            shadowOffset: {
              width: 3,
              height: 3,
            },
            elevation: 5,
            shadowOpacity: 1,
            shadowRadius: 0,
            marginTop: 25,
            marginLeft: 220,
            marginBottom:15,
         },
         inputserach:{
          backgroundColor:'white',
          shadowColor:'black',
          shadowOffset:{width:5,height:5},
          shadowOpacity:0.1,
          elevation:3,
          borderRadius:40,
          padding:10,
          marginTop:10,
          width:370,
          justifyContent:'center',
          alignItems:'center',
          marginLeft:12,
          height:40
      
        },

            addnewblog: {
            color: "black",
            fontWeight: "bold",
            fontSize: 18,
            lineHeight: 18,
            
  },

            containerx: {
            backgroundColor: "#C2DFFF",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            borderRadius: 2,
            shadowColor: "#000",
            shadowOffset: {
            width: 0,
            height: 1,
    },
         shadowOpacity: 0.35,
         shadowRadius: 5,
         elevation: 2,
         minWidth: 88,
         paddingLeft: 26,
         paddingRight: 16,
         
  },
  
  log2: {
    width: 389,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    marginTop: -10,
    marginLeft: -10,
    flexDirection: "row",
  },
    });
    
