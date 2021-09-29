import {ProductFilterContextProvider} from '../components/shop_page/ProductFilterContext';
import ShopPageContainer from '../components/shop_page/ShopPageContainer';

function ShopPage() {
  return (
    <ProductFilterContextProvider>
      <ShopPageContainer/>
  </ProductFilterContextProvider>
  );
}

export default ShopPage;
