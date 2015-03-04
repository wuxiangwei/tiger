title: OpenSSL Heartbleed原因小结
date: 2014-07-24 17:12:32
categories: 
tags: openssl
---


User发送心跳报文给Server，Server复制心跳报文的内容回应User。

```c
memcpy(bp, p1, payload); 
```

Server拷贝心跳报文的内容给Client时，如果拷贝的字节数目超过实际心跳报文的长度，那么就会拷贝Server内存中其它的字节数据回应给User，从而泄露Server的内存数据。也就是，上面这段代码中的payload的值大于心跳报文的大小，拷贝的数据已经超出了p1所指向的内存，超出的部分就是泄露的数据。如果多次出现这种状况，那么Server内存的数据就会不停地泄露。

上面代码片段中的playload变量的值是在心跳报文中指定的，这个值可以纂改，并不代表报文的实际长度。因此，防范措施就是用接收到的报文的实际长度来检查payload的值是否合法。

```c
if (1 + 2 + 16 > s->s3->rrec.length)
　　return 0; //忽略长度为 0 的心跳包
hbtype = *p++;
n2s(p, payload);
if (1 + 2 + payload + 16 > s->s3->rrec.length)
　　return 0; //忽略长度与载荷不匹配的心跳包
pl = p;

```

*本文参考 [《Openssl Heartbleed漏洞攻击报文分析和防范》](http://www.vants.org/?post=244)  [《对 OpenSSL 高危漏洞 Heartbleed 的感慨、分析和建议》](http://tilt.lib.tsinghua.edu.cn/node/902) *


