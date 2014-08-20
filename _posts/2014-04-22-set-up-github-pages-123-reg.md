---
title: Set up GitHub Pages with 123-Reg
layout: post
permalink: /set-up-github-pages-123-reg
dsq_thread_id:
  - 2630284867
categories:
  - blog
---
I found myself wanting to create a new project this week but I wasn&#8217;t at home. I wanted to be able to edit a website from anywhere on anything. I also didn&#8217;t have any space on my shared hosting and I didn&#8217;t want to pay to upgrade. I did a little research and came across <a href="https://pages.github.com" target="_blank">GitHub Pages</a>. A free hosting solution for a static website and also using Git. My current shared hosting is set-up with Git so this was also a must.

Working from my iPhone I managed to buy the domain from [123-reg.co.uk][1]. I already had a GitHub account so I went about setting up this website quickly.

Here is how I did it.

1. Firstly log in or set-up a GitHub account
2. Create a new repository and name it your project name &#8211; for this example we will use &#8216;thrift&#8217;

<img src="http://chewx.co.uk/wp-content/uploads/2014/04/Screen-Shot-2014-04-20-at-20.18.48-1.png" alt="Screen Shot 2014-04-20 at 20.18.48 1" width="858" class="alignnone size-full wp-image-33" />

3. Click settings once set-up repo

<img src="http://chewx.co.uk/wp-content/uploads/2014/04/Screen-Shot-2014-04-20-at-20.19.02-e1398021738633.png" alt="Screen Shot 2014-04-20 at 20.19.02" width="961" class="alignnone size-full wp-image-34" />

4. Click &#8216;Automatic Page Generator&#8217; &#8211; this will create your repository into a GitHub pages repository. You can now start from scratch or use a GitHub pages template.

<img src="http://chewx.co.uk/wp-content/uploads/2014/04/Screen-Shot-2014-04-20-at-20.19.08.png" alt="Screen Shot 2014-04-20 at 20.19.08" width="703" class="alignnone size-full wp-image-35" />

5. Once you have chosen your template and published your website you are effectively complete. You have created a simple website live on the internet which is super-backed up and super-fast.

&#8211;

6. Of course you will want to set-up a domain with this. So you will need to create a new file called &#8216;CNAME&#8217;

<img src="http://chewx.co.uk/wp-content/uploads/2014/04/Screen-Shot-2014-04-20-at-20.19.43.png" alt="Screen Shot 2014-04-20 at 20.19.43" width="823" class="alignnone size-full wp-image-36" />

In this file simply type in your domain and press save.

<pre>www.thrift.co.uk</pre>

7. Everything is now complete on GitHub end. You will now need to go into 123-reg and set-up your DNS records. Select your domain from the drop down and click manage.

8. Click Manage DNS and then advanced DNS editor

9. You will now need to remove all A name and CNAME records that are on your domain DNS. You can leave the MX records as this is for emails.

10. You should now be left with 2 MX records only. Create a CNAME record with a &#8216;www&#8217; DNS entry and target/destination of &#8216;username.github.com&#8217;

11. This will now successfully point your domain to your GitHub account. It does this by matching domain with the CNAME file you made in your GitHub project root earlier on. It is also advisable to point blank (non-www) domain to your repo too. Simply add a A name record pointing to &#8217;192.30.252.153&#8242; but with the DNS entry or &#8216;@&#8217;.

You have now successfully set-up your free Git controlled hosting with your 123-reg account.

&#8212;

The next step is then editing your website in your favourite IDE. You can do this direct through GitHub but if your at a location where you can download your IDE easily or your on a work computer then this is how you would do it.

12. Working in Terminal. Find the location you want to clone your repo to

<pre>cd sitefolder</pre>

13. Enter the following to clone your repo

<pre>git clone https://github.com/username/thrift.git</pre>

14. You have now sucessfuly got all your files. Edit them and when you are ready to push back to GitHub

<pre>git add .</pre>

This will add all files, you can do them in chunks by doing

<pre>git add filename.html</pre>

15. Add a message to your files *make sure this is meaningful

<pre>git commit -m "message here"</pre>

16. Finally to push live

<pre>git push origin gh-pages</pre>

This will push the branch you are on &#8216;gh-pages&#8217; to the repo on GitHub &#8216;origin&#8217;

&#8211;

Any questions please let me know.

 [1]: http://www.123-reg.co.uk/affiliate.cgi?id=AF222469&#038;_%24ja=tsid:36215&#038;url=http://www.123-reg.co.uk/