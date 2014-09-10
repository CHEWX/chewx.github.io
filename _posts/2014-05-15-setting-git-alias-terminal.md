---
title: Setting up Git Alias in Terminal
layout: post
permalink: /setting-git-alias-terminal
dsq_thread_id:
  - 2687351636
categories:
  - blog
---
Git Alias&#8217;s are quick terms to do normal git tasks. I found out how useful these are when I moved to Propeller. Git lg is something that I run on a regular basis and to do this without an alias wouldn&#8217;t be possible.

Since using Git on the command line, I have also learnt a lot of how the whole process works. Using a GUI system isn&#8217;t the answer when it comes to Git in my opinion. If you get into trouble then it&#8217;s a lot easier to get yourself out of it if you have knowledge of the Git tree &#8211; this knowledge comes naturally with the command line.

As CSS Wizardry&#8217;s Harry Robert&#8217;s quotes,

> I also run Git from the command line, which I’m glad I started doing; I feel it’s really improved my Git knowledge, instead of hiding everything in a black box behind some GUI.

I couldn&#8217;t agree more.

Anyway, on to how to set-up these alias&#8217;s, simply type the following commands into Terminal. Note: These are the commands I use at work and I thought it best to keep them inline with what I use at home. Use whatever is best for you.

<pre>git config --global alias.st status</pre>

<pre>git config --global alias.co checkout</pre>

<pre>git config --global alias.br branch</pre>

<pre>git config --global alias.ci commit</pre>

This is the most useful command, use it every time you make a change in Git and see where the branch, head, remote is and keep on top.

<pre>git config --global alias.lg 'log --graph --all --decorate --oneline'</pre>

What else do you use ?
