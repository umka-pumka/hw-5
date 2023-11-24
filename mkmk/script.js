// задание 1

// function TextFirstLi () {
//     const FirstLi = document.querySelector('li')
//     return FirstLi ? FirstLi.textContent : null
// }

// const result = TextFirstLi();
// console.log(result);

//===================================

// задание 2

// function TextFirstLi(){
//     const liElement = document.querySelectorAll('li')
//     const textArray = []

//     liElement.forEach(li => {
//         textArray.push(li.textContent);
//     })
//     return textArray
// }

// const resulArray = TextFirstLi();
// console.log(resulArray);

//=======================================

// .задание 3

// function TextFirstLi(){
//         const listElement = document.querySelectorAll('.list-item')
//         const textArray = []
    
//         listElement.forEach(listElement => {
//             textArray.push(listElement.textContent);
//         })
//         return textArray
//     }
    
//     const resulArray = TextFirstLi();
//     console.log(resulArray);
    

//====================================

//задание 4


// function ClassListItem() {
//     const listElements = document.querySelectorAll('.list-item')
//     return Array.from(listElements, item => item.getAttribute('class'));
// }


//     const resultArray = ClassListItem();
//     console.log(resultArray);


//=======================================

//задание 5


// function ClassListItem() {
//     const listElements = document.querySelectorAll('.list-item')
//     return Array.from(listElements, item => item.getAttribute('data-test-id'));
// }


//     const resultArray = ClassListItem();
//     console.log(resultArray);


//===========================================
//задание 6



//     function findElements() {
//     const mismatchedElements = [];

//     document.querySelectorAll('.list-item').forEach(item => {
//         const text = item.textContent.toLowerCase().trim();
//         const classList = item.classList;

//         if (!classList.contains(text)) {
//             const dataTestId = item.getAttribute('data-test-id');
//             mismatchedElements.push(dataTestId);
//         }
//     });

//     return mismatchedElements;
// }

// const resultArray = findElements();
// console.log(resultArray);