import React, { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";

const LoopArryFlistScreen = () => {
    const [istrue, setistrue] = useState(false)

    const NewData = [{name: 'Sonu', address: 'Dabariyani',
     Ren: [{vaya: 'ren',
      Merta: [{ the: 'merta city',
       nagaur:[{dis:'nagaur'}] }
                    ]
            }]
        }
    ]

    useEffect(() => {
        Alldata()
    }, [])

    const Alldata = () => {
        NewData.map((item) => {
            console.log('item---', item)
            item.Ren.map((response) => {
                console.log('response----', response)
                response.Merta.map((jivan) => {
                    console.log('data+++++', jivan)
                    jivan.nagaur.map((sanu)=>{
                        console.log('sanu----',sanu)
                    })
                })
            })
        })
        setistrue(!istrue)
    }
    const renderItem = ({ item }) => (
        <View style={{ backgroundColor: 'white', elevation: 10, margin: 10, padding: 10 }}>
            <View>
                <Text> {item.name} </Text>
            </View>
            {item.Ren.map((response) => {
                return (
                    <View>
                        <Text>{response.vaya}</Text>

                        {response.Merta &&
                            <View>
                                {response.Merta.map((Sdata) => {
                                    return (
                                        <View style={{ flex: 1, flexDirection: 'row' }}>
                                           <Text>{Sdata.the}</Text>
                                        </View>
                                    )
                                })}
                            </View>
                        }
                    </View>
                )
            })}

        </View>



    )

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={NewData}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    );
}
export default LoopArryFlistScreen;

// {
//     name: 'nouser', age: '26', address: 'merta',
//     inArr: [{ middle_name: 'middlennnnn', lastArr: [{ name: 'dddddddd' }], threeArr:[{firstnamessss:'ffffff'}], }, 
//     { middle_name: 'saddam', lastArr: [{ name: 'dddddd' }] }, 
//     { middle_name: 'jack', lastArr: [{ name: 'dddddd' }] }]
//   },


// [{name: 'Sonu', address: 'Dabariyani',
//      Ren: [{vaya: 'ren',
//       Merta: [{ the: 'merta city',
//        nagaur:[{dis:'nagaur'}] }
//                     ]
//             }]
//         }
//     ]