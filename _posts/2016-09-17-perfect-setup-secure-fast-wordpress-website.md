---
title: The perfect setup for a secure, fast and performant WordPress website
layout: post
---

Being a WordPress developer, I work with it daily, and although it powers half the web, I still daily see tweets slating WordPress and how slow and insecure it is. Yes it is, but with the right setup, it's just as fast and secure as any other website.

There are many many routes that this blog post can go, but I'm more concerned on the set-up rather than creating a headless WordPress CMS with a re-architected database (although the former is defintely going to be the future).

Let's start with security, people get hacked daily, they get spam injected into their WordPress website and it is a pain in the arse to remove, I've been attacked around 10 times now on numerous different websites and have spent hours clearing up the mess. For the most part, I tend to change hosts everytime it happens. Unfortunately, for the first 5 hosts I moved to, it was just a matter of time until I got hacked again, no matter what I did, they would keep coming back, whether that was because of a certain plugin I had been using or something in the database, I don't know. I always started with a fresh WordPress install and trawled the theme for infections. I expect most people will relate to this, and the answer is usually, get a decent host, seriously, don't cheap out on this.

For me, it has been the answer, although maybe not the best answer as what we really want to know is, how and why.

I've now moved all WordPress hosted websites to [WP Engine](http://wpeng.in/aw "WP Engine WordPress Hosting"){:target="_blank"}, now they don't give you root access and it is pretty locked down, but if you do get hacked, they will clean it up for free, everytime. Thus far, this hasn't happened, so this tells me it was probably the host. Unlike Media Temple, who offer ONE free malware clean-up, seriously, what good is that when you host 15+ websites, so after 2 years with Media Temple, getting hacked, I moved everything to WP Engine.

Now as you have got to this point, you will probably find this a WP Engine oriented post, which it is, but I beleive they offer the perfect WordPress setup without being your own system administrator and ploughing loads of time into the setup.

So the first part is done, get a decent host, I'm would highly advise WP Engine if budget allows, failing that [SiteGround](https://www.siteground.com/index.htm?afcode=15b9b33b19e7f7ce9fb1c98d4a4440d8 "SiteGround WordPress Hosting"){:target="_blank"} and XXX (to be undated when I know of any) offer good WordPress oriented services. I think the important thing is to look for WordPress hosting that isn't just hosting, but WordPress oriented.

With [WP Engine](http://wpeng.in/aw "WP Engine WordPress Hosting"){:target="_blank"}, they offer their secret sauce in caching and an NGINX environment, now this set-up ticks off the performant part of the set-up with the help of a few other services and set-ups. If you migrate your website using WP Engine's migration tool (literally it take 2 seconds, amazing), then you will notice a speed increase instantly, without any optimization. This is a result of their caching and NGINX server. I've had many clients moan about their site speed, at breif glance, they have loads of requests and heavy imagery. However, I always tell them, to lay a solid foundation. They are always astounded by just the migration part of the job without even editing code. This can sometimes save them a lot of money in terms of code modifications.

The next part is another service called Cloudflare, Cloudflare offer performance and security enhancement tools. Now there are loads of things on Cloudflare you can play with and guess what, it's absolutely free for the most part. Amazing service. So Cloudflare will become your nameserver where all your DNS setup goes.

They let you set-up all your DNS simply too. Type in your domain, they will fetch all your DNS settings and then tell you a nameserver to point to. All done, not worrying about emails, or typing in the wrong I.P.

Once you've pointed at Cloudflare you will want to make use of their free SSL certificate, now this isn't full, but it is flexible which allows the use of HTTP2 (more on that later), woo hoo. If you have an ecommerce website, then I would advise paying to use WP Engine's SSL.

WP Engine is now setup to use HTTP2, so you can have multiple request running similtaneously, which effectively means no more concatantion and smaller focused files. This is a step back to the old school. So if you've just started using task runners to handle your contanation, then forget that.

You'll want to set-up some page rules on Cloudflare end to force SSL, so all your vistiors benefit from HTTP2. To do this, click the Page Rules tab and add in your non-www URL and your www url, and select, `Always Use HTTPS`. With those 2 rules set-up then you auto force all visitors to access your website over HTTPS. DON'T ADD AN UNNCESSARY PLUGIN FOR THIS. The same goes for if you have WP Engine's SSL, just set-up the page rules at their end.

You can also compress assets using Cloudflare, so minify your HTML and CSS, although I would usually tend to do this at the deployment stage rather than use a 3rd party to do it. If you don't have this set-up, then you can find these settings in the Speed tab.

We are nearly there, finally I would make use of WP Engine's CDN, simply tick the button in the dashboard and all your assets are on a CDN, yep, it's all apart of the service, no extra costs.

So to summarise, we are pointing your domain from your registrar to Cloudflare as the nameserver, all DNS edits are done on Cloudflare, Cloudflare is running SSL for you, so your website gets the fancy `https://` prefix. Cloudflare then points to WP Engine using a CNAME record (this allows WP Engine to migrate your server without having to modify the a name IP records). Because you are using SSL, WP Engine can benefit from using their HTTP2 setup along with CDN and some top notch caching.

Now sit back and watch your super sercure and performant WordPress setup.

As a final bit to this post, this is ONLY setup, we haven't even done any performance optimisations in the code. So if you are a webmaster then this is all doable, or if you are a client, then this is the setup you should be aware of.

I may create another post for code optimisation, but there are thousands out there. Although none focus on the most important thing, setup !

--

Update: Since writing this only 2 weeks ago, [WP Engine](http://wpeng.in/aw "WP Engine WordPress Hosting"){:target="_blank"} now supplys Let's Encrypt SSL's for free for any of their websites. So you could skip the Cloudflare setup. However, I am going to keep it still as it is a nice DNS inteface and there are still extra Bonus's with it, not just SSL.

Another update is that Chrome is soon going to report insecure websites. Now is a perfect time to start making your website secure and the web a fast and secure place.