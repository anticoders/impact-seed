Modules.Blog.init({
  name:   'news',
  title:  'Aktualnosci',
  path:   '/aktualnosci',
});

Modules.Newsletter.init({
  name:   'newsletter',
  title:  'Maile',
  path:   '/maile',
});

Modules.Forum.init({
  name:   'forum',
  title:  'Forum',
  path:   '/forum',
});





Router.map(function() {

  this.route('home', {
    path: '/',
    action: function() {
      Router.go(M.news.nameFor('list'));
    },
  });

});

