

===>PRODUCT ROUTES

  ==>get requests

      ---all products

      http://localhost:4500/products
      http://localhost:4500/products

      ---brand query

      http://localhost:4500/products?brand=Apple

      ---two or more brand queries

      http://localhost:4500/products?brand=Apple&brand=Realme

      ---sorting

      http://localhost:4500/products?sort=price&order=asc
      http://localhost:4500/products?sort=price&order=dsc

      ---with id

      http://localhost:4500/products/63f647c2b22a993d9e0210df

  ==>post request

      http://localhost:4500/products/addproduct