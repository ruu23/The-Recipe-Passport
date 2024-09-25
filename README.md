# The Recipe Passport

## Introduction
Welcome to **The Recipe Passport**, a comprehensive web application that allows users to explore a vast collection of recipes from various cuisines around the world. The application provides an engaging platform for discovering new dishes, along with their cultural backgrounds and stories.

**Deployed Site:** [The Recipe Passport Live](http://127.0.0.1:5173/)  
**Final Project Blog Article:** [Read More](https://your-blog-article-link.com)  
**Author(s):** [Arwa Mahmoud](www.linkedin.com/in/arwa-mahmoud-084516203)

## My Journey and Inspiration
This project began as a simple idea during a cooking class where I realized how food can connect people from different backgrounds. I wanted to build a platform that showcases not just recipes, but also the stories and cultural significance behind them. My goal was to create an application that resonates with fellow food enthusiasts and encourages users to explore global cuisines.

### Timeline
- **Week 1:** Research and planning. I outlined features and created a wireframe.
- **Week 2:** Setting up the project environment and starting the initial setup with React and Vite.
- **Week 3:** Developing core features like recipe search, filtering, and displaying details.
- **Week 4:** Focusing on styling with Tailwind CSS for a polished look and feel.
- **Week 5:** Testing and refining the user interface, fixing bugs, and preparing for deployment.

## Technical Details
### Technology Stack
- **Frontend:** React, Vite, Tailwind CSS
- **Backend:** Node.js, Express (for API endpoints)
- **Database:** MongoDB (for storing user submissions and recipes)

### Challenges Faced
One of the main challenges I encountered was implementing a dynamic filtering system that allowed users to narrow down recipes based on cuisine type, dietary restrictions, and ingredient availability. I opted for a combination of React's state management and useEffect hooks to manage the filtering logic, ensuring a seamless user experience.

For instance, I used the following filtering algorithm:

```javascript
const filterRecipes = (recipes, filters) => {
  return recipes.filter(recipe => {
    return (
      (filters.cuisine ? recipe.cuisine === filters.cuisine : true) &&
      (filters.diet ? recipe.diet === filters.diet : true) &&
      (filters.ingredients.length > 0
        ? filters.ingredients.every(ingredient =>
            recipe.ingredients.includes(ingredient)
          )
        : true)
    );
  });
};
## Installation

To set up this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/the-recipe-passport.git
