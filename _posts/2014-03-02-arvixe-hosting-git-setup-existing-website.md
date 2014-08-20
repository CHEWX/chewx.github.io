---
title: Arvixe Hosting Git setup from existing website
layout: post
permalink: /arvixe-hosting-git-setup-existing-website
dsq_thread_id:
  - 2347346428
categories:
  - blog
---
<a href="http://www.arvixe.com/" target="_blank">Arvixe hosting</a> allows git support and this is key and should be key to most webmasters.

Amongst all the tutorials on the internet, mostly being GitHub, I found it increasingly difficult to find out how to set-up git with websites that are already live.

Afters hours and hours of research I have finally amalgamated a way of doing this and how I set-up each website I host. I am by no means a GIT expert so if there is a problem with my workflow, please let me know. It&#8217;s been great so far..

Firstly you need to set-up your username for commits, this makes the future of working with other people on projects easier. You will need to do the following on both live and local box.

<pre>git config --global user.name "your-name”
git config --global user.email "your-email”
git config --list
</pre>

1. SSH into your website and open folder for website

<pre>cd public_html/domain.com/</pre>

2. Now you want to set up a empty repo (git initialize)

<pre>git init</pre>

3. Now you have an empty repo, you want to add all existing files into repo

<pre>git add .</pre>

4. Now you want to commit this change to the repo

<pre>git commit -m “commit comment here”</pre>

5. To check status and log

<pre>git status
git log</pre>

6. Now you want to protect you new git repo as it will be visible on the web

<pre>chmod 770 -R .git/</pre>

7. Now you need to accept pushes from local repo

<pre>git config receive.denyCurrentBranch ignore</pre>

8. Now you need to create a hook

<pre>cd .git/hooks/</pre>

There may or may not be a post-receive file, check by ls, either way you need to edit

<pre>vim post-receive</pre>

9. Add the following into top of file

<pre>GIT_WORK_TREE=../ git checkout -f</pre>

10. You now need to save the file and quit

press esc and then :wq

11. Now you need to chmod this

<pre>chmod +x post-receive</pre>

All done on the live server now move to local sites folder &#8211; you now want to get your live repo as everything local is old

<pre>git clone username@accountname.com:public_html/domain.com/</pre>

The above creates a folder in the sites folder and gets all the files. Now open GIT GUI (or your chosen client) and click fetch from origin just incase &#8211; now edit/remove a local file and commit this and click push, if all has worked out you should get success.

Fini.

**NOTE:** If you are using a CMS on the live website that produces file changes then you will need to do the following:

1. SSH in your live box and navigate to your website

2. You now want to be on the root of your website where the .git repo is

<pre>git add .</pre>

3. Once your live updates have been added you need to commit

<pre>git commit -m “commit comment here”</pre>

You have now got the live repo up to speed.

4. Open GIT GUI and fetch from origin &#8211; this will update your local repo

5. Navigate to your local sites folder and perform a rebase

<pre>git rebase</pre>

This has now updated your local repo to the same as the live repo, you may get conflicts, but it&#8217;s best to perform this once before editing any code or stash/commit to another branch for your local changes.

I welcome any comments alterations to this set-up.