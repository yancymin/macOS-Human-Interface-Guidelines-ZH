---
title: 加载
---

# 加载
人们想要的是一个能够对其命令起作用并且能显示出处理所需时间的应用程序。如果你的应用显示空白或静态的内容但没有提供反馈，这样可能会认为你的应用已经无响应冻结。

![loading](https://developer.apple.com/design/human-interface-guidelines/macos/images/loading.png)

### 提供用户交互的即时确认
用户希望每次与你的应用交互时都会收到反馈。例如在整个系统中，按钮在单击时可见地响应，和指针在屏幕上移动到不同控件和区域时会发生变化。你的应用为用户的交互提供反馈的速度越快，它的响应速度就越快。

### 帮助人们衡量一个程序进程需要多长时间才能完成
用户并不总是需要确切知道任务需要多长时间，但重要的是给他们一个预计。至少，显示一个活动微调器，表示正在发生的事情。理想情况下，显示明确的进度指示器和补充描述性文本。例如，访达将进度条与说明文本组合在一起，以显示复制操作需要多长时间完成。

### 尽快的显示内容
如果你让人们在看到结果之前等待内容加载，他们可能会将缺乏内容显示解释为缓慢。相反，在内容还不可用时显示占位文本，图形或动画，并在内容加载时替换掉这些元素。尽可能在后台预加载即将发布的内容，例如在播放动画或正在进行用户交互的时候。

有关其他指导，请参阅[进度指示器](https://developer.apple.com/design/human-interface-guidelines/macos/indicators/progress-indicators/)和[提供用户反馈](https://developer.apple.com/design/human-interface-guidelines/macos/user-interaction/providing-user-feedback/)。