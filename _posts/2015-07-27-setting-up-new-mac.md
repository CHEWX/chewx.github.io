---
title: Setting up a new Mac
layout: post
---

Setting up a new computer is a daunting task, especially when you have all your settings just how you like them. This post I am specfically talking about Apple products, not a fan boy as such but they are just the best tools for the job and they look good too, oh and they last !

Anyway, when I started my job I was given a fresh Mac Book Pro, I had to set this up which took me a couple of hours so I documented it.

I have now just sold my personal Mac Book Pro after its 6 year stint and purchased a new rMBP, so now it's time to put my documentation to the test. Unfortunately, it's not quite so easy as getting a new iPhone and syncing. Although I have tried to streamlione the process as best as possible. I also like to keep a fresh install when getting a new personal device, beit a laptop or phone.

So now I will go through each section of setting up a Mac and also a couple of reasons why I use specific applications and just general workflow.

## Files

I have two seperate Apples at home, a rMBP and a Mac Mini connected to a Thunderbolt. One for on the move, one for the office. Now this is where I have to be savvy about file sharing.

I have a central NAS device for backing up and for large size files, this can be accessed from outside my wireless network but it is a little slow and cumbersome. This is where I use Dropbox, iCloud drive and Google Drive to sync smaller files that I share between computers (Yes I use all 3 as I do not wish to pay for just one service, I think altogether thats ~ 10gb of space). Finally I have all my code on Bit Bucket, GitHub or my own web server, so that data is just a couple of pulls away.

Data sorted.

## Applications

**Chrome**
- Best browser for developing, brilliant web tools and super fast. Simply sign-in and I have all my bookmarks and apps.

* Hula - I use this for certain reasons like looking at Netflix US.
* PerfectPIxel - Although Pixel Perfect web design shouldn't exist as such I use this to get near on, but keeping values nice. Tied with BrowserSync, it makes FE dev a lot easier.
* AdBlock - I don't oppose adverts at all, people have to pay for servers and domains some how. Sometimes though, you just want to watch YouTube uninterrupted.
* 1Password - As below.

**1Password**
- Best app I have used for looking after your passwords. Set-up your keychain to your Dropbox and link to any computer and access your passwords from anywhere, because you shouldn't be remembering your passwords...right !?

**Mail**
- Really don't like this but haven't found a good alternative, too many to try and not enough time.

**Todoist**
- My to-do list app, I guess everyone has one, but this is the best I have used, it syncs to the cloud. It has a native iOS app which is brilliant, so it doesn't matter where I am, if something pops into my mind I can jot it down so I don't forgot, great.

**Spotify**
- I listen to music 75% of the time I sit in front of the computer so paying for Spotify is no biggie, I suffered for about a year with adverts, but then I couldn't cope anymore, if I am not listening to Spotify I will be on Soundcloud.

**Twitter app for Mac**
- Twitter is my bread and butter for learning new web development, it's definitely thee best for learning new techniques and being at the cutting edge of tech. Sharing is caring. On to the app, it's certianly not the best one, but I just want a small app to read tweets, there are a few things I wish it did, but I haven't had time to try any others except TweetDeck which is way too big and ugly.

**Slack**
- This app has gone wild, but it really is very good for communication.

**Skype**
- Again, very good for communication. Don't use it a lot but helpful for international clients calls.

**Adobe Creative Suite**
- I'm not in the Sketch gang yet, so the Adobe Creative Cloud serves it's pupose for me. Although they certainly need to create a package for PS and Illustrator without having to go all out, that's not cool.

## Developing

**Sublime Text**
- Fantastically fast and lightweight, everything you could need in a text editor. Once downloaded just hook up my prefeneces which can be found on GitHub - https://github.com/CHEWX/sublime-text

Extension:

* WordPress
* SASS

Also with sublime I like to use Terminal to navigate my way round my local websites, so it's also handy to set-up a symlink to open up files and folders straight into sublime - http://www.chewx.co.uk/opening-folders-sublime-terminal/

**MAMP Pro**
- Coughed up and paid for MAMP as my local web server as using the free version got a bit frustrating when you wanted to run two websites at once for any reason.

**Node.js**

**RVM**
- Ruby Version Manager, I don't use this to it's full potential as I'm not a Ruby developer, but install just as a safe guard.

**SASS** - gem install sass

**Xcode** - command line developer tools - this will install Git so make sure you set-up your Git credentials - http://www.chewx.co.uk/2014/git-hub-contributions-graph/

**Bower** - package manager

**Gulp** -  npm install --global gulp - task manager

**iTerm2** - Now superseeded Terminal just so I can split my window up nicely.


## Workflow

**Git aliases** - to make using Git a breeze I have set up some Git aliases to help speed up key strokes. While I was working at Propeller Communications they had these aliases set-up so I decided to keep the same for home use to avoid confusion. I have since never dropped these - http://www.chewx.co.uk/setting-git-alias-terminal/

**Bash profile** - add any aliases in here by typing: $ nano ~/.bash_profile . Typically faster keysrokes like SSH'ing into your server. And any of the above steps too.

So that is is, we are set-up.

If anyone knows how to streamline this process even more, please let me know.

I will continuely update this blog with my new applications and new workflows. For instance, since starting this blog I have move from Grunt to Gulp and Terminal to iTerm2.

