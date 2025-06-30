---
slug-title: til-plists
date: 2024-01-10
draft: false
title: 'TIL about launchd.plists'
subtitle: 'Running a background service on an Apple computer'
description: 'zvenyach.com | A TIL about running a background service on Apple computers'
images: ['/images/more_you_know.png']
categories: ['til']
tags: []
---

I created a Django app that runs on my computer. Most of the time, I don't really think about running it as a background service because it's not a production application. But I decided recently that I _actually wanted_ it to be a background service on my Apple computer. And even though I'm not sure this is the _right way_ to do it, I'm here to tell you it works!

First, you create a `.plist` file, let's call it `com.vdavez.app.service.plist`.

```xml
<?xml version="1.0" encoding="UTF-8"?>
 <!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
 <dict>
  <key>RunAtLoad</key>
  <true/>
  <key>KeepAlive</key>
  <true/>
  <key>Label</key>
  <string>Dave's Django App Agent</string>
  <key>ProgramArguments</key>
  <array>
   <string>/Users/vdavez/.local/bin/poetry</string>
   <string>run</string>
   <string>gunicorn</string>
   <string>myapp:app</string>
  </array>
  <key>WorkingDirectory</key>
  <string>/Users/vdavez/app</string>
 </dict>
</plist>
```

The key things to pay attention to here are the `ProgramArguments` and the `WorkingDirectory` tags. Within ProgramArguments are the script you want to run (taking care to have the first string be an absolute path). Then, WorkingDirectory is where you want the script to run.

I'm using poetry to manage the virtual environment, so it's just calling `poetry run gunicorn myapp:app` as if I were doing it in the appropriate directory.

Next, save this file in `~/Library/LaunchAgents`, and run `launchctl load com.vdavez.app.service.plist`. Now, it just works!

Hope someone finds this useful background material. 🥁
