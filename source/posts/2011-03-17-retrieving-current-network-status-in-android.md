---
title: Retrieving Current Network Status in Android
author: Ravi
type: post
date: 2011-03-17T16:43:16+00:00
url: /retrieving-current-network-status-in-android/
short-url:
  - http://j.mp/f3nUCN
dsq_thread_id:
  - 4665542881
categories:
  - Android
  - Development

---
Here is a quick snippet of code which will help us in getting the current status of an Android device&#8217;s data connection.  We make use of the **_<a title="ConnectivityManager" href="http://developer.android.com/reference/android/net/ConnectivityManager.html" target="_blank">ConnectivityManager</a>_** class to get current active network information. We try to catch a NullPointerException which is thrown by the isConnected method when there is no active data connection.

<!--more-->

<div class="wp_syntax">
  <table>
    <tr>
      <td class="code">
        <pre class="java" style="font-family:monospace;"><span style="color: #008000; font-style: italic; font-weight: bold;">/**
 * Returns availability of a data connection
 * @param mContext
 *            Context of app
 * @return True is data connection is available , false otherwise
 */</span>
<span style="color: #000000; font-weight: bold;">public</span> <span style="color: #000000; font-weight: bold;">static</span> <span style="color: #000066; font-weight: bold;">boolean</span> isDataConnectionOn<span style="color: #009900;">&#40;</span><span style="color: #003399;">Context</span> mContext<span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span>
	ConnectivityManager connectionManager <span style="color: #339933;">=</span> <span style="color: #009900;">&#40;</span>ConnectivityManager<span style="color: #009900;">&#41;</span> mContext
			.<span style="color: #006633;">getSystemService</span><span style="color: #009900;">&#40;</span><span style="color: #003399;">Context</span>.<span style="color: #006633;">CONNECTIVITY_SERVICE</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
	<span style="color: #000000; font-weight: bold;">try</span> <span style="color: #009900;">&#123;</span>
		<span style="color: #000000; font-weight: bold;">if</span> <span style="color: #009900;">&#40;</span>connectionManager.<span style="color: #006633;">getActiveNetworkInfo</span><span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span>.<span style="color: #006633;">isConnected</span><span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span><span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span>
			Log.<span style="color: #006633;">d</span><span style="color: #009900;">&#40;</span><span style="color: #0000ff;">"ConStatus"</span>, <span style="color: #0000ff;">"Data Connection On"</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
			<span style="color: #000000; font-weight: bold;">return</span> <span style="color: #000066; font-weight: bold;">true</span><span style="color: #339933;">;</span>
		<span style="color: #009900;">&#125;</span> <span style="color: #000000; font-weight: bold;">else</span> <span style="color: #009900;">&#123;</span>
			Log.<span style="color: #006633;">d</span><span style="color: #009900;">&#40;</span><span style="color: #0000ff;">"ConStatus"</span>, <span style="color: #0000ff;">"Data Connection off"</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
			<span style="color: #000000; font-weight: bold;">return</span> <span style="color: #000066; font-weight: bold;">false</span><span style="color: #339933;">;</span>
		<span style="color: #009900;">&#125;</span>
	<span style="color: #009900;">&#125;</span> <span style="color: #000000; font-weight: bold;">catch</span> <span style="color: #009900;">&#40;</span><span style="color: #003399;">NullPointerException</span> e<span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span>
		<span style="color: #666666; font-style: italic;">// No Active Connection</span>
		Log.<span style="color: #006633;">d</span><span style="color: #009900;">&#40;</span><span style="color: #0000ff;">"ConStatus"</span>, <span style="color: #0000ff;">"No Active Connection"</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
		<span style="color: #000000; font-weight: bold;">return</span> <span style="color: #000066; font-weight: bold;">false</span><span style="color: #339933;">;</span>
	<span style="color: #009900;">&#125;</span>
<span style="color: #009900;">&#125;</span></pre>
      </td>
    </tr>
  </table>
</div>

<p lang="java">
  Please let me know if I am doing something incorrectly here.
</p>