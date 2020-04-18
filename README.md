# Fastfeet Web

# Getting started

1. after cloning the repository, use `yarn` to download dependencies
2. run the application by typing `yarn start`
3. use the credentials from backend seed to login

To run the application properly, run the docker containers and the backend before start.

#### Extra

**Storybook →** I've implemented Storybook for the application, it's not with all the used components, although it's implemented with some plugins, as well. I did that during a goal I had in my current job, to implement the Storybook in our Boilerplate, then I started trying to do it in this project.

# What is the briefing

The main goal of these three repositories was to create a whole application from the backend, mobile and web frontend.
Here is the briefing:

→ Part 1 [Backend](https://github.com/Rocketseat/bootcamp-gostack-desafio-02/)

→ Part 2 [Backend](https://github.com/Rocketseat/bootcamp-gostack-desafio-03/)

→ Part 3 [Frontend](https://github.com/Rocketseat/bootcamp-gostack-desafio-09/)

→ Part 4 [Mobile](https://github.com/Rocketseat/bootcamp-gostack-desafio-10/)

# App responsibility

The Web version is an administrator view to manage the deliverymen, deliveries, recipients and problems.

# Conclusion

As I started as a FrontEnd developer in a company, thanks to Rocketseat 🚀, I am now focused on FrontEnd (for now). I've learned a lot with this Bootcamp (will continue learning). And I would recommend it for everyone with some interest in the stack. I am really happy with all the results, the amount of content I could get with it. I can now develop almost anything with these three amazing technologies! Thanks ♡

## Considerations

Specifying each technology used, such as _Redux Saga_, _Immer_, and _Reactotron_, I didn't like the division of responsibilities I had in the project, using _Redux Saga_. Perhaps a different architecture would fit better for my mind; anyway, from my experience using _Redux Thunk_ alongside promise-middleware, I didn't like to have multiple strings for each action creator like `@orders/GET_ORDERS_REQUEST` and then another one when it's successfully get `@orders/GET_ORDERS_SUCCESS`.

Another point is the naming pattern of camelCase in Javascript. I don't know what's the best way to workaround, but in this project I used `humps` which helps us to get a `start_date` camelizing it so it is `startDate`. Then for the payloads we just decamelize it again. I know my solution for the payloads is not the best one, but I would like to improve this idea in my own boilerplate.

These considerations are probably part of my recent experience with different approaches with React, I had to learn a lot in the previous months, for this challenge, and for my job. Although, it's always a good thing to know different technologies.

As an actual conclusion I would say, regarding web development with React JS, I have to learn more about:

```
[context-api, testing, immer vs immutable, reactotron vs redux-devtools, redux-saga, redux-persist]
```
