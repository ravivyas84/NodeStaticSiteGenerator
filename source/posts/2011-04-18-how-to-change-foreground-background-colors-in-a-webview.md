---
title: 'How to change foreground & background colors in a webview for Android.'
author: Ravi
type: post
canonicalURL:  posts/2011-04-18-how-to-change-foreground-background-colors-in-a-webview.html
date: 2011-04-18T14:09:10+00:00
url: /how-to-change-foreground-background-colors-in-a-webview/
short-url:
  - http://bit.ly/hs5nNS
dsq_thread_id:
  - 4665542784
categories:
  - Android
  - Blog
  - Development
tags:
  - '#anddev'
  - android
  - android development
  - color
  - webview

---
At times we need to change the font or background color of the webview to make it more readable or to conform to a design of your app. This post will show how simple it can be to almost always achieve the result. <!--more-->The latter is more simple as webview provides an API :

<div class="wp_syntax">
  <table>
    <tr>
      <td class="code">
        <pre class="java" style="font-family:monospace;">setBackgroundColor <span style="color: #009900;">&#40;</span><span style="color: #000066; font-weight: bold;">int</span> color<span style="color: #009900;">&#41;</span></pre>
      </td>
    </tr>
  </table>
</div>

What one must note is if the HTML contains a value for the background it will override the color we set. The same is true for the foreground color too.

For the foreground color we make use of CSS to set the color and add it to the content we want to display in a div element wrapping the html we need to display. Here is the sample code

<div class="wp_syntax">
  <table>
    <tr>
      <td class="code">
        <pre class="java" style="font-family:monospace;"><span style="color: #000000; font-weight: bold;">private</span> <span style="color: #000000; font-weight: bold;">final</span> <span style="color: #003399;">String</span> htmlbegin <span style="color: #339933;">=</span> <span style="color: #0000ff;">"
&lt;div style="</span>\<span style="color: #339933;">&</span>quot<span style="color: #339933;">;</span>color<span style="color: #339933;">:</span> #FFFFFF<span style="color: #339933;">;</span><span style="color: #0000ff;">"&gt;"</span><span style="color: #339933;">;</span>
<span style="color: #000000; font-weight: bold;">private</span> <span style="color: #000000; font-weight: bold;">final</span> <span style="color: #003399;">String</span> htmlend <span style="color: #339933;">=</span> <span style="color: #0000ff;">"&lt;/div&gt;
"</span><span style="color: #339933;">;</span>
<span style="color: #000000; font-weight: bold;">private</span> <span style="color: #000000; font-weight: bold;">final</span> <span style="color: #003399;">String</span> htmlBody <span style="color: #339933;">=</span> <span style="color: #0000ff;">"
&nbsp;
Summary
&nbsp;
"</span>
	<span style="color: #339933;">+</span> <span style="color: #0000ff;">"
&nbsp;
Strong text Somemore text"</span>
	<span style="color: #339933;">+</span> <span style="color: #0000ff;">"and the final line
&nbsp;
"</span><span style="color: #339933;">;</span>
WebView body<span style="color: #339933;">;</span>
&nbsp;
@Override
<span style="color: #000000; font-weight: bold;">public</span> <span style="color: #000066; font-weight: bold;">void</span> onCreate<span style="color: #009900;">&#40;</span>Bundle savedInstanceState<span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span>
	<span style="color: #000000; font-weight: bold;">super</span>.<span style="color: #006633;">onCreate</span><span style="color: #009900;">&#40;</span>savedInstanceState<span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
	setContentView<span style="color: #009900;">&#40;</span>R.<span style="color: #006633;">layout</span>.<span style="color: #006633;">main</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
&nbsp;
	body <span style="color: #339933;">=</span> <span style="color: #009900;">&#40;</span>WebView<span style="color: #009900;">&#41;</span> findViewById<span style="color: #009900;">&#40;</span>R.<span style="color: #006633;">id</span>.<span style="color: #006633;">message_body</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
	body.<span style="color: #006633;">setBackgroundColor</span><span style="color: #009900;">&#40;</span><span style="color: #cc66cc;"></span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
&nbsp;
	<span style="color: #666666; font-style: italic;">// body.setDef</span>
	body.<span style="color: #006633;">loadDataWithBaseURL</span><span style="color: #009900;">&#40;</span><span style="color: #0000ff;">""</span>, htmlbegin <span style="color: #339933;">+</span> htmlBody <span style="color: #339933;">+</span> htmlend,
		<span style="color: #0000ff;">"text/html"</span>, <span style="color: #0000ff;">"utf-8"</span>, <span style="color: #0000ff;">""</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
<span style="color: #009900;">&#125;</span></pre>
      </td>
    </tr>
  </table>
</div>

As I stated before any css inside the html will override our css settings.