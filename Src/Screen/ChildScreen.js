import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";

const ChildScreen = () => {
    const [istrue, setistrue] = useState(false);
    const [sanu, setsanu] = useState([
        { name: 'Sonu', address: 'Dabariynai', age: '25' },
        { name: 'Monu', address: 'Babariynai', age: '26' },
        { name: 'Jonu', address: 'Kabariynai', age: '27' },
        { name: 'Tonu', address: 'Tabariynai', age: '28' }
    ]);
    useEffect(() => {

    }, []);

    const Add = () => {
        sanu.push({ name: 'Rsm', address: 'merta' })
        console.log('sanu--- ', sanu)
        setistrue(!istrue)
    }

    return (
        <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 40 }}>
                sanujangid
            </Text>
        </View>
    )
}
export default ChildScreen;