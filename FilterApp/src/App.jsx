import { useState, useEffect } from 'react';
import allProducts from './data';
import ProductList from './ProductList';
import SearchBar from './SearchBar';
import products from './data';


export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setselectedCategory] = useState('categories');
  const [showInStock, setshowInStock] = useState(false);
  const [filteredProducts, setfilteredProducts] = useState([]);

  const categories = [...new Set(allProducts.map(product=> product.category))];

  useEffect(() =>{
    let currentFilteredProducts = allProducts;

    if(searchQuery){
      currentFilteredProducts = currentFilteredProducts.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if(selectedCategory !== 'categories'){
      currentFilteredProducts = currentFilteredProducts.filter(product => 
        product.category === selectedCategory);
  
    }

    if(showInStock){
      currentFilteredProducts = currentFilteredProducts.filter(product => product.inStock);
    }

    setfilteredProducts(currentFilteredProducts);
  },[searchQuery,selectedCategory,showInStock]
);

  
  return(
    <div className='App' style={{backgroundColor:'lightblue', fontFamily:'sans-serif'}}>

      <h1>Product catalog</h1>
      <SearchBar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedCategory={selectedCategory}
        onCategoryChange={setselectedCategory}
        showInStock={showInStock}
        onInStockChange={setshowInStock}
        categories={categories}
      />
      <ProductList products={filteredProducts}/>
      

    </div>
  );


  
}


