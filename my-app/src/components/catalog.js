import React, {useState} from 'react';
import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';

const Catalog = () => {
  const productsList = [
    {
      id: 1,
      name: "Prod1",
      image: " ",
      price: "19.99",
    },
    {
      id: 2,
      name: "Prod2",
      image: " ",
      price: "19.99",
    },
    {
      id: 3,
      name: "Prod3",
      image: " ",
      price: "19.99",
    },
    {
      id: 4,
      name: "Prod4",
      image: " ",
      price: "19.99",
    },
    {
      id: 5,
      name: "Prod4",
      image: " ",
      price: "19.99",
    },
    {
      id: 6,
      name: "Prod4",
      image: " ",
      price: "19.99",
    },
    {
      id: 4,
      name: "Prod4",
      image: " ",
      price: "19.99",
    },
  ]

  const itemsPerPage = 3; // Количество элементов на странице
  const [currentPage, SetCurrentPage] = useState(1); // 

  const indexOfLastItem = currentPage * itemsPerPage; //Посл элемент
  const indexOfFirstItem = indexOfLastItem - itemsPerPage; //Первый элемент
  const curentProducts = productsList.slice(indexOfFirstItem, indexOfLastItem) //Выборка из массива

  const setPage = (pageNumber) => {
    SetCurrentPage(pageNumber) //отображение нужной страницы
  }


    return (
      
      <div className="catalog">
      <div className="catalog__row">
        
     
        {curentProducts.map(product => (
          <Link key={product.id} to={`/product/$(product.id)`}>
            <ProductCard  product={product} />
          </Link>
            
        ))}
      </div>
      <div className="pagination">
        {
          Array.from(
            {length: Math.ceil(productsList.length / itemsPerPage)},    // округление
            (_, index) => (
              <button key={index + 1} onClick={() => setPage(index + 1)}> 
                {index + 1}
              </button>

            )
            )
        }

      </div>
    </div>
    );
}

export default Catalog;