

# [👻](https://github.com/ET-yzk)ET-yzk’s

<p class="heti" id="hitokoto" style="text-align:center"><a href="#" id="hitokoto_text">: ) 「 Loading... 」</a></p>

### 🏷️TODO

> Nginx
>
> SpringBoot
>
> 持续集成
>
> Restful含义

---

## [📔](./日常记录.md)日常记录

### [Vim Intro](./daily/Vim.md)

> 2021.10.30

### [`__str__` 和 `__repr__` 的异同](./daily/str&repr.md)

> 2021.11.1

### [Java Bean](./daily/javabean.md)

> 2021.11.14
>
> [Java bean 是个什么概念？](./daily/javabean.md#Java bean 是个什么概念)

### [类内部定义自身](./daily/类内部定义自身.md)

> 2021.11.14
>
> 为什么C++类定义中，数据成员不能被指定为自身类型，但可以是指向自身类型的指针或引用？

### [如何形象说明路由协议RIP和OSPF？](./daily/RIP&OSPF.md)

> 2021.11.16
>
> From 知乎

### [Python生成器](./daily/pythonGenerator.md)

> 2021.11.19

### [动态规划简单理解](./daily/dp.md)

> 2021.11.23

## [BitMap](./daily/bitmap.md)

> 2021.12.4

---

## [🍃](./读书笔记.md)读书笔记

### [设计数据密集型应用](./book/Designing Data-Intensive Applications.md)

> [📖](http://ddia.vonng.com/#/) 2021.11.15 -

---

## [🔭](./转载记录.md)转载记录

### [Vue 跨平台性能优化十法](./reprint/Vue 跨平台性能优化十法.md)

> From 腾讯技术工程
>
> 2021.10.08

---

## [📡](./问题记录.md)问题记录

### [Python cls 与 self，@classmethod 与 @staticmethod](./problem/Python cls 与 self, classmethod 与 staticmethod.md)

> From 知乎
>
> 2021.10.14

### [微信小程序后端开发踩坑之 Django](./problem/微信小程序后端开发踩坑之Django.md)

> 2021.10.20 

### [Jupyter Lab](./problem/jupyterlab.md)

> 2021.10.28

###  [Vim](./problem/vim.md)

> 2021.10,30

### [Android Studio: Could not install Gradle distribution](./problem/Android Studio.md#Could not install Gradle distribution)

> 2021.11.12

---

## [🎆](./其他.md)其他

### [INIT](./other/init.md)

> GithubPage 初始化页

###  [阿里云轻量服务器自定义服务](./other/阿里云轻量服务器自定义服务.md)

> 2021.10.04

---

## [🌌](http://blog.yzketx.online)WE DOo.

> Something Interesting

- [iSTEP 平台](http://istep.yzketx.online)  [iSTEP's Blog](https://blog.yzketx.online/iSTEP.github.io/)
- …

✨[README](README.md)

👾 [Test](./test.md)

<script>
  fetch('https://v1.hitokoto.cn')
    .then(response => response.json())
    .then(data => {
      const hitokoto = document.getElementById('hitokoto_text')
      hitokoto.href = 'https://hitokoto.cn/?uuid=' + data.uuid
      hitokoto.innerText = "「 " + data.hitokoto + " 」"
    })
    .catch(console.error)
</script>
