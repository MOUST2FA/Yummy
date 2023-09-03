async function pasta() {
    let remet = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
    let use = await remet.json()
    // console.log(use.meals);
    chiled(use.meals)
}
pasta()

function chiled(meals) {
    let carton1 = ``
    for (let i = 0; i < meals.length; i++) {
        carton1 += `
       
       <div class="col-md-3 demo my-4 ">
       <img src="${meals[i].strMealThumb}" class="w-100 rounded-3" alt="">
       <div class="positin">
           <h4>${meals[i].strMeal}</h4>
       </div>
       </div>
       
       `
    }
    document.getElementById('awet').innerHTML = carton1
}

let awet = document.getElementById('awet')

awet.addEventListener('click', function (e) {
    if (e.target !== awet) {
        prodgetMale(e.target.innerText)
    }
    awet.style.display = "none"

})

async function prodgetMale(yeses) {
    let ress7 = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${yeses}`)
    let data7 = await ress7.json()
    // console.log(data7.meals);
    displaygetMale(data7.meals)
}

function displaygetMale(meals) {
    let ccarton1 = ``
    for (let i = 0; i < meals.length; i++) {
        ccarton1 += `
       
        <div class="col-md-4 text-white">
          <img src="${meals[i].strMealThumb}" class="w-100" alt="">
          <h4 class="mt-3">${meals[i].strMeal}</h4>
        </div>
        <div class="col-md-7 offset-1">
          <div class="text-white">
            <h4>Lorem ipsum dolor sit amet.</h4>
            <p>${meals[i].strInstructions}</p>
            <h4>Area : <span>${meals[i].strArea}</span>
            </h4>
            <h4>Category : <span>${meals[i].strCategory}</span>
            </h4>
            <h4>Recipes :</h4>
          </div>
          <div class="my-3 ">
            <button class="p-2 rounded-3">${meals[i].strIngredient1}</button>
            <button class="ms-2 p-2 rounded-3">${meals[i].strIngredient2}</button>
            <button class="ms-2 p-2 rounded-3">${meals[i].strIngredient3}</button>
            <button class="ms-2 p-2 rounded-3">${meals[i].strIngredient4}</button>
            <button class="ms-2 p-2 rounded-3">${meals[i].strIngredient5}</button>
          </div>
          <div class="my-3">
            <button class="p-2 rounded-3">${meals[i].strIngredient6}</button>
            <button class="ms-2 p-2 rounded-3">${meals[i].strIngredient7}</button>
            <button class="ms-2 p-2 rounded-3">${meals[i].strIngredient8}</button>
            <button class="ms-2 p-2 rounded-3">${meals[i].strIngredient9}</button>
            <button class="ms-2 p-2 rounded-3">${meals[i].strIngredient10}</button>
          </div>
          <div>
            <button class=" p-2 rounded-3">${meals[i].strIngredient11}</button>
            <button class="ms-2 p-2 rounded-3">${meals[i].strIngredient12}</button>
            <button class="ms-2 p-2 rounded-3">${meals[i].strIngredient13}</button>
          </div>
          <h5 class="text-white my-2">Tags :</h5>
          <button class="p-2 rounded-3">${meals[i].strTags}</button>
          <div class="my-3">
          <a href="${meals[i].strSource}"><button class="btn btn-success">Source</button></a>
          <a href="${meals[i].strYoutube}"><button class="btn btn-danger ms-3">Youtube</button></a>          
        </div>
        </div>

       
       `
    }
    document.getElementById('iade').innerHTML = ccarton1
}


//*****************************************************


async function getnews() {
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
    let data = await response.json()
    // console.log(data.categories);
    display(data.categories)
}
getnews()

function display(categories) {
    let box = ``
    for (let i = 0; i < categories.length; i++) {
        box += `
        <div id="demo-1" class="col-md-3 demo  mt-4">
        <img src="${categories[i].strCategoryThumb}" class="w-100" alt="pizza">
        <div class="positin d-flex flex-column ">
            <h4 class="text-black cate">${categories[i].strCategory}</h4>
            <p class="text-black">${categories[i].strCategoryDescription.split(" ").slice(0,20).join(" ")}</p>
        </div>
    </div>

        `
    }
    document.getElementById('ching').innerHTML = box
}


let ching = document.getElementById('ching')
let padng = document.getElementById('padng')

ching.addEventListener('click', function (e) {
    if (e.target !== ching) {
        pasta1(e.target.innerText)
    }
    padng.style.display = "none"
})

async function pasta1(eaet1) {
    let ressps1 = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${eaet1}`)
    let data1a = await ressps1.json()
    console.log(data1a.meals);
    proodPasta(data1a.meals)
}

