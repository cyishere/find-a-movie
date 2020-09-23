# web application using api

Use localStorage store the data.

- find a movie
- add to the default list, store data at local
- press the "Find One" button to find a movie to watch
- label that movie as "watched"
- delete data from local

---

The "f" letter's font in the logo is _Apple Chancery_.

## deploy on heroku

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

### here's some articles about deployment

- [Deploying React with Zero Configuration](https://blog.heroku.com/deploying-react-with-zero-configuration)
- [Configuration and Config Vars](https://devcenter.heroku.com/articles/config-vars)
- [Deploy Your React App To Heroku](https://dev.to/smithmanny/deploy-your-react-app-to-heroku-2b6f)
