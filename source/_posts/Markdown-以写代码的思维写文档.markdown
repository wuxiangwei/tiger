title: "Markdown:以写代码的思维写文档"
date: 2014-08-07 20:23:29 
categories: markdown
tags: markdown
---

本文不讲解Markdown的语法规则，只关注它带来的好处以及我使用的方法。语法规则可以参考[Markdown: Syntax](http://markdown.tw/)。

<!--more-->

## 文档内容和格式分离  

使用Word写文档总花费很多时间在调整格式，并且往往最终也没让自已满意。这对有洁癖的人来说痛苦非常。Markdown只通过几个简单的符号表示文档的格式，比如##代表二级标题,\*\*X\*\*代表强调内容X，\*X\*代表X的字体为斜体等。这种方式同HTML非常相似，但Markdown的符号更加简洁。这就是它的设计哲学“**易读易写**”，我们直接阅读Markdown的源代码(注意，这里指带有Markdown标记的文档)不会因为有太多的标记符号而感觉到吃力。也正因为Markdown这套标记符号的简单和抽象的特点，从而能够让写作的人专注于内容。为什么说这套标记符号是抽象的？举个例子，符号“##”只标明它后面的内容是二级标题，但没有定义二级标题的具体格式。具体格式和标记符号之间的关系就是面向对象中具体实现类和接口的关系。将书写好的Markdown源代码转换成常用的文件格式（如HTML、DOCX和PDF等）要借助一款转换工具，转换工具会实现标记符号对应的具体格式。在众多转换工具中，我觉得[Pandoc](http://johnmacfarlane.net/pandoc/)是不二选择。

BTW，如同写代码一样，去耦合两样东西的惯用手法就是在这两者之间引入抽象层。标记符号就是Markdown中的一个抽象层，解耦了文档内容和文档格式，从而让两者可以独立开发而不用关心彼此。

## 文档整体和部分松耦合 

我用下面的目录结构来写文档，在顶级目录sds-doc下主要包含四部分内容：chapters、images、reference和一个README.txt文件。Chapter目录下保存文档的各个章节，比如我这份文档中就包含balance、common等章节；Image目录用于存放每个章节用到的图片，它的子目录结构和chapter子目录的结构保持一致；Reference目录用于保存文档中引用到的第三方文档。README.TXT文件记录使用pandoc转换markdown文件的命令。

```
sds-doc
|-- chapters
|   |-- balance
|   |-- common
|   |-- consistency
|   |-- integrate
|   `-- storage
|-- images
|   |-- balance
|   |-- common
|   |   |   |-- 1.jpg
|   |   |   |-- 2.jpg
|   |-- consistency
|   |-- failure
|   `-- integrate
|-- README.txt
|-- reference
|   |-- Amazon_Dynamo论文中文版.pdf
|   |-- Erasure-Codes-For-Storage-Applications.pdf
|   `-- Google-File-System中文版_1.0.pdf
`-- sds.md
```
这看起来非常像Project的目录结构，README文件就是编译脚本。我们可以在该文件中指定转换哪些内容，不转换哪些内容，因此可以很灵活地控制最终文档包含的内容。
另外，文档中经常引用文档内的其它章节，我们可以对被引用的章节设置个ID，那么引用的地方就可以根据ID号来引用了。为避免ID名字命名出现混乱，我们根据文档的目录结构来命名章节的ID编号。例如，对*sds/chapters/storage/raid*小节的ID号，命名为sds_storage_raid。


## 文档持续集成

“冰冻三尺非一日之寒”，写技术类的文档不像写小说想到哪里就写到哪里，并且还越写越来劲。我对写文档的态度是，**先把技术理解透彻再开始写文档**，这样就能够做到一气呵成。但是，理解是个循序渐进的过程，所以文档的准备工作也是个与日俱增的过程。因此，我使用Git来管理平日的小理解，随着理解的深入持续地进行加工修改。

使用Markdown+Git写文档的另一个好处是，当有多个人共同写同份文档的不同章节的时候，如果采用Word必定每个人的文档格式都有自己的风格。但是，如果大家都使用Markdown写文档，最后使用相同的转换脚本，那么格式就会无比地一致。使用Git也可以很好地合并控制每个人的输出。

## Markdown在微信公众账号中的使用

最近开始玩微信公众账号，但它的编辑器太简陋了，连最基本的一级标题、二级标题都没有，更别提代码语法高亮功能了。虽然它暂时不支持markdown格式，但我们仍然可以在它的编译器中使用markdown语法，然后使用一款名叫markdown here的浏览器插件就能够轻松搞定了。具体过程参考文献[1]。

## 参考文献

1. [如何在微信公众平台上优雅的写作](http://www.banpie.info/how-to-write-beautifully-on-wechat-platform/)


