# How to make your website embed in Discord

## Intro

*blank?*

Hello there, this is a tutorial on how to make your website embed in Discord.

This tutorial is for websites that are written in HTML by the website developer. Website creating websites such as Wordpress or WIX may not work unless there is an option to edit the code.

### html

Most of the basic important content of your embed will be using OpenGraph metadata. This data is contained in ``<meta>`` tags in the ``<head>`` of your HTML document. Discord is not the only place that uses OpenGraph meta tags for its embeds, many other social media services use them as well.
There are many OpenGraph meta tags, but Discord only uses four of them for its embeds, though other sites, such as Facebook, use many more.

There is also some other data in the HTML that does not use OpenGraph meta tags.

### json

Less basic but just as important embed information isn't in the HTML of your website but in a separate JSON document, specifically oEmbed JSON. (That might not be the correct thing to call it, I am not experienced with JSON).
The JSON gives you more fields for information and more hyperlinks.
The JSON can get a bit more complicated but can be used to have more complicated embeds.
Embedding videos, iFrames, and more into your Discord embeds will require much more JSON than covered here. I will link the oEmbed documentation in the description if you would like to take a look at it for yourself.

## HTML

### intro

*html.html*

I have prepared several examples of embeds and their code to serve as examples and help explain what does what.

This one only uses HTML, and uses all four of the OpenGraph meta tags that Discord supports. The 4 are ``title``, ``description``, ``image``, and ``site_name``. There are also other meta tags here but we'll get to those later.

### og:title

The first one is the ``og:title`` tag. This contains the title of your embed. It is a hyperlink, but you can't cuztomize where it leads, it only goes to whichever website has the embed. The entire line is ```<meta property="og:title" content="og:title">``` What ever is in the contents attribute will be the text in your title. I have it as ``og:title`` so it's clear what it is in this example embed that I have here.  

*html.html embed*

Here you can see large link that says "og:title". Whatever text you put in your content attribute would go here. If you click on the link, it takes you to the website with the embed.

### og:description

*html.html*

The next tag is ``og:description``. You can put the tags in any order you want, but I decided to put them in what I think is order of importance. The content attribute contains the description in your embed. It can really be whatever you want. You can add paragraphs upon paragraphs, a couple sentences, whatever. It is not a link itself and as far as I know you cannot add hyperlinks within it.  

*html.html embed* 

The text that says "og:description" is where whatever you put in the content attribute would be. This one is probably the most basic.

### og:image

*html.html*

Now here we have ``og:image``. This, as you would expect, adds an image. The full line is ```<meta property="og:image" content="imagesrc.png">```. The content attribute contains the src of your image.

*html.html embed*

Here is an example. This one is also quite straightforward.  

By default, the image is small and to the side, though this can be changed.

#### <meta name="twitter:card" content="summary_large_image">

*html.html*

Here, you can see I have commented a line of code. This line, ```<meta name="twitter:card" content="summary_large_image">```, changes the small image on the right of the embed into a large image at the bottom of the embed. Be careful with this one because it uses the ``name`` attribute, unlike the OpenGraph metadata which uses the ``property`` attribute.

*embed2.html embed*

I have utilized it in the embed here. As you can see, it makes the embedded image large and at the bottom of the embed.

Though, please be warned that sometimes when using this the embed disappears and only the image remains. I have no idea why this happens nor how to fix it.

### og:sitename

*html.html*

The final OpenGraph meta tag supported by Discord is ``og:site_name``. This is presents a small text box above the title, though I suppose it's easier to just show you rather than explain it.  

*html.html embed*

Here you can see the small field that says ``og:site_name``. That's the where the contents appear. There really isn't much else to say about it until we get to JSON.

### theme-color

*html.html*

Next, we have ``theme-color``. This metadata is interesting because it's not OpenGraph metadata, but still just as essential and interesting.
Similarly to the twitter card summary, this uses the ``name`` attribute.  

The full line is ```<meta name="theme-color" content="#hexetc">```

