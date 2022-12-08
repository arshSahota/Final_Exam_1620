const images = document.querySelector(".images")
const body = document.querySelector("body")
const cart = document.querySelector(".cartitems")
const text = document.querySelector("h2")

let increaseOpacity = (e)=>{
    e.target.classList.add("imgop")
}

let makeTransparent = (e) =>{
    e.target.classList.remove("imgop")
}

let addToCart = (e)=>{
    for(let album in albums){
    if(e.target.textContent = albums[album].name){
        let album_name = albums[album].name
        let price_album = albums[album].price
        span_element = document.createElement("span")
        span_element.textContent=album_name;
        span_price = document.createElement("span")
        span_price.textContent = price_album;
        cart.appendChild(span_element)
        cart.appendChild(span_price)
        changeProperty();
        albums[album].addedToCart = true;
    }
}
}

let changeProperty = (e)=>{
    text.textContent = "Added to Cart"
}
let albums = [{ name: "Album 1", price: 12.99, addedToCart: false },
{ name: "Album 2", price: 14.99, addedToCart: false}, 
{ name: "Album 3", price: 9.99, addedToCart: false }, 
{ name: "Album 4", price: 19.99, addedToCart: false }];

images.addEventListener("mouseover", increaseOpacity)
images.addEventListener("mouseout", makeTransparent)
images.addEventListener("click", addToCart)