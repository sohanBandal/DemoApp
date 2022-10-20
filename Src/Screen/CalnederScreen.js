import React from 'react';
import { Text, View } from 'react-native';
import { Calendar } from 'react-native-calendars';




const CalnederScreen = () => {

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Calendar
                markingType={'period'}
                markedDates={{
                    '2012-05-20': { textColor: 'green' },
                    '2012-05-22': { startingDay: true, color: 'green' },
                    '2012-05-23': { selected: true, endingDay: true, color: 'green', textColor: 'gray' },
                    '2012-05-04': { disabled: true, startingDay: true, color: 'green', endingDay: true }
                }}
            />
            <Text>
                Try editing me! 🎉
            </Text>
        </View>
    );
}

export default CalnederScreen;