function proodPasta(meals) {
    let carton1a2 = ``
    for (let i = 0; i < meals.length; i++) {
        carton1a2 += `

       <div class="col-md-3 demo my-4 ">
       <img src="${meals[i].strMealThumb}" class="w-100 rounded-3" alt="">
       <div class="positin">
           <h4>${meals[i].strMeal}</h4>
       </div>
       </div>
       `
    }
    document.getElementById('beefef').innerHTML = carton1a2

}


let beefef = document.getElementById('awet')

beefef.addEventListener('click', function () {
    if (e.target !== beefef) {
        prod1Male(e.target.innerText)
    }
    beefef.style.display = "none"

})

async function prod1Male(yeses8) {
    let ress7 = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${yeses8}`)
    let data7 = await ress7.json()
    // console.log(data7.meals);
    carsul(data7.meals)
}

function carsul(meals) {
    let ccarton8 = ``
    for (let i = 0; i < meals.length; i++) {
        ccarton8 += `
       
        <div class="col-md-4 text-white">
          <img src="${meals[i].strMealThumb}" class="w-100" alt="">
          <h4 class="mt-3">${meals[i].strMeal}</h4>
        </div>
        <div class="col-md-7 offset-1">
          <div class="text-white">
            <h4>Lorem ipsum dolor sit amet.</h4>
            <p>${meals[i].strInstructions}</p>
            <h4>Area : <span>${meals[i].strArea}</span>
            </h4>
            <h4>Category : <span>${meals[i].strCategory}</span>
            </h4>
            <h4>Recipes :</h4>
          </div>
          <div class="my-3 ">
            <button class="p-2 rounded-3">${meals[i].strIngredient1}</button>
            <button class="ms-2 p-2 rounded-3">${meals[i].strIngredient2}</button>
            <button class="ms-2 p-2 rounded-3">${meals[i].strIngredient3}</button>
            <button class="ms-2 p-2 rounded-3">${meals[i].strIngredient4}</button>
            <button class="ms-2 p-2 rounded-3">${meals[i].strIngredient5}</button>
          </div>
          <div class="my-3">
            <button class="p-2 rounded-3">${meals[i].strIngredient6}</button>
            <button class="ms-2 p-2 rounded-3">${meals[i].strIngredient7}</button>
            <button class="ms-2 p-2 rounded-3">${meals[i].strIngredient8}</button>
            <button class="ms-2 p-2 rounded-3">${meals[i].strIngredient9}</button>
            <button class="ms-2 p-2 rounded-3">${meals[i].strIngredient10}</button>
          </div>
          <div>
            <button class=" p-2 rounded-3">${meals[i].strIngredient11}</button>
            <button class="ms-2 p-2 rounded-3">${meals[i].strIngredient12}</button>
            <button class="ms-2 p-2 rounded-3">${meals[i].strIngredient13}</button>
          </div>
          <h5 class="text-white my-2">Tags :</h5>
          <button class="p-2 rounded-3">${meals[i].strTags}</button>
          <div class="my-3">
          <a href="${meals[i].strSource}"><button class="btn btn-success">Source</button></a>
          <a href="${meals[i].strYoutube}"><button class="btn btn-danger ms-3">Youtube</button></a>          
        </div>
        </div>

       
       `
    }
    document.getElementById('beef9').innerHTML = ccarton8
}


//*****************************************************


async function gets() {
    let res = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
    let site = await res.json()
    // console.log(site.meals);
    prod(site.meals)
}

gets()

function prod(meals) {
    let carton = ``
    for (let i = 0; i < meals.length; i++) {
        carton += `
            <div class="col-md-3 prod prod1 text-center my-4">
            <i class="fa-solid fa-house-laptop fa-4x"></i>
            <h3>${meals[i].strArea}</h3>
            </div>
        `
    }

    document.getElementById('demo_0').innerHTML = carton
}


let demo_0 = document.getElementById('demo_0')

demo_0.addEventListener('click', function (e) {

    if (e.target !== demo_0) {
        getMale(e.target.innerText)
    }

    demo_0.style.display = "none"

})

async function getMale(cuntre) {
    let ress = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${cuntre}`)
    let data1 = await ress.json()
    // console.log(data1.meals);
    displayMale(data1.meals)
}

