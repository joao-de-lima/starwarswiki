import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import {
  HeroContainer,
  HeroImageBackground,
  HeroGradient,
  ButtonsView,
  ButtomItemView,
} from './styles'
import { Text, Logo } from '~/components/atoms'
import { Tag, IconButton, WatchButton } from '~/components/molecules'
import { colors } from '~/styles/colors'
import { useFavorites } from '~/services/hooks'
import { useDataStore } from '~/services/stores'


export const Hero = ({ item, onDetail }) => {
  const navigation = useNavigation()
  const { setSelectedData } = useDataStore()

  const [isFavorite, setIsFavorite] = useState(false)
  const { addFavorite, getFavorites, removeFavorite } = useFavorites()
  const { image_url, title, subtitle, type } = item

  const checkIsFavorite = async () => {
    const favorites = await getFavorites()
    const isInFavorite = favorites.filter(
      (fv) => fv.id === item.id && fv.type === item.type
    )
    setIsFavorite(isInFavorite.length > 0)
  }

  useEffect(() => {
    checkIsFavorite()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const addDataToFavorite = async () => {
    await addFavorite(item)
    setShowFavoriteModal('added')
    checkIsFavorite()
    closeFavoriteModal()
  }

  const removeDataFromFavorite = async () => {
    await removeFavorite(item)
    setShowFavoriteModal('removed')
    checkIsFavorite()
    closeFavoriteModal()
  }


  const onPressDetail = () => {
    setSelectedData(item)
    navigation.navigate('Detail')
  }

  return (
    <HeroContainer>
      <HeroImageBackground
        source={{
          uri: image_url,
        }}
      >
        <HeroGradient colors={[colors.dark, 'transparent', colors.dark]}>
          {!onDetail && <Logo size="small" />}
          <Tag mt={onDetail ? 224 : 200}>{type}</Tag>
          <Text fontFamily="bold" size={28} mt={14}>
            {title}
          </Text>
          <Text fontFamily="regular" size={18} mt={1}>
            {subtitle}
          </Text>
          <ButtonsView>
            <ButtomItemView align="flex-start">
              <IconButton
                onPress={() =>
                  isFavorite ? removeDataFromFavorite() : addDataToFavorite()
                }
                label={isFavorite ? 'Rem. Favoritos' : 'Favoritos'}
                iconName={
                  isFavorite ? 'remove-circle-outline' : 'add-circle-outline'
                }
              />
            </ButtomItemView>

            <ButtomItemView>
              <WatchButton />
            </ButtomItemView>

            <ButtomItemView align="flex-end">
              {!onDetail && (
                <IconButton
                  onPress={onPressDetail}
                  label="Saiba Mais"
                  iconName="information-circle-outline"
                />
              )}
            </ButtomItemView>
          </ButtonsView>
        </HeroGradient>
      </HeroImageBackground>
    </HeroContainer>
  )
}
