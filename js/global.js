
createCard({
    src: 'https://unsplash.it/400?image=985',
    caption: 'Something Else',
    shop: 'This Place',
    price: '$37.00'
});

createCard({
    src: 'https://unsplash.it/400?image=985',
    caption: 'Something Else',
    shop: 'This Place',
    price: '$37.00'
});

createCard({
    src: 'https://unsplash.it/400?image=985',
    caption: 'Something Else',
    shop: 'This Place',
    price: '$37.00'
});

createCard({
    src: 'https://unsplash.it/400?image=985',
    caption: 'Something Else',
    shop: 'This Place',
    price: '$37.00'
});

createCard({
    src: 'https://unsplash.it/400?image=985',
    caption: 'Something Else',
    shop: 'This Place',
    price: '$37.00'
});

createCard({
    src: 'https://unsplash.it/400?image=985',
    caption: 'Something Else',
    shop: 'This Place',
    price: '$37.00'
});

createCard({
    src: 'https://unsplash.it/400?image=985',
    caption: 'Something Else',
    shop: 'This Place',
    price: '$37.00'
});

createCard({
    src: 'https://unsplash.it/400?image=985',
    caption: 'Something Else',
    shop: 'This Place',
    price: '$37.00'
});

createCard({
    src: 'https://unsplash.it/400?image=985',
    caption: 'Something Else',
    shop: 'This Place',
    price: '$37.00'
});

createCard({
    src: 'https://unsplash.it/400?image=985',
    caption: 'Something Else',
    shop: 'This Place',
    price: '$37.00'
});

createCard({
    src: 'https://unsplash.it/400?image=985',
    caption: 'Something Else',
    shop: 'This Place',
    price: '$37.00'
});

createCard({
    src: 'https://unsplash.it/400?image=985',
    caption: 'Something Else',
    shop: 'This Place',
    price: '$37.00'
});

function createCard(image) {
    var card = `<div class="card">
        <img src=${image.src} alt="image"/>
        <h5 class="card-caption">${image.caption}</h5>
        <span class="card-shop">${image.shop}</span>
        <span class="card-price">${image.price}</span>
    </div>`

    document.querySelector('#app').innerHTML += card
}

