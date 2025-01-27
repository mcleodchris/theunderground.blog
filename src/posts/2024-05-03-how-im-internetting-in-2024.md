---
title: How I'm doing the Internet in 2024
date: 2024-05-03T20:50Z
tags:
  - blogging
  - internet
  - tools
id: f56fa49c-0e19-4d50-9f4d-95f69e71045a
---

## Preamble

Hello. It's been a while. Let's just recognise it was a thing that happened, and move on.

I started writing this post months ago. I had the bright idea to lay out how I was "internetting" in 2024, and what tools I was using to do it. Somewhere along the way I got into a whole bunch of tangents on various related topics and the post that was supposed to be quite narrowly focussed became a 8000 word sprawling mess. So I edited it back down to a list of tools and associated reflections before I got pulled onto other things for a while.

I picked up the post again yesterday (2nd May) and started updating it with everything that's changed. As it happened, today I received a gentle prod from [Manuel](https://manuelmoreale.com/) about the lack of updates to the site, and I knew I had to finish it off and get it out there. Slay the proverbial dragon, as it were…

I will ask again at the end, but I'm going to ask up front, because I want you thinking about it, and because I want to know:

**"How are you doing the internet in 2024?"**

And, finally, before we get into the main article I have one last caveat for you: _I'm boring_. While you might find some useful tidbits here, I do not expect you to be wowed or find anything mindblowingly new. That's one reason I want to hear what you're doing - so I can find all the cool and interesting things more interesting people are doing with the internet.

## Browser (Desktop)

I've switched from "regular" [Firefox](https://www.mozilla.org/en-GB/firefox/), to [LibreWolf](https://librewolf.net/), which is a "custom version of Firefox, focused on privacy, security and freedom". So far it's going pretty well, though I have turned off one of the default settings for my convenience. Otherwise, it comes out of the box pretty much how I had customised my Firefox setup, plus a few extra tweaks, so it's all very familiar and mostly just saves me tweaking things further.

### Start page

I don't really have a "start page" as such, but I do have several pinned tabs - email/Mastodon/etc. I think the closest to a start page out of the pinned tabs is [RS.S JOY.lol](https://rs.sjoy.lol/), which is a page listing some really enjoyable sites/blogs and their latest posts (via RSS, hence the name) which was made by [Sara Joy](https://sarajoy.dev/)

### Search

I've been using using [DuckDuckGo](https://duckduckgo.com/) as my main search engine on all my devices for 7 or 8 years now. I can't remember the last time I _had_ to use anything else to find what I was looking for, and I also can't remember the last time I willingly browsed to the Google home page. I do keep meaning to try some of the other "alternative" engines, like [Ecosia](https://www.ecosia.org/) and [others](https://www.privacytools.io/private-search) but I've never had enough reason to.

### Extensions

I keep this very light at the moment:

