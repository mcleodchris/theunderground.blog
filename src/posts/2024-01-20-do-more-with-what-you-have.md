---
title: Do More With What You Have
date: 2024-01-20T12:39Z
tags:
  - blogging
  - websites
---

Hello again, everyone. It's been a minute! I've spent the last few weeks trying to come up with what I wanted to write in this post - originally I wanted to post on the 1st January, to properly kick off the New Year. [I managed that for my regular blog](https://chrismcleod.dev/blog/new-year-old-posts/), but not here; I struggled to come up with a suitable theme to structure the post around, which led to several drafts discarded as "aimless". But then it hit me: themes!

No, not the things we might install to our chosen website tool to give it a fresh look, but "theme" as in "[an implicit or recurrent idea; a motif.](https://www.wordnik.com/words/theme)". I don't like to give myself resolutions for New Year anymore as they don't work for me, but I do like to give myself a theme to guide what I do in the year. It's not so much a firm goal as a guiding mission statement. A motif for my year. This year [I've been inspired by my partner's own plans](https://kapowskireads.wordpress.com/2024/01/18/im-doing-a-no-spend-year/). In her case she's referring to and framing it as a "low spend year" because that's what it's usually referred to in the online circles she travels in, but the core principle is quite simple and widely applicable:

# Do More With What You Have

So I've been thinking about how to apply this theme to my year in various contexts, and importantly (in this context) how it might be relevant to _you_, dear reader.

If you're reading this, chances are you're the sort of person who has their own website. Think about what you use your website for: most likely as a blog? Maybe a portfolio of projects/work? Maybe a little bit about you and links to other places you have profiles? But what else could you be doing?

Personal websites are great because they are so flexible. You can do [anything you can dream of](https://diagram.website/), it just takes various degrees of time and effort. But sometimes it's easy to forget you have that flexibility. I know I often do. I've been struggling to articulate exactly what I mean, but thankfully [Alexandra](https://xandra.cc/) posted a couple of days ago [on a similar theme](https://library.xandra.cc/long-live-webpages/), and this bit resonated with me and speaks to what I'd like to encourage you to think about:

> we don't have to return to the 2010-era of blogs being the main function and form of a website; instead, incorporate creative ways to tell the world about parts of you that you wish more people would ask you about.

This all might make more sense if I talk about how I'm intending to apply this thinking to myself and my own site. It might not be as purely creative as Alexandra suggests, but it's definitely about doing more with what I have (namely, a website).

## How I want to do more with my own site in 2024

I build my site on top of [Eleventy](https://11ty.dev). Eleventy is insanely flexible when it comes to [integrating and rendering data](https://www.11ty.dev/docs/data/). I experimented with this last year by using pulling in data from the Feedbin API to generate my Links page. I'm in the process of rebuilding that page into something more personal than a big dump of every single feed I subscribe to, but that's somewhat by-the-by.

### Bookmarking Cool Links

Last year I was looking for a bookmarking service where I could collect interesting links as I find them. For whatever reason, dumping things into the browser bookmarks manager doesn't work for me, and I've never really clicked with any of the services out there. A few years ago I collected them on the Wordpress version of my site, using the [Indieweb Post-Kinds plugin](https://indieweb.org/Post_Kinds_Plugin) and that worked pretty well for me, but I don't think it worked as well for readers, and it was also not portable - I've still not extricated those posts from the Wordpress export because they are in an opaque data structure.

But then I got thinking about how I could build this feature using Eleventy data files, and provide a nice clean way of browsing them separate from the regular blog posts. I could even maintain some of the Indieweb niceties like [microformats](https://indieweb.org/bookmark) and contextual [webmentions](https://indieweb.org/Webmention). [IndieKit](https://getindiekit.com/) would even give me a nice bookmarklet and UI for saving bookmarks.

I'm still in the design and experimentation phase of adding bookmarks to my site, but hopefully it will be available soon.

### Tracking Hobbies

Last year I used [Micro.blog](https://micro.blog) in lieu of something like Goodreads or Story Graph for [tracking my reading habits](https://micro.chrismcleod.dev/bookshelves/). I don't need much from a reading tracker - store book details and track "want to read"/"currently reading"/"finished reading" status, and maybe adding a few thoughts about the book. While Micro.blog definitely gives me a lot of conveniences, this _feels_ like the sort of thing I should use my site for.

Whenever I want to learn a new frontend framework or related technology, I build a new version of the same app: a tracker for my miniature painting. It's my version of the classic To-Do app almost every framework uses for a programming tutorial. Last year it was [Angular and Azure Static Web Apps](https://github.com/mcleodchris/i-painted-this). These learning exercises are great, but it means I'm constantly rebuilding the data and interface. I can keep doing these exercises, but why don't I build a "canonical" version on my site?

### But wait! There's - probably - more!

Coincidentally, I just migrated my site from Netlify to Azure Static Web Apps. While it was mostly a cost-driven decision - I was rapidly running out of "build minutes" on my Netlify plan, and I already had an Azure subscription with a more generous build allowance - I'd be remiss to not mention that SWA opens a lot of opportunities for hooking in other tools and services. My head is buzzing with ideas of how I could augment my site and do more with it.

## It doesn't have to be fancy

You've probably just read the section above and thought "that sounds like a lot of work, and I don't have the time for that". Or "that's great, but I don't have a fancy Eleventy-driven site". That's all fair! But you don't have to do anything fancy to do more with your website. Remember: I'm a software developer; my mind usually goes to the most complicated and/or impractical solutions _first_ 😅

Everything I described above could also be a single static page that I update manually using simple HTML: text, links, and images. You might have your own ideas to expand your site but don't want to spend a whole bunch of time building something elaborate. So start small and simple. Add that HTML page and fill it with something that is intrinsically _you_ that doesn't really fit your regular blog format.

## But Why?

Why do I think you should do more with the website you already have? Well, there are a few reasons I can think of. There's the obvious "you already have it, so do something with it". You could argue that you could potentially save some money somewhere by replicating the core usage of a service you pay for elsewhere. These are OK reasons, and there are others, but for me there's a big one: nostalgia.

An aside: I hesitate to air the nostalgia reason; a lot of the current [resurgence](https://www.anildash.com/2024/01/03/human-web-renaissance/) of the small/indie/open web is driven by [a nostalgia](https://joanwestenberg.medium.com/i-miss-the-internet-c7e41544a8b9) for [what we had](https://www.anildash.com/2012/12/13/the_web_we_lost/) before, and ultimately I'd like us collectively to move past that nostalgia and start imagining new ways of using the web on a personal level.

But. But but _but_.

I can't deny there is an element of nostalgia driving this desire to do more with my own website. Way, way, way back… back before we standardised on blogs, I had a website and it was a melting pot of _everything_ I was interested in; it was a miniature "hub" online for me and my "IRL" friends (one of several hubs we used, all run by someone we knew in person). There was a feature where people could leave messages for each other. Meetups were arranged in the comments. If I decided I wanted to experiment with using maths to drive Adobe Flash animations, well I guess now there's a new gallery page for that. Photo dumps of nights out before we started using Facebook for that purpose - before Facebook existed, even! Reviews of local band gigs that were as much about promoting those bands and venues as anything else, because I was in love with that world and wanted to share it… in short: anything I could think about putting online I experimented with doing so. Some of it didn't work and got pulled down again quickly, and most of it would almost certainly make me cringe now - but isn't that part of the point of being young? To embarrass your older self with how carefree you were?

Now, I accept the world and I are very different in 2024 to how we were in 1999-2002, so it will never be exactly the same. But the ethos still clings to me. I still believe - even if my aging memory needs reminded and pushed into action - that our websites could and should be a reflection of everything we want to share about ourselves. Your website _could_ be your central hub on the web, instead of one part in a network of profiles across dozens of sites. It could be something so deeply _you_, that even though you post prolifically in many places, it's your website people remember about and read first.

## Wrapping up

I'm nearly 1700 words deep into this post at this point, which is over twice as long as I intended it to be (_Happy New Year!_) so should wrap things up. I'm not asking you to go out and do anything to your website right now. I'm also not saying anything I've talked about is something you should feel like you _must_ do, as this post is meant to be just me talking about what I'd like to do this year, and why. But I would like you to ponder something: if you _could_ do more with your website, or if you've ever thought "I could add \[thing I'm interested in\] to my site", why not make 2024 the year you do it?

As always, if you do have any feedback or ideas for future topics, you can reach out on [Mastodon][masto], or email [feedback@theunderground.blog][mail]. I would like to apologise to the people who emailed me after the last post; I'm still catching up on festive-period email, but I should hopefully be in a position to reply to you soon.

[masto]: https://mastodon.online/@mstrkapowski
[mail]: mailto:feedback@theunderground.blog
