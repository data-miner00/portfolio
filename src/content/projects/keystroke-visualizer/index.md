---
title: KeyLogger
description: A compact keystroke visualizer
date: Oct 8 2024
repoURL: https://github.com/data-miner00/KeyLogger
status: passive wip
---

A mini desktop widget that visualizes keystrokes on screen.

![A demonstration of the app](https://github.com/data-miner00/KeyLogger/raw/master/demo.gif)

## Motivation

During a knowledge sharing session with my colleague on the Vim text editor, I needed a tool that can visualize the keystrokes on the screen, but couldn't find a decent & secure tool at that time. Hence, I think why not just create one myself.

However, I didn't manage to complete it before the talk, and I used my Linux (Arch btw) to do the presentation with a visualizer available on the platform (I forgot what it's called!).

## Tech

- C#
- WPF
- .NET 10
- Windows API

## Feature

- Visualize keystrokes including escape, enter, and meta keys
- <kbd>Ctrl</kbd> + <kbd>P</kbd> to pause
- Draggable interface

## Learnings

This is my first time working with the Windows API. I had to do a lot of research on how it is being used in the C# context and thankfully there are some projects available for my reference.

It is also my first time working with WPF and I realised there was a memory leak and panicked. After some research about best practice, I am able to pinpoint that the way I mutate the `Text` property of the `TextBox` component is causing the leak. I've [fixed it in this commit](https://github.com/data-miner00/KeyLogger/commit/91514764041c7aa78b9aebba09f86d5a6224ed1a) to use property event binding instead.

I learned to apply IoC container using Autofac. Because the nature of the app, it actually got flagged by Windows Defender as malicious multiple times.

## Future Development

Here are a few features that I think will be incredible to implement

- Theme (dark/light mode)
- Track mouse click
- Track num/caps lock

I've also found that there is this new project called [keyviz](https://github.com/mulaRahul/keyviz) that is fully-featured and works on Windows that I can refer to for future implementation.
