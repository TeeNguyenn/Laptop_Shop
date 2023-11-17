const allCheckbox = document.querySelector('.cart__checkbox-all')
const checkboxs = document.querySelectorAll('.cart__checkbox')
const inputElements = document.querySelectorAll('.cart__quantity-input')
const totalElement = document.querySelector('.cart__total')
var checkboxArr = Array.from(checkboxs)

var sumPrice = 0;




function getParent(element, selector) {
    while(element.parentElement) {
        if(element.parentElement.matches(selector)) {
            return element.parentElement;
        }
        element = element.parentElement;
    }
}
function allCheck(checkboxList) {
    sumPrice = 0;
    checkboxList.forEach((checkboxItem) => {
        checkboxItem.checked = true;
        ableInput()

        var trElement = getParent(checkboxItem, 'tr');
        var priceElement= trElement.querySelector('.cart__price')
        var inputElement = trElement.querySelector('.cart__quantity-input')
        var subtotalElement = trElement.querySelector('.cart__subtotal')
        var price = '';
        price = priceElement.innerText.substr(0, priceElement.innerText.length -2)
        var priceNum = price.split('.').join('') * 1

        if(checkboxItem.matches(':checked')) {
            inputElement.disabled = false

            var isChange = false;
            var againTick = false;
            var againTickValue ;
            var prevValue;
            var count = 0;

            inputElement.onchange = (e) => {
                isChange = true;
                if(againTick) {
                    sumPrice -= againTickValue
                    againTick = false
                }
                if(count != 0) {
                    sumPrice -= prevValue;
                }
                var subtotal = inputElement.value * priceNum;
                subtotalElement.innerText= `${Math.floor((subtotal / 1000000))}.${Math.floor((subtotal % 1000000) / 1000)}.000 ₫`;
                sumPrice+= inputElement.value * priceNum
                totalElement.innerText = `${Math.floor((sumPrice / 1000000))}.${Math.floor((sumPrice % 1000000) / 1000)}.000 ₫`;          
                prevValue = inputElement.value * priceNum
                count++;                                

            }
            if(inputElement.value == 1) {
                var subtotal = inputElement.value * priceNum
                var milion = Math.floor((subtotal / 1000000))
                var thousand = Math.floor((subtotal % 1000000) / 1000)
                subtotal = `${milion}.${thousand}.000 ₫` 
                subtotalElement.innerText= subtotal;
                sumPrice+= inputElement.value * priceNum
                totalElement.innerText = `${Math.floor((sumPrice / 1000000))}.${Math.floor((sumPrice % 1000000) / 1000)}.000 ₫`;
                againTick = true;
                againTickValue = inputElement.value * priceNum;
            }
            if(inputElement.value != 1 && !isChange) {
                var subtotal = inputElement.value * priceNum
                var milion = Math.floor((subtotal / 1000000))
                var thousand = Math.floor((subtotal % 1000000) / 1000)
                subtotal = `${milion}.${thousand}.000 ₫`
                subtotalElement.innerText= subtotal;
                sumPrice+= inputElement.value * priceNum
                totalElement.innerText = `${Math.floor((sumPrice / 1000000))}.${Math.floor((sumPrice % 1000000) / 1000)}.000 ₫`;
                againTick = true;
                againTickValue = inputElement.value * priceNum;
            }
        }
        else {
            inputElement.disabled = true

            // xoa thanh tien va tinh lai tong tien
            var subtotal = inputElement.value * priceNum
            subtotalElement.innerText = `${Math.floor((subtotal / 1000000))}.${Math.floor((subtotal % 1000000) / 1000)}.000 ₫`
            sumPrice -= (inputElement.value * priceNum)
            if(sumPrice == 0) {
                totalElement.innerText = "0 ₫"          
            }
            else
                totalElement.innerText = `${Math.floor((sumPrice / 1000000))}.${Math.floor((sumPrice % 1000000) / 1000)}.000 ₫`
        }          
    })
}
function removeAllCheck(checkboxList) {
    checkboxList.forEach((checkboxItem) => {
        checkboxItem.checked = false;
        disableInput()
        var trElement = getParent(checkboxItem, 'tr');
        var priceElement= trElement.querySelector('.cart__price')
        var inputElement = trElement.querySelector('.cart__quantity-input')
        var subtotalElement = trElement.querySelector('.cart__subtotal')
        var price = '';
        price = priceElement.innerText.substr(0, priceElement.innerText.length -2)
        var priceNum = price.split('.').join('') * 1


        // huy check tat ca checkbox thi subtotal = 0 & total = 0
        subtotalElement.innerText = "0 ₫"
        sumPrice = 0
        totalElement.innerText = "0 ₫"          

    })
}
function ableInput() {
    Array.from(inputElements).forEach((inputElement) => {
        inputElement.disabled = false;
    })
}
function disableInput() {
    Array.from(inputElements).forEach((inputElement) => {
        inputElement.disabled = true;
    })
}
// tick tat ca product
allCheckbox.addEventListener('click', () => {
    if(allCheckbox.matches(':checked')) {
        allCheck(checkboxArr)
    }
    else {
        removeAllCheck(checkboxArr)
    }
})
// tick vao mot product
checkboxArr.forEach((checkbox, index) => {
    checkbox.addEventListener('click', (e) => {
        var trElement = getParent(checkbox, 'tr');
        var priceElement= trElement.querySelector('.cart__price')
        var inputElement = trElement.querySelector('.cart__quantity-input')
        var subtotalElement = trElement.querySelector('.cart__subtotal')
        var price = '';
        price = priceElement.innerText.substr(0, priceElement.innerText.length -2)
        var priceNum = price.split('.').join('') * 1
        if(checkbox.matches(':checked')) {
            inputElement.disabled = false

            var isChange = false;
            var againTick = false;
            var againTickValue ;
            var prevValue;
            var count = 0;

            inputElement.onchange = (e) => {
                isChange = true;
                if(againTick) {
                    sumPrice -= againTickValue
                    againTick = false
                }
                if(count != 0) {
                    sumPrice -= prevValue;
                }
                var subtotal = inputElement.value * priceNum;
                subtotalElement.innerText= `${Math.floor((subtotal / 1000000))}.${Math.floor((subtotal % 1000000) / 1000)}.000 ₫`;
                sumPrice+= inputElement.value * priceNum
                totalElement.innerText = `${Math.floor((sumPrice / 1000000))}.${Math.floor((sumPrice % 1000000) / 1000)}.000 ₫`;          
                prevValue = inputElement.value * priceNum
                count++;                                

            }
            if(inputElement.value == 1) {
                var subtotal = inputElement.value * priceNum
                var milion = Math.floor((subtotal / 1000000))
                var thousand = Math.floor((subtotal % 1000000) / 1000)
                subtotal = `${milion}.${thousand}.000 ₫` 
                subtotalElement.innerText= subtotal;
                sumPrice+= inputElement.value * priceNum
                totalElement.innerText = `${Math.floor((sumPrice / 1000000))}.${Math.floor((sumPrice % 1000000) / 1000)}.000 ₫`;
                againTick = true;
                againTickValue = inputElement.value * priceNum;
            }
            if(inputElement.value != 1 && !isChange) {
                var subtotal = inputElement.value * priceNum
                var milion = Math.floor((subtotal / 1000000))
                var thousand = Math.floor((subtotal % 1000000) / 1000)
                subtotal = `${milion}.${thousand}.000 ₫`
                subtotalElement.innerText= subtotal;
                sumPrice+= inputElement.value * priceNum
                totalElement.innerText = `${Math.floor((sumPrice / 1000000))}.${Math.floor((sumPrice % 1000000) / 1000)}.000 ₫`;
                againTick = true;
                againTickValue = inputElement.value * priceNum;
            }
        }
        else {
            inputElement.disabled = true

            // xoa thanh tien va tinh lai tong tien
            subtotalElement.innerText = "0 ₫"
            sumPrice -= (inputElement.value * priceNum)
            if(sumPrice == 0) {
                totalElement.innerText = "0 ₫"          
            }
            else
                totalElement.innerText = `${Math.floor((sumPrice / 1000000))}.${Math.floor((sumPrice % 1000000) / 1000)}.000 ₫`
        }
    })
})

