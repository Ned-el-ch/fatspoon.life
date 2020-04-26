# Fatspoon.life
### [Live site](https://fatspoon.life)
## Table of Contents
- [What does it do in a nutshell](#short-description)
- [Main features](#main-features)
- [Technical description](#technical-description)

---
# <a name="short-description"></a> This app in a nutshell
A recipe searcher, meal planner, ingredient tracker, and shopping list builder all bundled into one convenient app

---


# <a name="main-features"></a> Main Features

Items marked with `S` on the end aren't implemented yet, which at this point is almost all of them

## My Cookbook
- Search over 1.5m recipes, from 500+ top sources
- Full nutrition info and daily intake % for each recipe: `S`
	- Macronutrients (Fat, Carbs, Fiber, Protein, etc.) `S`
	- Mineral Count (Na, Mg, Ca, K, Fe, Zn, P, etc.) `S`
	- Vitamin Count (A, C, Thiamin, Folate, B12, etc.) `S`
	- Calorie count per serving `S`
- Filter using criteria such as: `S`
	- Set calorie amount `S`
	- Set dietary restrictions (Gluten-free, Meat-free, Egg-free, Dairy-free, etc.) `S`
- See possible allergens at a glance using labels `S`
## My Shopping List
- If a recipe has missing ingredients automatically populate a shopping list `S`
## My Fridge
- Track what ingredients you have on hand `S`
- See your shopping list and select which ingredients you've bought to add to your fridge `S`
- Quickly identify categories using labels `S`
## My Meal Planner
- Set how many people you're cooking for `S`
- See nutritional info at glance `S`
- Set calorie goal `S`
- Set type of diet (Keto, Paleo, Lean, Vegetarian, etc.) `S`
- Easily switch out recipes `S`
- Save weekly plan as a preset `S`
- Set how often to repeat it `S`
- Set a number of preset to repeat `S`
- See what ingredients you may run out of before a certain recipe `S`
- Get suggestions based on what nutrients you may be lacking,  `S`
---
# <a name="technical-description"></a> Technical Description
### This is a SPA built with ReactJS

I built it to practice using redux, SCSS, and unit testing. I used Netlify for CI/CD.

Here's a (sort of) full list of the main packages I used to build it
- React-Redux
- Bootstrap & React-Bootstrap
- React-Router
- React-Router-Dom
- React-Router-Bootstrap
- React-Spring
- SASS/SCSS for custom styling

Other "helper" packages
- uuid for easier key/id assignment
- @testing-library/react to practice writing tests

### P.S.
On a sidenote, before I made the app, I used to struggle figuring out what to cook. Since then it grew into a useful tool I use almost daily to track what food I have in my house, as well as my dietary intake. Although some bias may exist, my mom has said it made her life a ton easier.