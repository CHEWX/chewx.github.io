---
title: Changing my portfolio from Wordpress to Github Pages and Jekyll
layout: post
---

I am a huge fan of Wordpress and my day to day job entails Wordpress developement, however, sometimes it can be slow, heavy and cumbersome. For a lightweight minimal portfolio, there is really no need for this.

I came across Jekyll and Github Pages at the start of 2014 and I started experimenting with it and what it can do. It's free hosting and there isn't a catch, only that you open-source your code; fine by me.

PHP was the only thing GitHub pages would not support. This is replaced by liquid templating language which runs all the loops and includes.

When I started to learn Jekyll and I was following the 24 Ways <a href="http://24ways.org/2013/get-started-with-github-pages/" target="_blank">article</a> from Anna Debenham, this taught me pretty much everything I needed to know. Bar, Sass. This wasn't possible without running a Grunt task or setting up Compass. Then came about Jekyll 2.0 - Sass and CoffeeScript support. Great. This is when I took the plunge to convert my Wordpress website to Jekyll and host for free on Github.

Migrations from Wordpress were easy with Ben Balters fantastic <a href="https://github.com/benbalter/wordpress-to-jekyll-exporter" target="_blank">plug-in</a>.

The whole conversion took around 2 hours, which was great, but then again my website is tiny.

The site now loads blazingly fast and all the URL's are still the same, win, win.

CMS, well you can use GitHub's website to add a blog post wherever you are, no need to run anything on the command line as GitHub automatically runs Jekyll when you save anything.

Overall I am very happy with the results and no problems so far.

<b>Further Reading:</b>

<a href="http://jekyllrb.com/" target="_blank">Jekyll Docs</a><br/>
<a href="http://www.sitepoint.com/wordpress-vs-jekyll-might-want-make-switch/" target="_blank">Wordpress vs. Jekyll</a><br/>
<a href="http://www.smashingmagazine.com/2014/08/01/build-blog-jekyll-github-pages/" target="_blank">Smashing - Build a blog</a>