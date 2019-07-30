


export function loadItems(cat, size) {
    //....
    let items = [
        {
            id: 1,
            name: 'Veg',
            price: 100.00,
            canBuy: true,
            imgPath: 'images/veg.png',
            description: 'always veg is yummy'
        },
        {
            id: 2,
            name: 'Non-Veg',
            price: 120.00,
            canBuy: true,
            imgPath: 'images/non-veg.png',
            description: 'non-veg is yummy'
        }
    ]

    // action ==> {type , payload}
    return { type: 'LOAD_ITEMS_SUCCESS', items }


}