---
title: "Announcing {heddlr}, now on CRAN!"
path: "/2020/01/heddlr-release"
tags: ["R", "R Packages", "R Markdown"]
featuredImage: "./heddlr-badge.png"
date: '2019-01-23'
updated: '2019-01-23'
excerpt: "Write less boilerplate, get more done."
---


My first package just got published to CRAN today! `heddlr` is a set of tools 
that make it easier to write modular R Markdown documents by decomposing them 
into a set of patterns which can be repeated and combined based on your input 
data, letting you dynamically add and remove sections based on your data. I 
started this package to solve an issue I found myself running into when 
building [flexdashboards](https://rmarkdown.rstudio.com/flexdashboard/), and 
have since found out that there's all sorts of cool tricks you can do by 
applying this type of functional programming mindset to R Markdown documents.

You can find out more on heddlr's [documentation website](https://mikemahoney218.github.io/heddlr/),
proudly made in R via [pkgdown](https://pkgdown.r-lib.org/). This first version 
on CRAN is 0.5.0, with 0.1 -> 0.4 previously released on [GitHub](https://github.com/mikemahoney218/heddlr).
