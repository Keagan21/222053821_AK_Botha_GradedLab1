import React from "react";

export default function SearchBar({searchQuery, onSearchChange, selectedCategory, onCategoryChange, showInStock, onInStockChange, categories}){
    return(
        <div>
            <input type="text" placeholder="Search product name" value={searchQuery} onChange={(e)=> onSearchChange(e.target.value)}  />

            <select value={selectedCategory} onChange={(e) => onCategoryChange(e.target.value)}>
                <option value="categories">Categories</option>
                {categories.map(category => (
                <option key={category} value={category}>{category}</option>
            ))}
            </select>

            <label>
                <input type="checkbox"  checked={showInStock} onChange={(e) => onInStockChange(e.target.checked)}/>
                Show in stock
            </label>

        </div>


    )

}