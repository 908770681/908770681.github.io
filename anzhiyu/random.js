var posts=["archives/5b435262.html","archives/3a2b34c.html","archives/9b44950b.html","archives/7ef2643a.html","archives/79666db.html","archives/be82d226.html","archives/19edc71e.html","archives/433943fb.html","archives/ddb74602.html","archives/162bc967.html","archives/3241765f.html","archives/abb4b35.html","archives/b1caa28e.html","archives/1fa56ed0.html","archives/6e837e45.html","archives/381a3338.html","archives/e4e8a895.html","archives/ff8068c0.html","archives/4f2a7d08.html","archives/22323d85.html","archives/2ab0d059.html"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};