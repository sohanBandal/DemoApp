import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";

const ProjectA = () => {
    const [DATA, setDATA]= useState();
    useEffect(() => {
        Api()
    }, [])
    const Api = () => {
         fetch('https://fakestoreapi.com/products')
            .then((response) => response.json())
            .then((json) => {
                setDATA(json)
                consol.log('json----',json)
                return json.movies;
            })
            .catch((error) => {
                console.error(error);
            });
    };
    const renderItem =(item) =>(
        <View>
           <Text>
            {item.id}
           </Text>
        </View>
            
    )
    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    );
}
export default ProjectA;