
const MenuDishes = {
    Salads: {
        img: "../images/salad.jpg",
        quote: "Eat your greens to fit into your jeans.",
        dishes: [
            {
                dish: "Caesar (Green beans, soy sauce, chicken tenderloins)",
                price: "14$"
            },
            {
                dish: "Beef (Fish sauce, cucumber, beef steak)",
                price: "16$"
            },
            {
                dish: "Greek (Feta cheese, lemon, cucumber, pepper)",
                price: "12$"
            },
            {
                dish: "King prawn (Glass noodles, Thai basil, jumbo prawns)",
                price: "12$"
            },
            {
                dish: "Ricotta with tarragon (Ricotta, garlic, English peas)",
                price: "12$"
            },
            {
                dish: "Salmon and potato (Can salmon, eggs, baking potatoes)",
                price: "16$"
            },
            {
                dish: "Mango, avocado & macadamia",
                price: "19$"
            },
            {
                dish: "Bocconcini, tomato and basil",
                price: "16$"
            },

        ]
    },
    Soups: {
        img: "../images/soup.jpg",
        quote: "Hungry and thirsty? Soup solves both problems!",
        dishes: [
            {
                dish: "Mushroom Cream (White wine and parmesan)",
                price: "$10"
            },
            {
                dish: "Pumpkin Cream (Butternut squash, white, low sodium)",
                price: "$10"
            },
            {
                dish: "Gaspacho (Red wine vinegar, cherry tomatoes)",
                price: "$12"
            },
            {
                dish: "Creamy Chicken and Wild Rice Soup",
                price: "$15"
            },
            {
                dish: "Red beans soup (Bell peppers and beef broth)",
                price: "$8"
            },
            {
                dish: "Chicken soup with noodles (With chicken breast)",
                price: "$9"
            },
            {
                dish: "Cream of mushroom soup (Marsala wine and chicken)",
                price: "$10"
            },
            {
                dish: "Tomato soup with burrata (With pine nuts)",
                price: "$13"
            }
        ]
    },
    Dishes: {
        img: "../images/dishes.jpg",
        quote: "Please, welcome our main dishes!",
        dishes: [
            {
                dish: "Grilled chicken fillet",
                price: "$19"
            },
            {
                dish: "Gemelli Pasta with Roasted Pumpkin and Pancetta",
                price: "$25"
            },
            {
                dish: "Spicy Pork Tenderloin with Apples and Sweet Potatoes",
                price: "$22"
            },
            {
                dish: "Mom's Best Pork Chops",
                price: "$21"
            },
            {
                dish: "Chicken Parmesan Pasta Casserole",
                price: "$26"
            },
            {
                dish: "Simple Slow-Cooked Korean Beef Soft Tacos",
                price: "$13"
            },
            {
                dish: "Fillet rossini with truffle sauce",
                price: "$19"
            },
            {
                dish: "Cardamom maple salmon",
                price: "$21"
            }
        ]
    },
    Dessert: {
        img: "../images/dessert.jpg",
        quote: "Life is too short. Start with dessert!",
        dishes: [
            {
                dish: "Brownie",
                price: "$7"
            },
            {
                dish: "Cheesecake",
                price: "$7"
            },
            {
                dish: "Caramel Fudge Cheesecake",
                price: "$9"
            },
            {
                dish: "Chocolate Mousse Cake",
                price: "$6"
            },
            {
                dish: "Lemon cake",
                price: "$6"
            },
            {
                dish: "Red velvet cake",
                price: "$8"
            },
            {
                dish: "Cherry Pie",
                price: "$7"
            },
            {
                dish: "Six Layers Buttercream",
                price: "$10"
            }
        ]
    },
    Drinks: {
        img: "../images/drinks.jpg",
        quote: "Another coffee is calling you...",
        dishes: [
            {
                dish: "Americano",
                price: "$3"
            },
            {
                dish: "Espresso",
                price: "$3"
            },
            {
                dish: "Latte",
                price: "$4"
            },
            {
                dish: "Café glacé",
                price: "$3"
            },
            {
                dish: "Cappuccino",
                price: "$3"
            },
            {
                dish: "Espresso Macchiato",
                price: "$3"
            },
            {
                dish: "Ginger tea",
                price: "$3"
            },
            {
                dish: "Black tea",
                price: "$3"
            }
        ]
    }
}


const MenuList = document.getElementById("menu_list")
const EachDishes = document.querySelectorAll("#menu_dishes>div");

EachDishes.forEach((Elm) => {
    Elm.addEventListener("click", (e) => {
        showMenu(e.currentTarget.innerText)
        MenuList.querySelector(".active").classList.remove("active");
        e.currentTarget.classList.add("active")

    })
})

function showMenu(menu = "Salads") {
    const MenuBg = document.getElementById("menu_bg");
    MenuBg.innerHTML = ""

    const MenuImage = document.createElement("div");
    MenuImage.setAttribute("id", "menu_image")
    MenuImage.innerHTML = `<img src="${MenuDishes[menu].img}" alt="" width="100%" height="100%">`;
    MenuBg.append(MenuImage);

    MenuImage.style.opacity = "0";
    MenuImage.style.transition = "opacity 0.5s ease-in";

    const MenuItems = document.createElement("div");
    MenuItems.setAttribute("id", "menu_items");
    MenuItems.innerHTML = `<div><h3>${MenuDishes[menu].quote}</h3></div>`
    MenuBg.append(MenuItems);

    MenuItems.style.opacity = "0";
    MenuItems.style.transition = "opacity 0.3s ease-in";

    const MainMenuItems = document.createElement("div");

    for (let Dish of MenuDishes[menu].dishes) {
        MainMenuItems.innerHTML += `
        <div>
            <span>${Dish.dish}</span>
            <span>${Dish.price}</span>
        </div>`
    }

    MenuItems.append(MainMenuItems);

    void MenuItems.offsetWidth;
    void MenuImage.offsetWidth;

    MenuItems.style.opacity = "1";
    MenuImage.style.opacity = "1";
}
showMenu();