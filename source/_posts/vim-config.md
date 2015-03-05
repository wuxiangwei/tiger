title: 简单的VIM配置
date: 2015-03-05 08:57:42
categories: vim
tags: vim
---

我的vim配置，特点是简单不花哨，尽量使用默认快捷键。

<!--more-->


```
set encoding=utf-8
set termencoding=utf-8

if has("win32")    
    set fileencoding=chinese
else
    set fileencoding=utf-8
endif

if has("win32")
    set nocompatible
    source $VIMRUNTIME/vimrc_example.vim
    source $VIMRUNTIME/mswin.vim
    behave mswin
endif

syntax on
"set cul
"set cuc
set ruler
set showcmd
set nocompatible

set cursorline " 高亮当前行
"set paste " 设置粘贴模式，使粘贴不错位
set novisualbell " 设置不闪烁

set autoindent " 继承前行的缩进方式
set cindent
set tabstop=4 " 制表符为4
set softtabstop=4 " 按backspace按键时可以删掉4个空格
set shiftwidth=4 " 设置<<或>>移动的宽度为4
set expandtab
set smarttab " 为C程序提供自动缩进
set number
set history=1000

set textwidth=120 " 设置每行120个字符自动换行

set autochdir " 自动切换当前目录为当前文件所在目录

set hlsearch
set incsearch

set cmdheight=2

filetype on
filetype plugin on
filetype indent on

set autoread " 设置当文件被改动时自动载入
set autowrite " 自动保存

set nobackup
set noswapfile

set showmatch " 高亮显示匹配的括号
set completeopt=preview,menu " 代码补全

" 自动括号
"
inoremap ( ()<ESC>i
inoremap { {}<ESC>i

colorscheme peachpuff

```


### 快捷键


gg
G
/
?
vimgrep
copen
c-n
c-p
fx

dd
dw
dl

i
I
a
A


