import React from "react";

export default function SearchBar(props) {
  return (
    <form>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => props.onFilterChange(e.target.value)}
      />
      <p>
        <input
          type="checkbox"
          onChange={(prev) => props.onInStockChange(!prev)}
        />
        Only show products in stock
      </p>
    </form>
  );
}
