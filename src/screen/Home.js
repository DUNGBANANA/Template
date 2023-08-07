import { View, Text } from 'react-native'
import React from 'react'
import Dropdown from '../components/Dropdown'

const Home = () => {
    const [selected, setSelected] = React.useState(undefined);
    const data = [
        {label: 'Premier League', value: '1'},
        {label: 'SeaGame', value: '2'},
        {label: 'V-luage', value: '3'},
      ];
      console.log(selected)
  return (
    <View style={{backgroundColor :'#ccc' , width: '100%', height: '100%', justifyContent: 'space-around', flexDirection:'row', alignItems: 'center'}}>
      <Dropdown label={'Chọn khu vực'} data={data} onSelect={setSelected}/>
      {!!selected && <Text style={{color:'red'}}>{selected.label}</Text>}
    </View>
  )
}

export default Home