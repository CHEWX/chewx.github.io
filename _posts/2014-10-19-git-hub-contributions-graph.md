---
title: GitHub contributions not displaying
layout: post
---

I noticed that my GitHub graph was not populating with recent contributions that I had been making, but it had shown past contributions.

After looking into it a little I realised that from each computer you push from, you need to set-up your git config email.

This had been done for sometime on my MBP and it was just a case of forgetting to do this on my work computer and Mac Mini.

To test to see why past contributions have not been showing simply get the commit url and add .patch on the end.

<pre>https://github.com/username/repo/commit/e4a58e891cf9f5740f4173bfe28f66a8ce1dc22a.patch</pre>

This will then display:

<blockquote>
	From: John Doe <john@johndoe.com>
</blockquote>

If the case maybe that your commits are not display then it is likely to display:

<blockquote>
	From: John Doe <John@Johns-Mac-mini.local>
</blockquote>

Unfortunately, GitHub cannot map local locations to your account, however it can handle multiple emails. So you add your work email to your git config and then add that email to your personal GitHub account to track activity. For all past commits that have been made from a local address then GitHub cannot go through these and re-map.

To check your config, simply run:

<pre>git config --list</pre>

To update your username:

<pre>git config --global user.name "John Doe"</pre>

To update your email:

<pre>git config --global user.email "john@johndoe.com"</pre>

--

This is definitely something worth checking when using Git.