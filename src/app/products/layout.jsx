import { dataProducts } from './dataProducts';

import { ContactLink } from './sections';

export const metadata = {
  title: 'ELS Power Products page',
  description: 'This is the main page of ELS Products',
}

const ProductLayout = ({children}) => {
  const dataItems = dataProducts;
  
  return (
    <div>
      {children}

      <ContactLink
        title={dataItems.contactLink.title}
      />
    </div>
  )
}
export default ProductLayout