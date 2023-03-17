import React, { useState } from 'react';
import { Button, View } from 'react-native';

function App() {

  const [interstitialAd, setInterstitialAd] = useState(null);

  const adUnitID = 'pub-9671751425291256'; // Remplacez 'votre-id-unité-publicitaire' par l'ID de votre unité publicitaire

  const showInterstitialAd = async () => {
    await interstitialAd.load();
    await interstitialAd.show();
  }

  const createInterstitialAd = () => {
    const newInterstitialAd = InterstitialAd.createForAdRequest(adUnitID);
    newInterstitialAd.onAdEvent((type) => {
      if (type === AdEventType.LOADED) {
        showInterstitialAd();
      }
    });
    setInterstitialAd(newInterstitialAd);
  }

  return (
    <View>
      <Button title="Afficher l'interstitiel" onPress={createInterstitialAd} />
    </View>
  );
}

export default App;