*html.html embed*

Here you can see that the embed color is brown. That is because in the content attribute I put in the hex code ``#654321``, which is the brown.

### outro

That is all I've been able to do with embeds with only HTML. I'm sure there's more, but I haven't been able to do any. Do your own research if you want to.  

## JSON

### intro

*blank?*

Although that's all I've been able to do with HTML, like I stated at the beginning, you can use JSON to further customize your embeds.

The JSON I will be discussing adds one new field and greatly improves another.

The JSON used is oEmbed. I learned of this by way of a great Reddit post that I came across while researching for this video. That Reddit post will be linked in the description, as before discovering it I only knew of the 4 OpenGraph tags, so I feel it would be wrong not to credit it.

### embed 1

*embed.html*

Here's the HTML code for the first JSON embed I've prepared. It has all the previously used HTML, and an extra line, ```<link type="application/json+oembed" href="https://hooman1130.github.io/embedTesting/embed.json">```. All that this line does is link your HTML doc to whatever JSON file you're using. So far, nothing special. You would put the link to your JSON file in the ``href`` attribute.

*embed.json*

Here we have the JSON file that's linked to the HTML document. I used all of the things that the aforementioned Reddit post told me I could use here.
Some of these affect the same field as some of the HTML, which is accounted for in the next embed example that we're not getting to just yet.  
The ``title`` in the JSON is the same as the ``og:title`` in the HTML. 

*embed.html embed*

If both are present the content of the ``og:title`` in the HTML is displayed. 

*embed.json*

The ``provider_name`` in the JSON is also the same field as the ``og:site_name`` in the HTML, but if both are present, the ``provider_name`` from the JSON will display.
Unlike the titles, there is a key difference between the ``og:site_name`` in the HTML and the ``provider_name`` in the JSON, and that is that the "provider" from the JSON can also be a link when using ``provider_url`` in the JSON as shown here.  

*embed.html embed*
*hover over provider field*

This can be much more useful than just the ``og:site_name`` in the HTML.

*embed.json*

The JSON also presents a new field, the author field.

*embed.html embed*
*select author field*

*embed.json*

``author_name`` contains the text to be displayed in the author field, while ``author_url`` contains the url that the link goes to, as this field is also a link.

*embed.html embed*
*hover over author field*

### embed2

*embed2.html embed*

I toyed around with the JSON and HTML a little bit. In this example, I got rid of some of the HTML and JSON content that overlapped with each other, leaving the ones that were previously overruled.  

I also made the image bigger.  

*embed2.html*
*select twitter card line*

I did it by using the twitter card metadata in the HTML, as you can see.

### distro

*distro.html embed* 

Using all of this, I decided to make a slightly better example of what you can do with the embed data.
In this example, I used the embed data to promote the YouTube channel of my friend DistroHopper39B, who you can find in my featured channels.  

I didn't use the title because the link would only lead to the blank webpage I have for this embed data.
Instead, I used the author field to substitute for it. Clicking it will take me to his channel.  
I also used the provider/site name field right here, but I didn't really have any ideas for it, so it's just a Rick Roll.  
Because I asked him to, he sent me his banner. I hosted the image file on Discord and used the ``og:image`` and twitter card metadata to display it as it is.

*distro.html*

Here's all the HTML if you want to pause and look at it.

*distro.json*

and this is the JSON.  

### outro

*blank screen*

That is everything I've been able to do with JSON, though I'm sure there's more that can be done. If you're interested, do some research yourself, I'll link a few docs in the description.

## Outro

*tiny drumroll or music maybe*

With that, my first video is over. I hope this video was useful or interesting to you. I will link some helpful resources & documentation, etc, in the description.  
I will also leave the script to this video linked in the description. It's written in markdown, and likely has several syntax errors, but feel free to take a look.
Subscribe if you feel like it but don't expect me to upload often.  
Also, take a peek at my website if you want to. It's open source and hosted on GitHub.

*outro music or something*
