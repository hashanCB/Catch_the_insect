# Catch the Insect Game 🕷️ 🎮

This project is an interactive web game where the player catches insects by clicking on them. The game consists of three main pages: the home page, the favorite page, and the game page. The project is built using ReactJS and utilizes the Framer Motion library for smooth page transitions.

## Motivation

The Catch the Insect Game was created as a fun and engaging way to learn and explore ReactJS, state management using hooks, and the implementation of interactive game elements. The project demonstrates how to create a multi-page application with smooth transitions between pages.

## Features

- **Home Page:** The home page introduces the game and invites the player to start by clicking a button.
- **Favorite Page:** The favorite page provides options to choose favorite insects, affecting the game's dynamics.
- **Game Page:** The core of the project, where the player catches insects by clicking on them.

## How It Works

- **Page Transitions:** Smooth transitions between pages are achieved using the Framer Motion library.
- **State Management:** React hooks, such as `useState` and `useEffect`, are used for managing the game state and page transitions.
- **Game Logic:** The game logic involves displaying and hiding insects, tracking the player's score, and setting conditions for winning or losing.

## Usage

1. Visit the home page and click the "Play Game" button.
2. Explore the favorite page to customize your game experience.
3. Enter the game page and start catching insects by clicking on them.
4. Enjoy the game and challenge yourself to achieve the highest score.

## Project Structure

The project is divided into three main components: `Insect_Home`, `Favorite`, and `Game`. Each component handles a specific aspect of the game, contributing to a modular and organized code structure.

```javascript
// Example structure for the Game component
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const Game = ({ handlerpage }) => {
  // State and refs for managing game elements and score
  // ...

  // Functions for handling game events, such as scoring and timing
  // ...

  return (
    // JSX structure for rendering the game interface
    // ...
  );
};

export default Game;
```

## Learning Takeaways

1. **Page Transitions:** Understanding how to implement smooth transitions between pages using Framer Motion.
2. **State Management:** Learning the basics of React state management with hooks like `useState` and `useEffect`.
3. **Game Logic:** Implementing game mechanics, such as scoring, timing, and event handling.
4. **Component Modularity:** Structuring the project with modular components for better maintainability.
5. **External Libraries:** Exploring and integrating external libraries, such as Framer Motion, for enhanced UI/UX.

## Acknowledgments

This project is a part of the learning journey, and contributions or feedback are welcome. It was created as part of a creative coding challenge and aims to provide an entertaining experience while showcasing ReactJS skills.

Feel free to explore the code, contribute, or use it as a reference for your own game development projects! Visit [Hashan Chanaka](https://hashanchanaka.com) for more projects and insights.





https://github.com/hashanCB/Catch_the_insect/assets/45811945/be665667-8473-4ae2-beb3-353520337f3a