function displayMale(meals) {
    let carton1 = ``
    for (let i = 0; i < meals.length; i++) {
        carton1 += `
       
       <div class="col-md-3 demo my-4 ">
       <img src="${meals[i].strMealThumb}" class="w-100 rounded-3" alt="">
       <div class="positin">
           <h4>${meals[i].strMeal}</h4>
       </div>
       </div>

       
       `
    }
    document.getElementById('meal').innerHTML = carton1
}


let meal = document.getElementById('meal')

meal.addEventListener('click', function (e) {
    if (e.target !== meal) {
        reap(e.target.innerText)
    }
    meal.style.display = "none"
})



//*****************************************************


async function posts() {
    let round = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
    let aro = await round.json()
    // console.log(aro.meals);
    regex(aro.meals)
}

posts()

function regex(meals) {
    let box1 = ``
    for (let i = 0; i < 20; i++) {
        box1 += `
        <div class="col-md-3 text-center my-4 manga">
            <i class="fa-solid fa-drumstick-bite fa-4x"></i>
            <h3>${meals[i].strIngredient}</h3>
            <p>${meals[i].strDescription.split(" ").slice(0,20).join(" ")}</p>
        </div>
        `
    }
    document.getElementById('monde').innerHTML = box1
}

let monde = document.getElementById("monde")
let rome = document.getElementById("rome")

monde.addEventListener('click', function (e) {
    if (e.target !== monde) {
        getReaps(e.target.innerText)
    }
    rome.style.display = "none"

})

async function getReaps(reaps) {
    let repss = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${reaps}`)
    let dataa1 = await repss.json()
    // console.log(dataa1.meals);
    displayReaps(dataa1.meals)
}

function displayReaps(meals) {
    let cartona = ``
    for (let i = 0; i < meals.length; i++) {
        cartona += `
       
       <div class="col-md-3 demo my-4 ">
       <img src="${meals[i].strMealThumb}" class="w-100 rounded-3" alt="">
       <div class="positin">
           <h4>${meals[i].strMeal}</h4>
       </div>
       </div>
       `
    }
    document.getElementById('mondee1').innerHTML = cartona
}

let mondee1 = document.getElementById('mondee1')

mondee1.addEventListener('click', function (e) {
    if (e.target !== mondee1) {
        reap(e.target.innerText)
    }
    mondee1.style.display = "none"
})

async function reap(area1) {
    let rep = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${area1}`)
    let dat = await rep.json()
    // console.log(dataa1.meals);
    displayget1(dat.meals)
}

