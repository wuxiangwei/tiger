title: Hexo笔记
date: 2015-02-27 21:59:09
categories: hexo
tags:
---

关于使用Hexo搭建博客的教程已经很多并且足够详细，本文侧重搭建过程中碰到问题的解决。我对博客的要求不高，只要满足下面几点就可以了:

* 不含广告
* 界面足够简洁
* 具备标签、评论、分享功能，支持markdown编辑
* 能使用Git对文章进行版本管理，并且可移植性好


<!--more-->


## 修改本地服务的IP地址

输入hexo s命令启动本地服务。然后，浏览器输入localhost:4000，就能够看到预览效果。服务器的ip地址和端口号在\_config.yaml文件内配置。

```
port: 4000
server_ip: 192.168.7.50
```

如果Linux系统没装图形界面，设置server\_ip为主机IP地址，这样就能够通过本地局域网的其它主机来访问了。

## Git Bash显示中文

打开git bash，控制台输入下面的命令，为ls命令取别名。

```
$ alias ls='ls --show-control-chars --color=auto'
```

## 添加多说评论


Hexo添加多说评论时需要提供[多说](http://www.duoshuo.com)账号的shortname，找了半天没找到这东西。多说没有提供注册账号的入口而是让用户直接以微博、百度等账号登入，登入后在“后台管理”中才有。

## Markdown注意事项

1. 引用```内部不要有空行，否则显示有问题。
2. 超链接时，网址一定要以Http打头，不能以www开始。

## 参考资料

1. [hexo你的博客](http://ibruce.info/2013/11/22/hexo-your-blog/)
2. [google字库导致hexo modernist首页加载变慢](http://ibruce.info/2013/12/03/fonts-googleapis-lead-to-slow/)
3. [windows下git bash显示中文](http://blog.csdn.net/self001/article/details/7337182)

