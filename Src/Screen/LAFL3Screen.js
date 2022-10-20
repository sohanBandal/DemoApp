import React, { useEffect } from "react";
import { View, Text, FlatList } from "react-native";

const LAFL3Screen = () => {
    const Alldata = [{
        name: 'Sanu', Village: [{ Vill: 'Dabariyani', vayar: [{ vaya: 'ren', Thesil: [{ the: 'MertaCity', Distric: [{ dis: 'Nagaur' }] }] }] }]
    }]

    useEffect(() => {
        PrintData()
    }, [])

    const PrintData = () => {
        Alldata.map((item) => {
            console.log('item----', item)
            item.Village.map((itemA) => {
                console.log('itemA---', itemA)
                itemA.vayar.map((itemB) => {
                    console.log('itemB+++++++', itemB)
                    itemB.Thesil.map((itemC) => {
                        console.log('itemC----***----', itemC)
                        itemC.Distric.map((itemD) => {
                            console.log('itemD-----%%%%-----', itemD)
                        })
                    })
                })
            })
        })
    }
    const renderItem = ({ item }) => (
        <View style={{ backgroundColor: 'white', elevation: 10, margin: 10, padding: 10 }}>
            <View>
                <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'black' }}> {item.name} </Text>

                {item.Village.map((item) => {
                    return (
                        <View>
                            <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'black' }}>
                                {item.Vill}
                            </Text>
                            {item.vayar &&
                            <View>
                                {item.vayar.map((itemB)=>{
                                    return(
                                        <View>
                                            <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'black' }}>
                                                {itemB.vaya}
                                            </Text>
                                            {itemB.Thesil &&
                                            <View>
                                                {itemB.Thesil.map((itemC)=>{
                                                    return(
                                                        <View>
                                                            <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'black' }}>
                                                                {itemC.the}
                                                            </Text>
                                                            {itemC.Distric &&
                                                            <View>
                                                                {itemC.Distric.map((itemD)=>{
                                                                    return(
                                                                        <View>
                                                                            <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'black' }}>
                                                                                {itemD.dis}
                                                                            </Text>
                                                                            </View>
                                                                    )
                                                                })}
                                                                </View>
                                                            }
                                                        </View>
                                                    )
                                                })}
                                            </View>
                                            }
                                        </View>
                                    )
                                })}
                            </View>
                            }
                            
                               
                        </View>
                    )
                })}

            </View>
        </View>
    )
    return (
        <View style={{ flex: 1 }}>
            <Text style={{fontSize:30}}>
            Loop Arry Flatlist,star terminal se data emulater me kese print/get karvate h

            </Text>
            <FlatList
                data={Alldata}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    );
}
export default LAFL3Screen;