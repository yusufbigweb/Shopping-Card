const api = 'https://fakestoreapi.com/products';


const basket = []

async function fetchData() {

    const fetchHere = await fetch(api);
    const convertJson = await fetchHere.json();
    const productRow = document.getElementById('productRow');

    convertJson.map((val)=>{

        const paramenter = val.id
        productRow.innerHTML += `
        
          <div class="product-col">
                <div class="center-image">           
                     <img src="${val.image}" alt="product loading..." width="200px">
                </div>
                        <h3 class="product-title">${val.title}</h3>
                        <p class="description">${val.description.length > 125 ? val.description.slice(0, 125) + "..." : val.description}</p>
                        <div class="quantity">
                            <div class="price"> $${val.price}</div>
                            <div class="quan-count">
                                <div onclick="decrement(${paramenter})" class="decreing"><i class="bi bi-dash-lg"></i></div>
                                <div id=${paramenter} class="showing-update"><span>0</span></div>
                                <div onclick="increment(${paramenter})" class="increing"><i class="bi bi-plus-lg"></i></div>
                            </div>
                        </div>
                    </div>
        `
    })

}



fetchData()

const increment = (paramenter)=>{
    console.log(basket)

    const search = basket.find((x)=> x.id === paramenter)

    if(search === undefined){

        basket.push({
        id: paramenter,
        item: 1
    })

    }else{
        search.item += 1;
    }

    
}
const decrement = (paramenter)=>{
    console.log(paramenter)
}
const update = ()=>{}