function displayget1(meals) {
    let ccarton1a = ``

    for (let i = 0; i < meals.length; i++) {
        ccarton1a += `
       
        <div class="col-md-4 text-white">
          <img src="${meals[i].strMealThumb}" class="w-100" alt="">
          <h4 class="mt-3">${meals[i].strMeal}</h4>
        </div>
        <div class="col-md-7 offset-1">
          <div class="text-white">
            <h4>Lorem ipsum dolor sit amet.</h4>
            <p>${meals[i].strInstructions}</p>
            <h4>Area : <span>${meals[i].strArea}</span>
            </h4>
            <h4>Category : <span>${meals[i].strCategory}</span>
            </h4>
            <h4>Recipes :</h4>
          </div>
          <div class="my-3 ">
            <button class="p-2 rounded-3">${meals[i].strIngredient1}</button>
            <button class="ms-2 p-2 rounded-3">${meals[i].strIngredient2}</button>
            <button class="ms-2 p-2 rounded-3">${meals[i].strIngredient3}</button>
            <button class="ms-2 p-2 rounded-3">${meals[i].strIngredient4}</button>
            <button class="ms-2 p-2 rounded-3">${meals[i].strIngredient5}</button>
          </div>
          <div class="my-3">
            <button class="p-2 rounded-3">${meals[i].strIngredient6}</button>
            <button class="ms-2 p-2 rounded-3">${meals[i].strIngredient7}</button>
            <button class="ms-2 p-2 rounded-3">${meals[i].strIngredient8}</button>
            <button class="ms-2 p-2 rounded-3">${meals[i].strIngredient9}</button>
            <button class="ms-2 p-2 rounded-3">${meals[i].strIngredient10}</button>
          </div>
          <div>
            <button class=" p-2 rounded-3">${meals[i].strIngredient11}</button>
            <button class="ms-2 p-2 rounded-3">${meals[i].strIngredient12}</button>
            <button class="ms-2 p-2 rounded-3">${meals[i].strIngredient13}</button>
          </div>
          <h5 class="text-white my-2">Tags :</h5>
          <button class="p-2 rounded-3">${meals[i].strTags}</button>
          <div class="my-3">
          <a href="${meals[i].strSource}"><button class="btn btn-success">Source</button></a>
          <a href="${meals[i].strYoutube}"><button class="btn btn-danger ms-3">Youtube</button></a>          
        </div>
        </div>

       
       `
    }
    document.getElementById('run1').innerHTML = ccarton1a
    document.getElementById('iade11').innerHTML = ccarton1a
}


//*****************************************************


function search(search) {
    displaySearch(search)
}

async function displaySearch(eaatt) {
    let serch = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${eaatt}`)
    let ddata = await serch.json()
    // console.log(ddata.meals);
    prodsearch(ddata.meals)
}

function prodsearch(meals) {
    let bboxx = ``
    for (let i = 0; i < meals.length; i++) {
        bboxx += `
        
        <div class="col-md-3 demo my-4 ">
        <img src="${meals[i].strMealThumb}" class="w-100 rounded-3" alt="">
        <div class="positin">
            <h4>${meals[i].strMeal}</h4>
        </div>
        </div>
 
        
        `
    }
    document.getElementById('dowen1').innerHTML = bboxx
}


function search1(search1) {
    displaySearch(search1)

}

async function displaySearch(eeaatt) {
    let serch1 = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${eeaatt}`)
    let ddaata = await serch1.json()
    // console.log(ddaata.meals);
    prodsearch(ddaata.meals)
}

function prodsearch(meals) {
    let bboxx = ``
    for (let i = 0; i < meals.length; i++) {
        bboxx += `
            
            <div class="col-md-3 demo my-4 ">
            <img src="${meals[i].strMealThumb}" class="w-100 rounded-3" alt="">
            <div class="positin">
                <h4>${meals[i].strMeal}</h4>
            </div>
            </div>
     
            
            `
    }
    document.getElementById('dowen1').innerHTML = bboxx
}


//*****************************************************
let prodNAme = document.getElementById('prodNAme')
let prodPhone = document.getElementById('prodPhone')
let prodPass = document.getElementById('prodPass')
let prodEmail = document.getElementById('prodEmail')
let prodAge = document.getElementById('prodAge')
let prodDesc = document.getElementById('prodDesc')
let caler = document.querySelector('.caler')
let caler1 = document.querySelector('.caler1')
let caler2 = document.querySelector('.caler2')
let caler3 = document.querySelector('.caler3')
let caler4 = document.querySelector('.caler4')
let caler5 = document.querySelector('.caler5')

