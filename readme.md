# Vuex for Everyone

This Vue.js course is based on the official Vuex example. We'll create a shopping cart with Vue and progressively discover and learn about Vuex features by replacing pieces of the application with mutations, getters, and actions.

**About the course**

In this course you'll learn all there is to know about Vuex by creating a shopping cart from scratch.

We will start off by creating a shopping cart with Vue and then progressively dive into Vuex features as we need them. Piece by piece we'll replace parts of our application with mutations, getters, and actions.

You'll also learn how to break your Vuex store into modules.

After this course, you will know when and how to use getters, mutations, actions and, how to split your Store with modules.

## 1. Meet Vuex

Vuex is a state management library for Vue applications (see diagrams). In this lesson, we'll go through an imaginary app and look at two different ways to handle the application data. By the end of this introductory lesson to Vuex, you'll have a deeper understanding of how Vuex works and the benefit of using Vuex as a centralized store.

We'll also answer the frequently asked question of when to use Vuex.

## 2. Create a new project with vue-cli

Before we start our quest to learn Vuex, we’ll need a fresh Vue project. In this lesson, we’ll set up a new Vue.js project using the vue-cli.

Did you know that our Vuex course is based on the official Vuex example? Since it is, we’ll grab the shop.js from the official Github repo which will serve as our simulated API.
- https://github.com/vuejs/vuex/blob/dev/examples/shopping-cart/api/shop.js
- https://github.com/vuejs/vuex/tree/dev/examples/shopping-cart

```
vue init vueschool/webpack-template shopping-cart
//Answer **no** all questions.
//Documentation can be found at https://vuejs-templates.github.io/webpack

cd shopping-cart
yarn // install dependencies

yarn dev
```


To do:
- copy `shop.js` from Github
- add components/ProductList
- add ProductList component to App.vue
- try result in browser

## 3. Install and use Vuex

In this Vuex lesson, we’ll learn how to install and use Vuex in any application.

We’ll then take a brief theoretical look at the different Vuex options available. The available options are state, getters, actions, and mutations. Modules will be introduced later in the course.

```
yarn add vuex
```

- create store/index.js

## 4. Vuex Mutations

Mutations are a responsible for single state changes. We’ll show you how and create the mutation needed to set the products in our store, and we’ll stress the importance of understanding the true difference between actions and mutations.

We’ll also implement what we’ve learned in our shopping cart app.

Update code and see result in Crome Dev Tool & Vue Dev Tool.