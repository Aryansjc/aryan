---
title: "Forking & Revamping Legion Linux Toolkit"
description: "Forked the Legion Linux Toolkit upstream and wired up native RGB drivers, power profiles, and BD PROCHOT controls."
pubDate: 2026-09-07
tags: ["linux", "python", "open-source"]
type: "log"
draft: false
---

Officially forked [armoox/Legion-Linux-Tookit](https://github.com/armoox/Legion-Linux-Tookit) to [Aryansjc/Legion-Linux-Tookit](https://github.com/Aryansjc/Legion-Linux-Tookit) and aligned the git history cleanly on top of
upstream.

Key updates added to the toolkit:
- **Native 4-zone ITE HID RGB driver**: Direct `/dev/hidraw` protocol implementation with custom color slots and effect profiles.
- **Power & Thermal Engine**: OS-level power profile coordination and CPU/GPU throttling mitigations.
- **BD PROCHOT Controls**: Added MSR status detection and disable toggles directly inside `legion-ctl`.
- **Test Suite**: Automated unit tests with headless PyQt6 test runs.

![Legion Linux Toolkit](/images/blog/legion-linux-toolkit.png)

Now tracked cleanly as an official fork with 0 commits behind upstream.

