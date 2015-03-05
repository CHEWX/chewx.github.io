---
title: Updating your WordPress permalink structure with a default post slug
layout: post
---

Recently I have been wanting to change the default post type slug for posts. To do this you can update your permalink structure to add in your keyword and then press save. This has now updated your permalinks. EG:

<pre>http://www.chewx.co.uk/%postname%/</pre>

to

<pre>http://www.chewx.co.uk/blog/%postname%/</pre>

However, now all your indexed URL's to your posts will 404. This is because WordPress can only update the .htacess if you use their custom strings in the permalinks. EG:

<pre>/%postname%/</pre>

to

<pre>/%category%/%postname%/</pre>

This will be fine and WordPress will automatically update your .htaccess to tell Google that the permalink has changed.

So back to the problem at hand. Basically there isn't a redirect rule you can do from the root directory. Unfortunately you have to do single a 301 redirect for each blog post. Do not be dismayed, I had 1,500 index blog posts in Google, fear not.

Also, to add insult to injury, categories will not pick-up on the permalink change but tags will, tags will now be

<pre>http://www.chewx.co.uk/blog/tag/tagname</pre>

(this may differ depending on your new structure).

The tutorial part:

Navigate your way to /wp-content and create a new file called permalinks.php

Now added the following:

{% highlight php %}
<?php
require_once('../wp-blog-header.php');
query_posts('&showposts=-1&order=ASC');

while (have_posts()) : the_post(); ?>

Redirect 301 /<?= $post->post_name;?> <? the_permalink(); ?>
<br />

<?php endwhile; ?>
{% endhighlight %}

Now navigate to your favorite browser and pop in http://yoursite.com/wp-content/permalinks.php and watch your re-writes appear !

Now simply select all and copy and paste into your .htaccess file.

Next up, tags:

Repeat the above but with the following code:

{% highlight php %}
<?php
require_once('../wp-blog-header.php');
$args = array(
    'orderby' => 'count',
    'order' => 'DESC'
);
$tags = get_tags( $args );

foreach ( (array) $tags as $tag ) { ?>

Redirect 301 /tag/<?= $tag->slug; ?> <?= get_tag_link ($tag->term_id); ?>
<br />

<? } ?>
{% endhighlight %}

Now, run a link checking program to see if you get any 404's, I personally use Integrity. This will check if your internal linking has any problems or if there are any general loose ends.

Then keep a check on Google and wait until they index your new URL's. To speed up the process you can re-submit your sitemap through Google Webmaster tools, and tell Google to fetch your website again.

Finally, you may have referal websites that have linked your articles, so I would install a 404 log plugin and then check what 404's appear and from what referals. Unfortunately you will always need to keep your 301 redirects in your .htaccess unless you notify all your backlinks, which we all want lots of.

If all has gone to plan, you shouldn't receive any errors, the above 3 paragraphs are simply checking that everything has gone to plan.

Any problems, let me know.

EXTRA:

You can the same for CPT's if you wish to change them, just change the query_posts link to the below:

{% highlight php %}
query_posts('post_type=your_cpt_here&showposts=-1&order=ASC');
{% endhighlight %}