// filter prodcut
var arr = [
    {
        src: '../../assets/img/dell1.JPG',
        nameProduct:'Laptop Dell Latitude',
        price: '7.990.000 ₫',
        type: 'low',
    },
    {
        src: '../../assets/img/dell3.JPG',
        nameProduct:'Laptop Dell Inspiron',
        price: '23.590.000 ₫',
        type: 'high',
    },
    {
        src: '../../assets/img/dell2.JPG',
        nameProduct:'Laptop Dell Vostro',
        price: '16.590.000 ₫',
        type: 'medium',
    },
    {
        src: '../../assets/img/hp1.jpg',
        nameProduct:'Laptop HP Notebook',
        price: '10.390.000 ₫',
        type: 'medium',
    },
    {
        src: '../../assets/img/acer1.JPG',
        nameProduct:'Laptop Acer Aspire',
        price: '10.190.000 ₫',
        type: 'medium',
    },
    {
        src: '../../assets/img/acer2.JPG',
        nameProduct:'Laptop Acer Nitro 5',
        price: '16.790.000 ₫',
        type: 'medium',
    },
    {
        src: '../../assets/img/acer3.JPG',
        nameProduct:'Laptop Acer Nitro 5',
        price: '22.390.000 ₫',
        type: 'high',
    },
    {
        src: '../../assets/img/acer4.JPG',
        nameProduct:'Laptop Acer Predator Helios',
        price: '32.590.000 ₫',
        type: 'high',
    },
    {
        src: '../../assets/img/mac2.JPG',
        nameProduct:'Apple Macbook Pro',
        price: '29.890.000 ₫',
        type: 'high',
    },
    {
        src: '../../assets/img/hp2.jpg',
        nameProduct:'Laptop HP Elitebook',
        price: '9.890.000 ₫',
        type: 'low',
    },
    {
        src: '../../assets/img/hp2.jpg',
        nameProduct:'Laptop HP Elitebook',
        price: '9.890.000 ₫',
        type: 'low',
    },
    {
        src: '../../assets/img/hp3.jpg',
        nameProduct:'Laptop HP 14 DQ0005DX',
        price: '5.790.000 ₫',
        type: 'low',
    },
]

