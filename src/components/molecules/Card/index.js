import React from 'react'
import { CardContainer, CardImage } from './styles'
import { useNavigation } from '@react-navigation/native'
import { useDataStore } from '~/services/stores'

export const Card = ({ item }) => {
  const { setSelectedData } = useDataStore()
  const navigation = useNavigation()

  const OnSelectItem = () => {
    setSelectedData(item)
    navigation.navigate('Detail')
  }

  return (
    <CardContainer onPress={() => OnSelectItem()}>
      <CardImage source={{ uri: item.image_url }} />
    </CardContainer>
  )
}
