---
title: 2023年终复盘
author: ajn404
pubDatetime: 2023-12-22 02:43:52
postSlug: 2023-12
featured: false
draft: false
tags:
  - end-of-2023
description: 2023年12月记录
---

<img src="/notes_astro3/assets/2023.jpg" class="mb-6 w-full rounded-lg shadow-lg dark:shadow-black/20" />

## 目录

## 申明

本页面只部署在本地哟，相应的 md 文件会指定 gitignore 规则

## 今年过的真快

相比于前三年的煎熬岁月，今年算是比较顺遂，相对快乐很多，所谓快乐的日子总是短暂的，当然也可能是年纪大了，对时间变得不敏感了。😮‍💨

## 关于工作

有以下几个方面的动作:

1.移动端项目的 workspace 优化，原来使用两个 gitlab 仓库，现在合并在一个仓库中，这样方面了后续的打包流程，也方便了后续的版本管理或者 code review。

2.移动端项目打包流程优化，一个是，原来是两个项目来回跑，现在合并在一个项目里，通过 bash 脚本实现一个命令就能打包 apk；另外可以通过 jenkins 点击进行打包，同 bash 脚本，写了不同环境的 jenkins job,这样即使是不懂项目的内部人员也可以快速进行打包

3.移动端基本的业务功能开发，这部分大头在一期的时候，包含样式改造，功能改造，需求开发，安全问题修复等等，忙麻了

4.pc 端功能开发，接触到了伟大的 bootstrap table 和 jquery 等始祖技术，以及使用:has(),:is()等选择器优化 web 样式，真是一场酣畅淋漓的新旧结合，史诗级混合

总结以上便是，巩固了 vue2+element+cordova 的技术栈，完成了基本的业务开发，并在此过程中，简单接触很多之前没接触的业务和功能，收获颇丰，对前端开发有了更深入的理解。

<section style="break-inside:avoid">
<h2>时间线</h2>
<ol class="border-l-2 border-info-100 list-none">
  <li>
    <div class="flex-start md:flex">
      <div
        class="-ml-[13px] flex h-[25px] w-[25px] items-center justify-center rounded-full bg-info-100 text-info-700">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="h-4 w-4">
          <path
            fill-rule="evenodd"
            d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
            clip-rule="evenodd" />
        </svg>
      </div>
      <div
        class="mb-10 ml-6 block max-w-full rounded-lg bg-neutral-50 p-6 shadow-md shadow-black/5 dark:bg-neutral-700 dark:shadow-black/10">
        <div class="mb-4 flex justify-between">
          <a
            href="#!"
            class="text-sm text-info transition duration-150 ease-in-out hover:text-info-600 focus:text-info-600 active:text-info-700"
            >基本业务开发</a
          >
          <a
            href="#!"
            class="text-sm text-info transition duration-150 ease-in-out hover:text-info-600 focus:text-info-600 active:text-info-700">
            2023-6之前</a
          >
        </div>
        <p class="mb-6 text-neutral-700 dark:text-neutral-200">
          这段时间是上一个项目的基本业务开发阶段，以及到下一个项目的过渡时期
        </p>
      </div>
    </div>
  </li>
  <li>
    <div class="flex-start md:flex">
      <div
        class="-ml-[13px] flex h-[25px] w-[25px] items-center justify-center rounded-full bg-info-100 text-info-700">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="h-4 w-4">
          <path
            fill-rule="evenodd"
            d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
            clip-rule="evenodd" />
        </svg>
      </div>
      <div
        class="mb-10 ml-6 block max-w-full rounded-lg bg-neutral-50 p-6 shadow-md shadow-black/5 dark:bg-neutral-700 dark:shadow-black/10">
        <div class="mb-4 flex justify-between">
          <a
            href="#!"
            class="text-sm text-info transition duration-150 ease-in-out hover:text-info-600 focus:text-info-600 active:text-info-700">
            一期</a>
          <a
            href="#!"
            class="text-sm text-info transition duration-150 ease-in-out hover:text-info-600 focus:text-info-600 active:text-info-700">
            2023-6=>2023-9</a>
        </div>
        <p class="mb-6 text-neutral-700 dark:text-neutral-200">
          移动端基本的业务功能开发，包含样式改造，功能改造，需求开发，安全问题修复等等，忙麻了
        </p>
      </div>
    </div>
  </li>
  <li>
    <div class="flex-start md:flex">
      <div
        class="-ml-[13px] flex h-[25px] w-[25px] items-center justify-center rounded-full bg-info-100 text-info-700">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="h-4 w-4">
          <path
            fill-rule="evenodd"
            d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
            clip-rule="evenodd" />
        </svg>
      </div>
      <div
        class="mb-10 ml-6 block max-w-full rounded-lg bg-neutral-50 p-6 shadow-md shadow-black/5 dark:bg-neutral-700 dark:shadow-black/10">
        <div class="mb-4 flex justify-between">
          <a
            href="#!"
            class="text-sm text-info transition duration-150 ease-in-out hover:text-info-600 focus:text-info-600 active:text-info-700">
           二期</a>
          <a
            href="#!"
            class="text-sm text-info transition duration-150 ease-in-out hover:text-info-600 focus:text-info-600 active:text-info-700">
            2023-9至今</a>
        </div>
        <p class="mb-6 text-neutral-700 dark:text-neutral-200">pc端功能开发，接触到了伟大的bootstrap table和jquery等始祖技术，以及使用:has(),:is()等选择器优化web样式，真是一场酣畅淋漓的新旧结合，史诗级混合</p>
      </div>
    </div>
  </li>
