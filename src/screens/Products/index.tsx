import { useState } from 'react';
import { useWindowDimensions } from 'react-native';
import { SceneMap, TabView } from 'react-native-tab-view';
import ProductListScreen from './List';

const renderScene = SceneMap({
  list: () => <ProductListScreen />,
  group: () => <ProductListScreen />,
  promo: () => <ProductListScreen />,
});

const ProductsScreen = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'list', title: 'List Product' },
    { key: 'group', title: 'Product Group' },
    { key: 'promo', title: 'Promo' },
  ]);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  );
};

export default ProductsScreen;
