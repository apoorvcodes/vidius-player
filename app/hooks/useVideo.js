import * as MediaLibrary from "expo-media-library"
export async function useVideo(vidArray, setVidArray) {
  
  const permission = await MediaLibrary.getPermissionsAsync();
  if(!permission.granted && permission.canAskAgain) {
    await useVideo()
  }
    let media = await MediaLibrary.getAssetsAsync({
      mediaType: MediaLibrary.MediaType.video,
    });
    media.assets.map(async(v) => {
      let vidArray = []
      const assetWithInfo = await MediaLibrary.getAssetInfoAsync(v.id)
      
      setVidArray([...vidArray, {
        uri: assetWithInfo.localUri,
        name: assetWithInfo.filename,
        duration: assetWithInfo.duration
      }])
    })
}