</ol>
</section>
<hr class="my-12 h-0.5 border-t-0 bg-skin-inverted opacity-100 dark:opacity-50" />

## 关于学习

今年学习可以从技术的纵向和横向发展来谈

### 纵向

前端职业的纵向发展，是关于**js,css,html 三剑客的深入**，**各种 sdk 的研究或方法论或设计模式**，以及细分领域的拓展

第一个是根基，没什么要说的，关于

#### 各种 sdk 的研究或方法论或设计模式

随着前端技术的复杂性增加，各种软件开发工具包（SDK）和库的出现使得前端开发更加高效和便捷。例如，React、Vue 和 Angular 等流行的前端框架都有自己的生态系统和最佳实践。
深入研究这些 SDK 的内部工作原理、设计模式和最佳实践帮助我更好地利用它们来解决实际问题，并为复杂的应用程序设计提供框架。

目前当然也只能是研究方法论，设计模式，看看使用了什么函数，原则，深入到引擎，编译器，范式，语言，我还不够资格，明年继续努力

#### 细分领域的拓展

前端开发不仅仅是 HTML、CSS 和 JavaScript 的组合，它还涉及到多个细分领域，如前端性能优化、安全性、访问性、移动开发、桌面应用程序开发等。

对于我来说，拓展这些细分领域的知识和技能可以使我在职业生涯中获得更多的机会和挑战，同时也可以提高我在团队中的价值和影响力。

但目前来看，学得还不够，明年继续努力

### 横向

今年黄玄的演讲让我认识到前端不只是我之前理解的前端，凡是有人机交互的地方就有前端，人工智能时代，对于前端的定义，与互联网时代，大为不同，具体怎么不同，其实我也不知道，但这值得思考，需要不停的探索，是技术的变革，抑或是需求的变革和拓展，所以横向的知识拓展，亦不能停

至于今年我在横向的认知，无非以下几点

1.语言：rust 2.博客：mdbook/astro/vuepress2 3.方向：webgl,webgpu,webrtc,webassembly,webagi 4.模版: nextjs-dashboard,rust-digital-garden,vue3-elementplus-template 5.其他: 工程化，写文，游戏，算法等等

