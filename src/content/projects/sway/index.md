---
title: Sway
description: Experimental e-Commerce Platform written in T-SQL
date: Sep 18 2024
repoURL: https://github.com/data-miner00/Sway
status: passive wip
---

An experimental e-commerce platform written in C# and TSQL. This project is for education purpose only as I intentionally shift as much logics to the database as possible.

## Motivation

I am amazed by what SQL Server is able to handle, from data to stored procedures, it seems like the whole ecosystem as a whole. Asides, I am also trying to learn SQL Server in depth so I decide to try out what it is capable of.

## Tech

The technologies and tools used within this project.

- C#
- T-SQL/SQL Server
- ASP.NET Core MVC
- TailwindCSS/DaisyUI
- jQuery
- Azure Pipelines CI

## Features

- Regular CRUD operations for entities
- MVC Portal

## Design

The architecture currently is very simple. It is just a MVC app calling to the SQL Server database to manage the data. The coding principle here is, shift as much logic to the database using stored procedure, views, triggers, functions, and other SQL Server offerings.

## Learnings

Having strict data integrity is good, but it restricts us from catering other feature that needed some leeway. I also wrote a Data generator with Bogus to seed the database or output as SQL script.

## Future Development

Here are a few features that I think will be incredible to implement

- REST API server
- Add SvelteKit frontend for SPA experience
- Add OAuth/OIDC authentication
- Use Grafana for telemetry tracking
- Use Grafana Loki for log sinks
- Integrate with RabbitMQ for asynchronous processing
- GraphQL server to save bandwidth
- Use Table Hint for optimizing locks
