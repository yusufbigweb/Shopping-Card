const api = 'https://fakestoreapi.com/products';

async function fetchData() {
    const fetchHere = await fetch(api);
    const convertJson = await fetchHere.json();
    const productRow = document.getElementById('productRow');

    convertJson.map((val)=>{
        productRow.innerHTML += `
        
          <div class="product-col">
                        <img src="${val.image}" alt="product loading..." width="200px">
                        <h3 class="product-title">${val.title}</h3>
                        <p class="description">${val.description.length > 125 ? val.description.slice(0, 125) + "..." : val.description}</p>
                        <div class="quantity">
                            <div class="price"> $${val.price}</div>
                            <div class="quan-count">
                                <div class="decreing"><i class="bi bi-dash-lg"></i></div>
                                <div class="showing-update"><span>0</span></div>
                                <div class="increing"><i class="bi bi-plus-lg"></i></div>
                            </div>
                        </div>
                    </div>

        `
    })

}

fetchData()


