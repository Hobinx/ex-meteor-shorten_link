import { Meteor } from 'meteor/meteor';
import { Links } from '../imports/collections/links';
import { WebApp } from 'meteor/webapp';
import ConnectRoute from 'connect-route';

Meteor.startup(() => {
  Meteor.publish('links', function() {
    return Links.find({});
  });
});

function redirectUser(req, res, next) {
  const link = Links.findOne({ token: req.params.token });

  if (link) {
    Links.update(link, { $inc: { clicks: 1 } });
    res.writeHead(307, { 'Location': link.url });
    res.end();
  } else {
    next();
  }
}

const middleware = ConnectRoute(router => {
  router.get('/:token', redirectUser);
})

WebApp.connectHandlers.use(middleware);