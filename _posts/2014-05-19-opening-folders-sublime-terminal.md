---
title: Opening folders in Sublime from Terminal
layout: post
permalink: /opening-folders-sublime-terminal
dsq_thread_id:
  - 2697868325
categories:
  - blog
---
I&#8217;ve always been a bit daunted by coding in my home enviroment as it&#8217;s never been quite right. I&#8217;ve always found it&#8217;s a hassle opening multiple programs just to do a tweak. And when those programs are heavy programs, it&#8217;s even worse.

Example would be, opening Adobe Dreamweaver, FileZilla, Firefox, Mamp and Finder.

I found DW always taking forever to open and then having to use FTP was just a pain.

I have since read many articles on workflows and now just need to open Terminal and I am ready (with a few other environment tweaks, granted (GIT, Jekyll etc)). Nothing else. I find the website I want to work on and then open my files from [Terminal into Sublime][1], which I must say, is sublimely quick. I then finish editing and get back into Terminal to push to the relevant repo to go live. Simple and lightweight.

Although I am a big believer in great GUI&#8217;s, I think as a front-end dev, you learn a lot more getting stuck into the code.

Onto the tutorial:

Open Terminal and create a folder in your home directory

<pre>mkdir bin
</pre>

Open that folder and create a symlink that will do all the work for you, think of it like a shortcut.

<pre>cd bin
ln -s "/Applications/Sublime Text 2.app/Contents/SharedSupport/bin/subl" ~/bin/subl
</pre>

If your using Sublime Text 3, modify the above where appropriate.

You now need to edit your .bash_profile to tell terminal how to process the shortcut.

<pre>nano ~/.bash_profile
</pre>

This will open up your .bash_profile so you can edit it, place the following at the top.

<pre>export PATH=$PATH:~/bin # support for subl
</pre>

Always good to comment because as a developer your .bash_profile tends to fill with commands. Here we are opening the path using the symlink. Path -> using path in the symlink with binded &#8216;subl&#8217;.

Now press control and x, press y and enter.

Close terminal and reopen.

<pre>subl &lt;/filename/> or &lt;/folder/>
</pre>

Your now ok to use the subl command, the above will open a file or folder.

<pre>subl .
</pre>

This is used the most and will open up whatever you are cd&#8217;d into.

I hope this helps and speeds up workflow.

 [1]: /opening-folders-sublime-terminal "Terminal into Sublime"