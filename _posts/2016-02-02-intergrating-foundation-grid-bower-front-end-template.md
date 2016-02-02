---
title: Integrating Foundation's grid with your Front-end template using Bower
layout: post
---

As a Front-end developer you have probably used ### number of grid systems and probably written your own, well that statement applies to me anyway.

While contracting, the company I was working with used Foundation as their go to front-end framework, I personally don't use any, they have a time and a place, but for a Front-end Developer you can create your own lean framework without having to include bits you don't need or need to learn in the first place. So me, I'm a anti-Bootstrap/Foundation kind of guy.

I won't go into frameworks anyway, it's a huge boring debate for another day.

While I was working with Foundation I did find the grid really intuative and adaptable for different kinds of websites. It's also great for leaving legacy, as anyone can pick it up quickly and easily adapt it. Because of this I have dropped my own BEM grid system in favour of Foundation on a number of projects.

I have seen lots of GitHub repo's and gists exporting the grid, but this is non-sensical as when it's updated it's out of date. A few colleagues at previous agencies did this too, copy and pasting from the Foundation repo too, but then this isn't linked when you need to update.

Here comes a package manager to the rescue, my choice being Bower.

So, you have your own framework and you want to quickly import a grid. Simple.

If you've not used bower, then head over to <a href="http://bower.io" target="_blank">bower.io</a> to get stated.

--

<pre>$ bower install foundation --save</pre>

This gets you up and running with Foundation in your framework.

I personally change my install directory using .bowerrc file however for the purpose of the post i'll keep it default.

Now open up your main.scss file where you import all your .scss partials.

<pre>@import "../../../bower_components/foundation/scss/foundation/components/grid";</pre>

This will import the _grid.scss partial from Foundation without any requests, you may need to modify the above depending on where your main.scss is. Mine is the following:

<pre>/assets/css/scss/main.scss</pre>

You can now start using the Foundation grid, head over to Foundations website for all the docs.

##Modifying

You can simply modify the grid to suit you with a few variables. Foundation have set-up the grid perfectly for this because they use !default flags, so if the variable isn't set then it will default to one Foundation use.

Instead of modifying the Foundation file directly, which you should never do, you can simply define some variables before the import.

Here are some common ones:

<pre>
$row-width: 1200px;
$column-gutter: 40px;
$last-child-float: left;

@import "../../../bower_components/foundation/scss/foundation/components/grid";
</pre>

If you need to see what is possible, just open up /bower_components/foundation/scss/foundation/components/_global.scss file which is imported into the grid file to set-up all the values.

--

That's it, simple set-up in seconds and update with a simple..
<pre>$ bower update foundation</pre>
