import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
const LoopArryScreen = () => {
    const [istrue, setistrue] = useState(false);
    const [newArry, setnewArry] = useState([]);
    const Maindata = [
        { name: 'nouser', age: '26', address: 'merta', dd: 'dskfds', middelArr: [{ name: 'saddam', }] },
        { name: 'second', age: '26', address: 'merta', dd: 'dskfds', middelArr: [{ name: 'saddam', }] },
        { name: 'thred', age: '26', address: 'merta', dd: 'dskfds', middelArr: [{ name: 'saddam', }] }
    ]
    useEffect(() => {
        callFunction()
    }, [])
    const callFunction = () => {
        Maindata.map((item) => {
            console.log('item-----', item)
            item.middelArr.map((data) => {
                console.log('data----', data)
                newArry.push({ name: item.name, address: item.address, maddlename: data.name })
            })
        })
        setistrue(!istrue)
        console.log('main=====',newArry)
    }
    return (
        <View style={{ flex: 1 }}>
            {/* in this loop without Flatlist print data and get data. If we want to push then that is posiblevery essy */}
            {
                Maindata.map((item) => {
                    return (
                        <View style={{ backgroundColor: 'white', elevation: 15, margin: 15, padding: 10 }}>
                            <View>
                                <Text>
                                    {item.address}
                                </Text>
                                <Text>
                                    {item.age}
                                </Text>
                                <Text>
                                    {item.name}
                                </Text>
                                {
                                    item.middelArr.map((data) => {
                                        return (
                                            <Text>
                                                {data.name}
                                            </Text>
                                        )
                                    })
                                }
                            </View>
                        </View>
                    )
                })
            }

        </View>
    );
}
export default LoopArryScreen;