import PRODUCTS from "../data/PRODUCTS";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

import React, { useState } from "react";

export default function FilterableProductTable() {
  const products = PRODUCTS;

  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);

  return (
    <React.Fragment>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterChange={setFilterText}
        onInStockChange={setInStockOnly}
      />
      <ProductTable
        products={products}
        filterText={filterText}
        inStockOnly={inStockOnly}
      />
    </React.Fragment>
  );
}