const filterBody = document.querySelector('.cart__sort-body')
const filterBodyTitle = document.querySelector('.cart__sort-title')
const filterContainer = document.querySelector('.cart__sort-list')
const filterList = document.querySelectorAll('.cart__sort-item')
const trElements = document.querySelectorAll('.row-table')


var filterBodyValue = filterBody.innerText
filterBody.addEventListener('click', () => {
    filterContainer.classList.add('show')
})
filterList.forEach((filterItem, index) => {
    filterItem.addEventListener('click', () => {

        filterContainer.classList.remove('show')
        filterBodyTitle.innerText = filterItem.innerText

        if(filterItem.type == 'all') {

            // random product
            var prevIndexList = [];
            var outputList = [];
            var amount = 1;
            while(amount <= checkboxArr.length) {
                var randomIndex = Math.floor(Math.random() * arr.length)
                var count = 0;
                for(var i = 0; i < prevIndexList.length; i++) {
                    if(randomIndex == prevIndexList[i]) {
                        count++
                    }
                }
                if(count == 0) {
                    prevIndexList.push(randomIndex)
                    outputList.push(arr[randomIndex])
                    amount++
                }
            }
            render(outputList)
            return;
        }
        let filterData = arr.filter((product) => {
            return product.type == filterItem.type
        })
        render(filterData)
    })
})

function render(list) {
    trElements.forEach((trElement, index) => {
        // Khi chon muc gia thi bo tick tat ca checkbox neu checkall ko dc checked
        if(allCheckbox.matches(':checked')) {
            allCheck(checkboxArr)
        }
        else {
             // Cho tong tien ve bang 0
            sumPrice = 0
            removeAllCheck(checkboxArr)
            totalElement.innerText = "0 ₫"
        }

        var imgElement = trElement.querySelector('.cart__img')
        var nameElement = trElement.querySelector('.cart__name')
        var priceElement = trElement.querySelector('.cart__price')

        imgElement.src = list[index].src
        nameElement.innerText = list[index].nameProduct
        priceElement.innerText = list[index].price
    })
}




