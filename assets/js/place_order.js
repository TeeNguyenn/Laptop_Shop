const tableElements = document.querySelectorAll('.place-order__table')


function getParent(element, selector) {
    while(element.parentElement) {
        if(element.parentElement.matches(selector)) {
            return element.parentElement;
        }
        element = element.parentElement;
    }
}
// Handle select
const selectElement = document.querySelector('#choose-price')
const table1 = document.querySelector('#table-1')
const table2 = document.querySelector('#table-2')
const table3 = document.querySelector('#table-3')
const table4 = document.querySelector('#table-4')

selectElement.addEventListener('change', () => {
    if(selectElement.value == 1) {
        table1.classList.remove('hide')
        table2.classList.add('hide')
        table3.classList.add('hide')
        table4.classList.add('hide')
    }
    else if(selectElement.value == 2) {
        table1.classList.add('hide')
        table2.classList.remove('hide')
        table3.classList.add('hide')
        table4.classList.add('hide')
    }
    else if(selectElement.value == 3) {
        table1.classList.add('hide')
        table2.classList.add('hide')
        table3.classList.remove('hide')
        table4.classList.add('hide')
    }
    else {
        table1.classList.add('hide')
        table2.classList.add('hide')
        table3.classList.add('hide')
        table4.classList.remove('hide')
    }
})

// Handle Table
Array.from(tableElements).forEach((tableElement) => {
    const checkboxs = tableElement.querySelectorAll('.place-order__checkbox')
    const sumPriceElement = tableElement.querySelector('.place-order__total-price')
    var sumPrice = 0;
    Array.from(checkboxs).forEach((checkbox, index) => {
        checkbox.addEventListener('click', (e) => {
    
            if(checkbox.matches(':checked')) {
                var checkboxParent = getParent(checkbox, '.place-order__row')
                var inputElement = checkboxParent.querySelector('.place-order__input')
                var overlayItem = checkboxParent.querySelector('.place-order__overlay')
                var quantityElement = checkboxParent.querySelector('.place-order__price')
                var totalPrice = checkboxParent.querySelector('.place-order__total')
    
                // Them class "place-order__overlay--hide" vao overlayItem de nhhap du lieu vao o input
                overlayItem.classList.add('place-order__overlay--hide')
    
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
                    totalPrice.innerText= inputElement.value * quantityElement.innerText;
                    sumPrice+= inputElement.value * quantityElement.innerText
                    sumPriceElement.innerText = sumPrice;          
                    prevValue = inputElement.value * quantityElement.innerText
                    count++;                                
    
                }
                if(inputElement.value != 0 && !isChange) {
                    totalPrice.innerText= inputElement.value * quantityElement.innerText;
                    sumPrice+= inputElement.value * quantityElement.innerText
                    sumPriceElement.innerText = sumPrice;
                    againTick = true;
                    againTickValue = inputElement.value * quantityElement.innerText;
                }
            }
            else {
                var checkboxParent = getParent(checkbox, '.place-order__row')
                var overlayItem = checkboxParent.querySelector('.place-order__overlay')
                var inputElement = checkboxParent.querySelector('.place-order__input')
                var totalPrice = checkboxParent.querySelector('.place-order__total')
                var quantityElement = checkboxParent.querySelector('.place-order__price')
    
    
                // Huy class "place-order__overlay--hide" de khong cho nhap du lieu vao o input
                overlayItem.classList.remove('place-order__overlay--hide')
    
                // Xoa value cua o input
                // inputElement.value = '';
    
    
                // xoa thanh tien va tinh lai tong tien
                totalPrice.innerText = '0'
                sumPrice -= (inputElement.value * quantityElement.innerText)
                sumPriceElement.innerText = sumPrice
    
    
    
            }
        })
    })
})
