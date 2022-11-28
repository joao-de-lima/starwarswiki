import React, { useEffect, useState } from 'react'
import { ScreenScrollContainer, Text } from '~/components'
import { useFavorites } from '~/services/hooks'

export const FavoritesScreen = ({navigation}) => {
  const [favoritesList, setFavoritesList] = useState([])
  const { getFavorites } = useFavorites()

  const callGetFavorites = async () => {
    const favorites = await getFavorites()
    setFavoritesList(favorites)
  }

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      callGetFavorites()
    })

    return unsubscribe
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <ScreenScrollContainer withPadding>
      <Text fontFamily="bold" size={28}>
        Favoritos
      </Text>
    </ScreenScrollContainer>
  )
}
