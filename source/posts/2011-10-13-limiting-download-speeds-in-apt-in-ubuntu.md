---
title: Limiting download speeds in Apt in Ubuntu
author: Ravi
type: post
canonicalURL:  posts/2011-10-13-limiting-download-speeds-in-apt-in-ubuntu.html
date: 2011-10-13T10:14:33+00:00
url: /limiting-download-speeds-in-apt-in-ubuntu/
short-url:
  - http://j.mp/mQc1cn
dsq_thread_id:
  - 4971572432
categories:
  - Ubuntu

---
<p style="text-align: justify;">
  While trying to download some software on Ubuntu at work I thought I needed to limit the speed apt downloads files so that I don&#8217;t eat my peers bandwidth. So I started searching around using Google (of course) and came across various thread which suggested using trickle and wondersharper for usermode bandwidth shaping. But then I hit upon this brilliant post which showed how you can setup apt-get to download speed as a configuration. Here is what you need to do.
</p>

<p style="text-align: justify;">
  Create a file named 76download in /etc/apt/apt.conf.d/ and add this to it :
</p>

> <pre>Acquire</pre>
> 
> <pre>{
  Queue-mode "access";
  http
  {
    Dl-Limit "65";
  };
};</pre>

<pre>The <em>Dl-Limit</em> value specifies your download speed in kbps.</pre>

<pre>Try it out :-)</pre>

<pre>Original source with some more info : <a href="http://linux.derkeiler.com/Mailing-Lists/Debian/2008-02/msg01872.html">http://linux.derkeiler.com/Mailing-Lists/Debian/2008-02/msg01872.html</a></pre>