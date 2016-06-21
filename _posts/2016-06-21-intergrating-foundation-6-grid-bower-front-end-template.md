---
title: Integrating Foundation's 6 grid with your Front-end template using Bower
layout: post
---

Following on from my previous post <a href="http://www.chewx.co.uk/2016/intergrating-foundation-grid-bower-front-end-template/">here</a> about install Foundation's grid with your starting template using Bower, Foundation now has a responsive gutter grid with their new version 6.

This is a little different to install quickly, so thought it was worth documenting here. This will be the leanest, quickest way to install it with your current framework. NOTE: This is the normal grid, not the Flexbox grid.

There are many other ways, but it involves including lots of Foundation's code that you don't need, we are focusing on the grid only.

Let's start with:

<pre>$ bower install foundation-sites --save</pre>

Now, if you look through your bower_components folder you will see a different strucure this time, grid now has it's own folder with many additional partials.

Import the grid partial
<pre>@import "bower_components/foundation-sites/scss/grid/grid";</pre>

And then we need to include the grid - define this straight after.

<pre>@include foundation-grid;</pre>

You will come up with an error now, because Foundation uses the <pre>rem-calc()</pre> function to calculate widths in rems. So to do this you will need to include their utility partial.

Add the following before the grid import.

<pre>@import 'bower_components/foundation-sites/scss/util/util';</pre>

That's it for the imports, now you need to define the varible settings before all of this to set-up your grid. I will go through the absolute minimum needed.

--

First, your grid needs a width:

<pre>$global-width: 1600px;</pre>

We also need to set the Flexbox grid varible as we haven't included Foundation's varibles partial which <pre>!defaults</pre> these varibles so you don't need to set them. I'll re-iterate, this is the leanest way, ignoring as much of Foundation's code as possible.

<pre>$global-flexbox: false;</pre>

Finally you need to set the global floats.

<pre>
$global-right: right;
$global-left: left;
</pre>

I personally, set the right float to left, this allows the last child to float left if orphaned.

--

That's it.

You are up and running.

There are many more settings that I use to get the grid perfectly customised like making use of responsive gutters, but this is the basics and base you will need to start.

For further information please visit -- <a href="http://foundation.zurb.com/sites/docs/grid.html" target="_blank">http://foundation.zurb.com/sites/docs/grid.html</a>