function valeted() {
    let products = {

        name: prodNAme.value,
        phone: prodPhone.value,
        pass: prodPass.value,
        email: prodEmail.value,
        age: prodAge.value,
        desc: prodDesc.value,
    }
    if (check(prodNAme.value) == true) {
        caler.style.display = "none"

    } else {
        prodNAme.addEventListener('click', function () {
            caler.style.display = "block"
        })
    }

    if (check1(prodEmail.value) == true) {
        caler3.style.display = "none"

    } else {
        prodEmail.addEventListener('click', function () {
            caler3.style.display = "block"
        })
    }

    if (check2(prodPhone.value) == true) {
        caler1.style.display = "none"

    } else {
        prodPhone.addEventListener('click', function () {
            caler1.style.display = "block"
        })
    }

    if (check3(prodPass.value) == true) {
        caler2.style.display = "none"

    } else
        prodPass.addEventListener('click', function () {
            caler2.style.display = "block"
        })
    }
    if (check4(prodAge.value) == true) {
    caler4.style.display = "none"

    } else {
    prodAge.addEventListener('click', function () {
        caler4.style.display = "block"
    })
    }
    if (check5(prodDesc.value) == true) {
    caler5.style.display = "none"

    } else {
    prodDesc.addEventListener('click', function () {

        caler5.style.display = "block"
    })
  
} 
valeted()

prodNAme.addEventListener('keyup', function () {
    valeted()
})
prodEmail.addEventListener('keyup', function () {
    valeted()
})
prodPhone.addEventListener('keyup', function () {
    valeted()
})
prodAge.addEventListener('keyup', function () {
    valeted()
})
prodDesc.addEventListener('keyup', function () {
    valeted()
})


function check(str) {
    let regex = /^[A-Za-z]{2,15}$/
    return regex.test(str)
}

function check1(str1) {
    let regex1 = /^[A-Za-z]{2,15}@(gmail).com$/
    return regex1.test(str1)
}

function check2(str1) {
    let regex2 = /^01[0125][0-9]{8}$/
    return regex2.test(str1)
}

function check3(str1) {
    let regex3 = /^[A_Z][a-z0-9]{8,}$/
    return regex3.test(str1)
}

function check4(str1) {
    let regex4 = /^[1-9][0-9]{2}$/
    return regex4.test(str1)
}

function check5(str1) {
    let regex5 = /^[A_Z][a-z0-9]{8,}$/
    return regex5.test(str1)
}


let bar = document.getElementById('bar')
let clos = document.getElementById('clos')

bar.addEventListener('click', function () {
    clos.style.display = "flex"
    bar.style.display = "none"
})
clos.addEventListener('click', function () {
    clos.style.display = "none"
    bar.style.display = "flex"
})


$('.clos').click(function () {
    $('.root').toggle(500)
})

$('.bar').click(function () {
    $('.root').toggle(500)
})

$('ul li a').click(function () {
    $('#root').hide(500)
    $('#bar').show(10)
    $('#clos').hide(10)
})

$('#Search').hide(10)
$('#Categories').hide(10)
$('#Area').hide(10)
$('#Ingredients').hide(10)
$('#ContactUs').hide(10)

$('#serh').click(function () {
    $('#Search').show(10)
    $('#hiede').hide(10)
    $('#Categories').hide(10)
    $('#Area').hide(10)
    $('#Ingredients').hide(10)
    $('#ContactUs').hide(10)

})

$('#Categ').click(function () {
    $('#Categories').show(10)
    $('#hiede').hide(10)
    $('#Search').hide(10)
    $('#Area').hide(10)
    $('#Ingredients').hide(10)
    $('#ContactUs').hide(10)
})

$('#Areae').click(function () {
    $('#Area').show(10)
    $('#hiede').hide(10)
    $('#Search').hide(10)
    $('#Categories').hide(10)
    $('#Ingredients').hide(10)
    $('#ContactUs').hide(10)
})

$('#Ingred').click(function () {
    $('#Ingredients').show(10)
    $('#hiede').hide(10)
    $('#Search').hide(10)
    $('#Categories').hide(10)
    $('#Area').hide(10)
    $('#ContactUs').hide(10)
})

$('#Cont').click(function () {
    $('#ContactUs').show(10)
    $('#hiede').hide(10)
    $('#Search').hide(10)
    $('#Categories').hide(10)
    $('#Area').hide(10)
    $('#Ingredients').hide(10)
})

$(window).on('load', function () {
    $('.spinner').fadeOut(1000)
    $('body').css('overflow', 'auto')
})