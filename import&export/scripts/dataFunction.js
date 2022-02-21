async function getData(url) {


 try{

    let res = await fetch(url);
    let data = await res.json();

    return data.categories;

 }

 catch (err) {
     console.log("err:",err)
 }

}


function appendData(data,parent) {

  
    data.forEach((elem) => {
          
        document.querySelector("#contentTitle").innerHTML="CATEGORIES"
      
        let foodCard = document.createElement('div');
          
        let name = document.createElement('p');
        name.textContent=elem.strCategory;

        let img = document.createElement('img');
        img.src=elem.strCategoryThumb;
        img.setAttribute("width","100%");

        
        foodCard.append(img,name);
        parent.append(foodCard)

    })
}

export {getData,appendData};



async function getData1(url) {


    try{
   
       let res = await fetch(url);
       let data = await res.json();
   
       return data.meals;
       
   
    }
   
    catch (err) {
        console.log("err:",err)
    }
   
   }


function appendData1(data,parent) {


    data.forEach((elem) => {
       
        let foodCard = document.createElement('div');
          
        let name = document.createElement('p');
        name.textContent=elem.strMeal;

        let img = document.createElement('img');
        img.src=elem.strMealThumb;
        img.setAttribute("width","100%");


        foodCard.append(img,name);
        parent.append(foodCard)

    })
}

export{getData1,appendData1};



async function getData2(url) {


    try{
   
       let res = await fetch(url);
       let data = await res.json();
   
       return data.meals;
    //    console.log(data);
   
    }
   
    catch (err) {
        console.log("err:",err)
    }
   
   }


function appendData2(data,parent) {


    data.forEach((elem) => {

        document.querySelector("#contentTitle").innerHTML="RECIPE OF THE DAY"
       
        const foodCard = document.createElement('div');
        foodCard.setAttribute("class","FoodCard")
          
        let name = document.createElement('p');
        name.textContent=elem.strMeal;

        let img = document.createElement('img');
        img.src=elem.strMealThumb;
        img.setAttribute("width","100%");

        const content = document.createElement("div");
        content.setAttribute("class","Content")
        
        let category = document.createElement("p");
        category.textContent=`Category: ${elem.strCategory}`;

        let area = document.createElement('p');
        area.textContent=`Food-style: ${elem.strArea}`;

        let Ingredients1 = document.createElement("p");
        Ingredients1.textContent=`Ingredients-1: ${elem.strIngredient1}`;

        let Ingredients2 = document.createElement("p");
        Ingredients2.textContent=`Ingredients-2: ${elem.strIngredient2}`;
        
        let Ingredients3 = document.createElement("p");
        Ingredients3.textContent=`Ingredients-3: ${elem.strIngredient3}`;
        
        let Ingredients4 = document.createElement("p");
        Ingredients4.textContent=`Ingredients-4: ${elem.strIngredient4}`;
        
        let Ingredients5 = document.createElement("p");
        Ingredients5.textContent=`Ingredients-5: ${elem.strIngredient5}`;
        
        let Ingredients6 = document.createElement("p");
        Ingredients6.textContent=`Ingredients-6: ${elem.strIngredient6}`;
        
        let Ingredients7 = document.createElement("p");
        Ingredients7.textContent=`Ingredients-7: ${elem.strIngredient7}`;
        
        let Ingredients8 = document.createElement("p");
        Ingredients8.textContent=`Ingredients-8: ${elem.strIngredient8}`;
        
        let Ingredients9 = document.createElement("p");
        Ingredients9.textContent=`Ingredients-9: ${elem.strIngredient9}`;
        
        let Ingredients10 = document.createElement("p");
        Ingredients10.textContent=`Ingredients-10: ${elem.strIngredient10}`;
        
        let Ingredients11 = document.createElement("p");
        Ingredients11.textContent=`Ingredients-11: ${elem.strIngredient11}`;
        
        let Ingredients12 = document.createElement("p");
        Ingredients12.textContent=`Ingredients-12: ${elem.strIngredient12}`;


        foodCard.append(img,name);
        content.append(category,area,Ingredients1,Ingredients2,Ingredients3,Ingredients4,Ingredients5,Ingredients6,Ingredients7,Ingredients8,Ingredients9,Ingredients10,Ingredients11,Ingredients12);
        parent.append(foodCard,content)

    })
}

export {getData2,appendData2};

