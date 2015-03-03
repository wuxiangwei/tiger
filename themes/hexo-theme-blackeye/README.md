# Blackeyc

> **Attention: Blackeye based on Hexo version 2.0.x.

> Theme for [Hexo]. Based on  Heroic Yang's [Modernist theme].

[Demo the Theme]

## Install

Execute the following command and modify `theme` in `_config.yml` to `Blackeye`.

```
git clone git://github.com/iarchean/hexo-theme-Blackeye.git themes/Blackeye
```

Execute the following command to update Blackeye.

```
cd themes/Blackeye
git pull
```

## Config

Default config:

``` yaml
menu:
  Home: /
  Archives: /archives

excerpt_link: Read More
archive_yearly: false

widgets:
  - category
  - tag
  - tagcloud
  - recent_posts
  - blogroll
  - flickr
  - twitter

search: true (or false)

blogrolls:
  - Archean Zhang's Blog: http://blog.archean.me/

fancybox: true (or false)

twitter
	username:
	show_replies: false (or true)
	tweet_count: 3

# Flick Badges
# Find your user id here: http://idgettr.com/ It should be something like "25711589@N00".
flickr_user: 68613860@N04
flickr_count: 9

duoshuo_shortname:

google_analytics:
rss:
```

- **menu** - Main navigation menu
- **excerpt_link** - "Read More" link text at the bottom of excerpted articles
- **archive_yearly** - Enable archives grouped by year, only for nonpaged (set the pagination config: `archive: 1`)
- **widgets** - Widgets displaying in sidebar
- **blogrolls** - Blogrolls displaying in `blogroll` widget
- **fancybox** - Enable [Fancybox]
- **duoshuo_shortname** - [Duoshuo] ID
- **google_analytics** - Google Analytics ID
- **rss** - RSS subscription link (change if using Feedburner)

[Hexo]: http://zespia.tw/hexo/
[Modernist theme]: https://github.com/orderedlist/Modernist
[Demo the Theme]: http://blog.archean.me/
[Duoshuo]: http://duoshuo.com
[Fancybox]: http://fancyapps.com/fancybox/
