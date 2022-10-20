import React, { useEffect } from "react";
import { View, Text, FlatList } from "react-native";

const LAFL2Screen = () => {
    const Alldata = [{
        name: 'Sanu', Village: [{ Vill: 'Dabariyani', vayar: [{ vaya: 'ren', Thesil: [{ the: 'MertaCity', Distric: [{ dis: 'Nagaur' }] }] }] }]
    }]

    useEffect(() => {
        PrintData()
    }, [])

    const PrintData = () => {
        Alldata.map((item) => {
            console.log('item----', item)
            item.Village.map((villa) => {
                console.log('villa---', villa)
                villa.vayar.map((vayar) => {
                    console.log('vaya+++++++', vayar)
                    vayar.Thesil.map((thesil) => {
                        console.log('thesil----***----', thesil)
                        thesil.Distric.map((distrik) => {
                            console.log('distrik-----%%%%-----', distrik)
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

                {item.Village.map((villa) => {
                    return (
                        <View>
                            <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'black' }}>{villa.Vill}
                            </Text>
                            {villa.vayar &&
                            <View>
                                {villa.vayar.map((vayar)=>{
                                    return(
                                        <View>
                                            <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'black' }}>
                                                {vayar.vaya}
                                            </Text>
                                            {vayar.Thesil &&
                                            <View>
                                                {vayar.Thesil.map((Thesil)=>{
                                                    return(
                                                        <View>
                                                            <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'black' }}>
                                                                {Thesil.the}
                                                            </Text>
                                                            {Thesil.Distric &&
                                                            <View>
                                                                {Thesil.Distric.map((Distric)=>{
                                                                    return(
                                                                        <View>
                                                                            <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'black' }}>
                                                                                {Distric.dis}
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
export default LAFL2Screen;