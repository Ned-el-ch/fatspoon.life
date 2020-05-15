## Table of Contents
- [What does it do in a nutshell](#short-description)
- [Main features](#main-features)
- [Technical description](#technical-description)
- [Author's Note](#authors-note)

---
# <a name="short-description"></a> In a nutshell
<a href="https://fatspoon.life" target="_blank">Fatspoon.life</a> is an all-in-one app that makes it easy to cook at home more by helping you track ingredients, recipes, shopping list, and weekly meal plan!

---

# <a name="main-features"></a> Main Features

Items marked with `S` on the end aren't implemented *"yet"*

## My Cookbook
- `Create` and store your own recipes
- Add others' recipes to your cookbook
- Automatically adjust ingredient amount based on servings
- Add a picture when creating a recipe
- See info about recipes at a glance with labels `S`
- Search for recipes by name and keyword
- Host the picture `S`
- `Edit` a recipe `S`
- `Delete` a recipe `S`
## My Shopping List
- If a recipe has missing ingredients automatically populate a shopping list
- Adjust how much much of each item you're purchasing on the go
- If the amount is >= to what you need for the week, the item will disappear when you click `Done`
- If it's less, the remaining amount of what you need will update
- Add custom items `S`
## My Fridge
- Track what ingredients you have on hand
- Adjust quantities by just typing in the number on each ingredient card
- Filter ingredients by name
- Quickly identify categories using labels
- Remove items
- Add multiple ingredients at a time
- Add images for ingredients `S`
- Organize fridge in a more meaningful way `S`
- Filter recipes by category `S`
## My Meal Planner
- Choose a recipe and date, and add it to your meal planner
- See the ingredients you have and don't have enough of at a glance
- Calculate if you can make the first item, then second, third, etc. *(e.g. I have 700ml of Milk, and 2 recipes that need 500ml each. I should see that I can make the first one but not the second one)*
- Adjust servings
- View the meals only for the current week
- View past and future planned meals
- See instructions only for today's meal
- `Delete` a meal
- `Edit` a meal `S`
- `Complete` a meal and automatically take out those ingredient amounts from your fridge `S`

---
# <a name="technical-description"></a> Technical Description
### 
This is an SPA I built to practice using React, Redux, SCSS, and Ruby on Rails (as an API).

Here's a (sort of) full list of the main packages I used to build the frontend
- React-Redux
- Redux-Thunk
- React-Router / -Dom
- React-Bootstrap
- React-Lottie, GSAP, and React-Transition-Group for animations
- React-Select
- SASS/SCSS for custom styling

Other "helper" packages
- Chroma.js
- React-Datepicker
- Redux-Devtools-Extension
- Moment.js for handling dates
- Custom UUID function in lieu of a package for better customisation


---

# <a name="authors-note"></a> Author's Note
Before I made the app, I used to struggle figuring out what to cook. Since then it grew into a useful tool I use to track what food I have in my house, as well as my dietary intake. Although some bias may exist, my mom has said it made her life a ton easier.