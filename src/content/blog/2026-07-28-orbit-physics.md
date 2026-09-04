---
title: "orbit: fixed physics stepping — stable 60fps"
description: "Decoupled the sim tick from the render loop. Bodies no longer tunnel."
pubDate: 2026-07-28
tags: ["webgl"]
type: "log"
draft: false
---

Decoupled the sim tick from the render loop (fixed timestep, interpolated draws). Bodies no longer tunnel through each other when the frame rate dips.
