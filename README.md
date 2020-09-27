# Find a Movie

**What is this:** This is a web application using api and using localStorage to store the data.

I have difficulty on make a choice about which film to watch, so I made this simple app to help me make the decision. Here are the main features:

- find a movie
- add to the default list, store data at local
- press the "Find One" button to randomly find a movie to watch
- label that movie as "watched"
- delete data from local

## **How to Use:** For example, use the search input to find the nominees of 2020 Oscars, and add them to the default list, then let the app to find one (make the decision) for you.

The "f" letter's font in the logo is _Apple Chancery_.

## Some Notes

### deploy on heroku

I think the safety way is creating the app in Heroku and use the "Github" as the deployment method.

The we can use `https://github.com/mars/create-react-app-buildpack.git` as the buildpack add manually at it in "Settings". This is because by default the build method is "node" which is not suitable for a React app.

And manually add the `REACT_APP_API_KEY` in the "Config Vars" area which is also in "Settings".

But here's the "terminal way":

```bash
heroku create -b https://github.com/mars/create-react-app-buildpack.git
git push heroku master

# add the env variables to Heroku
heroku config:set REACT_APP_API_KEY=11111111
```

I'm not sure whether this "terminal way" could work, because I failed, then I use the safety way.

#### here's some articles about deployment

- [Deploying React with Zero Configuration](https://blog.heroku.com/deploying-react-with-zero-configuration)
- [Configuration and Config Vars](https://devcenter.heroku.com/articles/config-vars)
- [Deploy Your React App To Heroku](https://dev.to/smithmanny/deploy-your-react-app-to-heroku-2b6f)