<section style="break-inside:avoid">
<h2>时间线</h2>
<ol class="border-l-2 border-info-100 list-none">
  <li>
    <div class="flex-start md:flex">
      <div
        class="-ml-[13px] flex h-[25px] w-[25px] items-center justify-center rounded-full bg-info-100 text-info-700">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="h-4 w-4">
          <path
            fill-rule="evenodd"
            d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
            clip-rule="evenodd" />
        </svg>
      </div>
      <div
        class="mb-10 ml-6 block max-w-full rounded-lg bg-neutral-50 p-6 shadow-md shadow-black/5 dark:bg-neutral-700 dark:shadow-black/10">
        <div class="mb-4 flex justify-between">
          <a
            href="#!"
            class="text-sm text-info transition duration-150 ease-in-out hover:text-info-600 focus:text-info-600 active:text-info-700"
            >基本业务开发</a
          >
          <a
            href="#!"
            class="text-sm text-info transition duration-150 ease-in-out hover:text-info-600 focus:text-info-600 active:text-info-700">
            2023-6之前</a
          >
        </div>
        <p class="mb-6 text-neutral-700 dark:text-neutral-200">
          这段时间是上一个项目的基本业务开发阶段，以及到下一个项目的过渡时期
        </p>
      </div>
    </div>
  </li>
  <li>
    <div class="flex-start md:flex">
      <div
        class="-ml-[13px] flex h-[25px] w-[25px] items-center justify-center rounded-full bg-info-100 text-info-700">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="h-4 w-4">
          <path
            fill-rule="evenodd"
            d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
            clip-rule="evenodd" />
        </svg>
      </div>
      <div
        class="mb-10 ml-6 block max-w-full rounded-lg bg-neutral-50 p-6 shadow-md shadow-black/5 dark:bg-neutral-700 dark:shadow-black/10">
        <div class="mb-4 flex justify-between">
          <a
            href="#!"
            class="text-sm text-info transition duration-150 ease-in-out hover:text-info-600 focus:text-info-600 active:text-info-700">
            一期</a>
          <a
            href="#!"
            class="text-sm text-info transition duration-150 ease-in-out hover:text-info-600 focus:text-info-600 active:text-info-700">
            2023-6=>2023-9</a>
        </div>
        <p class="mb-6 text-neutral-700 dark:text-neutral-200">
          移动端基本的业务功能开发，包含样式改造，功能改造，需求开发，安全问题修复等等，忙麻了
        </p>
      </div>
    </div>
  </li>
  <li>
    <div class="flex-start md:flex">
      <div
        class="-ml-[13px] flex h-[25px] w-[25px] items-center justify-center rounded-full bg-info-100 text-info-700">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="h-4 w-4">
          <path
            fill-rule="evenodd"
            d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
            clip-rule="evenodd" />
        </svg>
      </div>
      <div
        class="mb-10 ml-6 block max-w-full rounded-lg bg-neutral-50 p-6 shadow-md shadow-black/5 dark:bg-neutral-700 dark:shadow-black/10">
        <div class="mb-4 flex justify-between">
          <a
            href="#!"
            class="text-sm text-info transition duration-150 ease-in-out hover:text-info-600 focus:text-info-600 active:text-info-700">
           二期</a>
          <a
            href="#!"
            class="text-sm text-info transition duration-150 ease-in-out hover:text-info-600 focus:text-info-600 active:text-info-700">
            2023-9至今</a>
        </div>
        <p class="mb-6 text-neutral-700 dark:text-neutral-200">pc端功能开发，接触到了伟大的bootstrap table和jquery等始祖技术，以及使用:has(),:is()等选择器优化web样式，真是一场酣畅淋漓的新旧结合，史诗级混合</p>
      </div>
    </div>
  </li>
</ol>
</section>
<hr class="my-12 h-0.5 border-t-0 bg-skin-inverted opacity-100 dark:opacity-50" />

## 链接

- [tailwindui](https://tailwindui.com/)

<div class=" flex items-center">
      <img src="/notes_astro3/assets/ajn404.jpeg" class="mr-2 mt-6 h-6 w-6 rounded-full" alt="avatar"
        loading="lazy" />
      <div>
        <span> Published <u>2023-12-22 12:22:22</u> by </span>
        <a href="#!" class="font-medium">ajn404</a>
      </div>
</div>
