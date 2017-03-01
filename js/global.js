
var searchResults = {};

getSearchResults('board games');

function getSearchResults(searchTerm) {
    fetch('https://thinksaydo.com/tiyproxy.php?https://openapi.etsy.com/v2/listings/active?api_key=h9oq2yf3twf4ziejn10b717i&keywords=' + encodeURIComponent(searchTerm) + '&includes=Images,Shop')
        .then(response => response.json())
        .then(data => {
            searchResults = data;
            
            console.log(searchResults);

            renderResultCards();
        });
}

function renderResultCards() {
    searchResults.results.forEach(createUserCard)
}

function createUserCard(card) {
    var resultCard = `<div class="col-sm-4 col-md-3">
        <div class="card">
            <img src=${card.Images[0].url_170x135} />
            <div class="card-caption">
            <div>${card.title.slice(0, 50)}...</div>
            <div>
            <span class="text-muted card-shop">${card.Shop.shop_name}</span> <span class="pull-right text-success card-price">${card.price}</span>
            </div>
            </div>
        </div>
    </div>`

    document.querySelector('#cards').innerHTML += resultCard;
    
};

// function renderResultsCards() {
//     results.forEach(function(result) {

//     });
// }

// createCard({
//     src: 'https://unsplash.it/400?image=985',
//     caption: 'Something Else',
//     shop: 'This Shop',
//     price: '$37.00'
// });

// createCard({
//     src: 'https://unsplash.it/400?image=985',
//     caption: 'Something Else',
//     shop: 'This Shop',
//     price: '$37.00'
// });

// createCard({
//     src: 'https://unsplash.it/400?image=985',
//     caption: 'Something Else',
//     shop: 'This Shop',
//     price: '$37.00'
// });

// createCard({
//     src: 'https://unsplash.it/400?image=985',
//     caption: 'Something Else',
//     shop: 'This Shop',
//     price: '$37.00'
// });

// createCard({
//     src: 'https://unsplash.it/400?image=985',
//     caption: 'Something Else',
//     shop: 'This Shop',
//     price: '$37.00'
// });

// createCard({
//     src: 'https://unsplash.it/400?image=985',
//     caption: 'Something Else',
//     shop: 'This Shop',
//     price: '$37.00'
// });

// createCard({
//     src: 'https://unsplash.it/400?image=985',
//     caption: 'Something Else',
//     shop: 'This Shop',
//     price: '$37.00'
// });

// createCard({
//     src: 'https://unsplash.it/400?image=985',
//     caption: 'Something Else',
//     shop: 'This Shop',
//     price: '$37.00'
// });

// createCard({
//     src: 'https://unsplash.it/400?image=985',
//     caption: 'Something Else',
//     shop: 'This Shop',
//     price: '$37.00'
// });

// createCard({
//     src: 'https://unsplash.it/400?image=985',
//     caption: 'Something Else',
//     shop: 'This Shop',
//     price: '$37.00'
// });

// createCard({
//     src: 'https://unsplash.it/400?image=985',
//     caption: 'Something Else',
//     shop: 'This Shop',
//     price: '$37.00'
// });

// createCard({
//     src: 'https://unsplash.it/400?image=985',
//     caption: 'Something Else',
//     shop: 'This Shop',
//     price: '$37.00'
// });

// createCard({
//     src: 'https://unsplash.it/400?image=985',
//     caption: 'Something Else',
//     shop: 'This Shop',
//     price: '$37.00'
// });

// createCard({
//     src: 'https://unsplash.it/400?image=985',
//     caption: 'Something Else',
//     shop: 'This Shop',
//     price: '$37.00'
// });

// createCard({
//     src: 'https://unsplash.it/400?image=985',
//     caption: 'Something Else',
//     shop: 'This Shop',
//     price: '$37.00'
// });

// createCard({
//     src: 'https://unsplash.it/400?image=985',
//     caption: 'Something Else',
//     shop: 'This Shop',
//     price: '$37.00'
// }); 



