const products = [
    {id:1, name: "Paleta 1", price: 1000, stock: 100, description:" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti, voluptatibus quas soluta natus qui omnis quidem doloremque vel fugit nihil at neque asperiores expedita nam, modi aliquid, ipsum mollitia sequi." , img: "https://images-na.ssl-images-amazon.com/images/I/81IiuIegmPL._SL1500_.jpg "},
    {id:2, name: "Paleta 2", price: 2000, stock: 200,  description:" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti, voluptatibus quas soluta natus qui omnis quidem doloremque vel fugit nihil at neque asperiores expedita nam, modi aliquid, ipsum mollitia sequi." , img: "https://images-na.ssl-images-amazon.com/images/I/71m519HxS%2BL._AC_SL1500_.jpg"},
    {id:3, name: "Paleta 3", price: 3000, stock: 300,  description:" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti, voluptatibus quas soluta natus qui omnis quidem doloremque vel fugit nihil at neque asperiores expedita nam, modi aliquid, ipsum mollitia sequi." , img: "https://http2.mlstatic.com/D_NQ_NP_976667-MLA42092582435_062020-F.jpg"},
    
    ]
    
    
    
    export const mFetch = (id) => new Promise((res, rej)=>{
    setTimeout(()=>{
      res(products)
    } , 1000 )
    }
    )