- [uBlock Origin](https://addons.mozilla.org/en-GB/firefox/addon/ublock-origin/) (comes with LibreWolf by default)
- [Decentraleyes](https://addons.mozilla.org/en-GB/firefox/addon/decentraleyes/)
- [1Password](https://addons.mozilla.org/en-GB/firefox/addon/1password-x-password-manager/)[^1]
- [Multi-Account Containers](https://addons.mozilla.org/en-US/firefox/addon/multi-account-containers/)

[^1]: Yes, I should probably switch to something else, but every time I've tried it's not gone well. It's on the to-do list.

## Browser (Mobile)

It's Safari, because it pretty much has to be.

### Extensions

- 1Password, again
- [Noir](https://getnoir.app/)
- [Hush](https://oblador.github.io/hush/)

## Blogging

### Sites

I have [my main blog](https://chrismcleod.dev/), my "[hobby blog](https://worldsinminiature.com/)", [The Underground](https://theunderground.blog), and [a Micro.blog site](https://micro.chrismcleod.dev/) which I mostly use as [a GoodReads replacement](https://micro.chrismcleod.dev/bookshelves/), or for writing something I want to cross-post to social media. That's _probably_ enough blogs for one person? What can I say? I like blogs ¯\\_(ツ)_/¯.

My goal is to have these be the primary places I publish to on the internet; I should be reaching for one of these places before considering publishing directly on social media or another site or service. Some stuff won't fit, and that's fine in the moment, but maybe it should also prompt thoughts about how I can make it fit. I've been adding more and more content to my site(s) - some of it just for me - and I plan to keep expanding where it makes sense.

One problem I am running into is deciding which blog a post idea should be published to. This is primarily a problem choosing between my main site and The Underground. More than one draft post is stuck in the limbo between the two sites. Heck, _this_ post has spent 3 months in limbo before I decided it was best placed on The Underground.

### Tools

#### Drafting Posts

Primarily I'm drafting blog posts in [Obsidian](https://obsidian.md/). I have a [QuickAdd](https://quickadd.obsidian.guide/docs/) plugin action linked to a template, that pre-populates some of the frontmatter and creates the note in my Blog Drafts folder. I can use Obsidian on both a desktop and on mobile, with full syncing, so it works well for me. If I'm at work, with no Obsidian, I'll usually use VS Code.

Hobby Blog posts are usually short, or just a photo with a caption. For these I'm content to use the Micro.blog app.

#### Publishing

Publishing blog posts to my main blog or The Underground involves taking the finished draft and getting it into the Github repository for the relevant site. I generally use one of 3 methods:

- If I'm on my personal laptop, I'll copy the file into the folder structure and then use Git from the command-line.
- If I'm on mobile, I'll either use [Working Copy](https://workingcopyapp.com/) to check the files in, or I'll use [IndieKit](https://getindiekit.com/).
- If I'm on my work laptop (it happens sometimes) then I'll use IndieKit or the GitHub web-based editor.

If the post requires any images then I need to upload these to my Azure blob storage container before I can use them. For this I use Azure Storage Explorer (which makes it a "from my personal laptop" only task for now).

Bookmark posts are made using the IndieKit UI, or an iOS Shortcut that interacts with IndieKit.

Book-related posts are made using [Epilogue]((https://epilogue.micro.blog/), a companion app for Micro.blog.

#### Reading Feeds/Read It Later

I've jumped back to using [Inoreader](https://www.inoreader.com/) full-time for my feed reading. Feedbin was nice but it didn't offer me enough to warrant keeping around when I still have another 8 months on my Inoreader subscription.

I'm also trying to use [FraidyCat](https://fraidyc.at/) to encourage me to go to visit the sites I am reading, rather than just getting their content through RSS. I'm still in the process of deciding which sites are going to be added into FraidyCat.

For Read It Later needs I half-heartedly use [Omnivore](https://omnivore.app/). This isn't a knock on Omnivore itself - I haven't used enough to judge one way or the other - I just don't find myself needing to use it very often. If I'm going to "read it later" I'll usually leave a tab open in the browser. I have my bookmarks feed hooked up to Omnivore, meaning I don't really need to worry about using extensions or anything to save interesting links - I just have to post them to my website.

### Cross-posting

To cross-post new posts to social media I'm currently using Micro.blog for most things. I went through a phase where I was going to replace Micro.blog for something else, because it was very intermittent about picking up new posts on my main site. That turned out to be a problem on my end - Azure was doing some pretty aggressive caching of the feed file, which I think I've resolved. So I've been sticking with Micro.blog for the moment.

_When it works_, posts from my main blog, micro blog, and hobby blog are cross-posted to Mastodon and Bluesky using [the Micro.blog rules for how they are presented](https://help.micro.blog/t/automatic-cross-posting-to-mastodon-and-other-services/860).

I'm using [my bookmarks](https://chrismcleod.dev/bookmarks/) feed as a way of trying out [EchoFeed](https://echofeed.app/) by [Robb](https://rknight.me/). It cross-posts those bookmarks to Mastodon and Bluesky. I will probably move my main feed over as well. Given how flexible EchoFeed is, I'm trying to think of other interesting ways I could make use of it. Perhaps even use it to "echo" something from a third-party site into my own?

## Social Media

Lately I've been feeling the siren pull of social media less keenly. Maybe it's because I've been really freaking busy at work, or maybe because I've generally been feeling pretty zen recently (for the most part). Whereas at the start of the year I was doomscrolling _a lot_, for the last few weeks it's been something to fill a "micro break" once or twice a day. I'm not going to lie: it's been feeling _really good_.

With that said, I have 2 main public accounts I use - [Mastodon](https://social.lol/@chrisplusplus) and [Bluesky](https://bsky.app/profile/chrismcleod.dev). I also have a semi-public[^3] Instagram account I use infrequently for miniature painting content that has landed there following the decline of Twitter.

[^3]: I say "semi-public" because while it's not set to private, I don't really link to it anywhere, and it's so low usage it's practically read-only.

### Mastodon

Mastodon is far-and-away my main social media "presence" these days. It's where I usually post the stuff that doesn't fit in a blog, and where I spend the most time scrolling through things and interacting. I wouldn't say I have things setup exactly how I want them - I don't necessarily find Mastodon all that user-friendly still, particularly away from the 3rd-party iOS apps. My feed could definitely do with some tuning (i.e. follow more and better accounts), and for some things I've found it preferable to follow hashtags instead of accounts. If I could sum it up: "getting there, but needs more work".

### Bluesky

My Bluesky account is one I don't use as much these days; I'm mostly just cross-posting links there and maybe scan my timeline 2-3 times a week, liking and/or reposting anything that catches my eye. The reason I stick with it is because that's where a bunch of Twitter exiles I enjoyed ended up.

## Anything Else?

### Chat/Instant Messaging

I don't. How dare you suggest such a thing.

### Discovery

Oh my word how I miss [Nuzzle](https://daringfireball.net/linked/2021/05/05/nuzzel). I'm still searching for a replacement. Perhaps one that works with Mastodon? **Please** let me know if you know of something.

In lieu of an aggregator telling me what people are talking about that I might be interested in, I have to do it _manually_ (ugh). Where's the algorithm when you actually want it?[^4]

Basically I try to keep a mental note of anything that's coming up repeatedly (or just grabs my attention) in my feed reader or social feeds, and check it out when I can. It's far from an ideal process and I'm probably missing out on _loads_. I follow Kottke and Waxy specifically for all the neat little gems they surface on their sites. They have their own folder in Inoreader and everything. I'd love to add more sites to this folder, so if you know of any that deal mostly with resharing the weird and wonderful of the web, please share!

I really wish there were other, convenient, ways to find all the neat stuff on the web. Again, if you have any suggestions here then please get in touch.

[^4]: This is partly sarcasm, if it wasn't obvious. But I do miss Nuzzle, especially in a world where the social sites I use are largely algorithm-free and if you don't see a post when it was posted you'll probably _never_ see that post.

### Other Apps

[This blog post about my default apps](https://chrismcleod.dev/blog/default-apps-for-2023/) should have you covered. At least until I update it for 2024.

## Wrapping Up

I asked at the start "how are you doing the internet in 2024?" - so now I want to know! It's currently [WeblogPoMo](https://weblog.anniegreens.lol/weblog-posting-month-2024) (Weblog Posting Month), and this would make an ideal post. Just don't take as long to write it as I did, or you'll miss the boat 😅

If you do write a post, you can now let me know by sending a [webmention](https://indieweb.org/webmention) to the [The Underground's home page](https://theunderground.blog) - simply link to the site (not the feed) and it should pop up for me to see. Or you can email me at the address below/tag me on social media. Please don't feel you need to follow the same structure as I've done here; this is only the way I was able to edit and wrangle things down into a manageable word count. Do your own thing.

My plan is to collate as many of your posts as I can into the next update here, so we can see all the different ways people are using the internet of late.

As always, if you do have any feedback or ideas for future topics, you can reach out on [Mastodon][masto], or email [feedback@theunderground.blog][mail].

[masto]: https://social.lol/@chrisplusplus
[mail]: mailto:feedback@theunderground.blog
