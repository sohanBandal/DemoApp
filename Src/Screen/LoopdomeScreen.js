import React, { useEffect } from "react";
import { FlatList, Text, View } from "react-native";

// Agar hame arry[] se data nikala ke print karwana ho tan ye formula use karenge.

const LoopDemoScreen = () => {
    const Arrdata = [
        { name: 'nouser', age: '26', address: 'Kaekwal' },
        { name: 'sanu', age: '24', address: 'dabariyani' },
        { name: 'Pravej', age: '36', address: 'merta' },
        { name: 'sahid', age: '25', address: 'jodhpur' },
        { name: 'sajid', age: '20', address: 'Jaipur' },
        { name: 'piyu', age: '21', address: 'dabariyani' },
        { name: 'Sefu', age: '27', address: 'Ajmer' },
        { name: 'danish', age: '28', address: 'merta Road' },
    ]
    useEffect(() => {
        checkif()
    }, [])

    const checkif = () => {
        Arrdata.map((item) => {
            console.log('Arrdata', item.name);
            console.log('Arrdata', item.age);
            console.log('Arrdata', item.address);


        })
    }

    const renderItemssss = ({ item }) => (
        <View style={{ backgroundColor: 'white', elevation: 15, margin: 15, padding: 10 }}>
            <Text style={{ fontSize: 30 }}>{item.name}</Text>
            <Text style={{ fontSize: 30 }}>{item.age}</Text>
            <Text style={{ fontSize: 30 }}>{item.address}</Text>

        </View>
    );


    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={Arrdata}
                renderItem={renderItemssss}
                keyExtractor={item => item.id}
            />
            <Text>
                Sanu
            </Text>
        </View>
    );
}
export default LoopDemoScreen;