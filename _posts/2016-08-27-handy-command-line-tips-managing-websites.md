---
title: Handy command line tips for managing websites
layout: post
---

When you are a Freelance Developer you tend to either A. work with your own clients, B. work with agencies/studios/freelancers or C. a bit of both. I opt for route B.

There are positives and negatives to all, and one of the negatives for route B is working with different environments and legacy code. It's 50/50 whether they would like to host with you, host on their own server or host on the clients server. With this, your deployment strategy kind of goes out the window as nothing is consistent.

The reason for this post is for command line tips, not so much on how you should deploy, some may opt to use Beanstalk etc, but I guess this post is just about managing websites through the command line.

First of all, lets assume we have SSH access. I try to steer clear of SFTP/FTP unless it's a last resort.

So you get given a websites that you want to make updates to and have been given access to it, the first thing you need to do is get setup on your local machine, a great way to get the live files down to your local is zipping them up on the server and then downloading that zipped up file.

To do this, `ssh user@host.com` and enter your password, now depending on the server setup, this will look different everytime, but for the purpose of the article, you need to get to the root of the website, usually by `cd public_html`. Once there, you now need to zip up. I tend to use `tar` and there are a number of flags you can pass, the ones I use are `cf` to *c*reate the *f*ile, `v` which is to list the files verbosly that are being zipped and finally `z` for gzip. Our final command will look something like this `tar -czvf site.tar.gz .`, the dot at the end means add everything from the folder we are in. If you were at a higher folder you could do `tar -czvf site.tar.gz public_html`, but when you extract you will have the `public_html` folder which you don't really need so we will stick to the former.

Another tip with zipping up the entire folder is to exclude folders and files. Sometimes if I'm zipping up locally, I'll want to exclude a git tracked folder or `node_modules`, we can do this by `tar --exclude='wp-content/themes/your_theme/node_modules/' -cvzf site.tar.gz .`, as you can see you need to print the whole folder path as you will most probably be in the route if you are moving a WordPress website.

Now, downloading the file. I'll use `scp` for this, and it will differ depending on your server set-up, but I'll use the example from earlier.

You'll want to `exit` from the server you have logged into and `cd` to where you want to download the file to. Then run `scp user@host.com:public_html/site.tar.gz .`, again the dot will download the file to the folder you are in, alternatively you can change this to any folder path you want, e.g, `scp user@host.com:public_html/site.tar.gz ~/Sites/site.com/`.

If you are wanting to launch a website then you can do the reserve of this, you already know how to zip up the website, but to move it to the server from your local machine you can `scp site.tar.gz user@host.com:public_html/`, it simply just reverses order. Remember if you don't have ssh keys set-up, then you'll have to enter your password everytime you use `scp`.

Finally you want to extract the file, you can do this with the following, `tar -xvf site.tar.gz .`, again, many flags can be passed to the `tar` command, but this is what I use, the only flag we don't know here is `x`, but that is simply extract instead of create.

That's it for moving and extracting.

Another handy command is `rsync`, now this is super handy with WordPress installations as they constantly get updated live with media that you may not have locally, so a little tip to check on what has changed on the server and to download it is the following, `rsync -avz --rsh=ssh user@site.com:public_html/path_here/uploads/* .`, rsync is pretty powerful so there is a whole host of flags, the ones I am using is `a`, for archive mode, which preserves permissions, symlinks, ownership etc. `v`, same as before, `z`, compress the transfer.

You can also pass `--dry-run`, which will do a test run and tell you want is going to change without actually downloading anything.

As with `scp`, you can run `rsync`, to upload any files that the server may not have.

That's about it, I'm sure there a lots of other commands people use, but this is what I use when I'm using the command line to manage websites.

Further reading:
[1]: http://linuxcommand.org/man_pages/rsync1.html "Rsync Manual."
[2]: http://linuxcommand.org/man_pages/tar1.html "Tar Manual"
[3]: http://man7.org/linux/man-pages/man1/scp.1.html "Scp Manual"