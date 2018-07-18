---
title: 'Eclipse Install error : eclipse JVM terminated. Exit code=13'
author: Ravi
type: post
canonicalURL:  posts/2011-07-03-eclipse-install-error-eclipse-jvm-terminated-exit-code13.html
date: 2011-07-03T15:28:56+00:00
url: /eclipse-install-error-eclipse-jvm-terminated-exit-code13/
dsq_thread_id:
  - 4665544165
categories:
  - Blog

---
I have this bad habit of giving up on ubuntu and removing it after it breaks , but then I miss the command line and install it again , due to which I have it set up my tool over and over again. One of the most important tools is eclipse which I need for Android development. Usually I follow the right steps and get eclipse up and running without any issue , but twice I have come across this error

> _eclipse JVM terminated. Exit code=13_

This occurs when something is wrong with your java setup. Here are 4 possible problems and their solutions:<!--more-->

1. Java is not installed : Hey we are human , we may have forgotten the first rule of running eclipse which states you need java. This issue wont probably show up on ubuntu as it come with openJDK installed. To solve this problem we need to install Java , here is how :

<p style="padding-left: 30px;">
  Open your Terminal and run the following commands
</p>

> <pre style="padding-left: 30px;"><em><code>$ sudo add-apt-repository "deb http://archive.canonical.com/ lucid partner"
$ sudo apt-get update
$ sudo apt-get install sun-java6-jdk</code></em></pre>

<pre style="padding-left: 30px;"><code>
</code></pre>

<pre style="padding-left: 30px;"><code>You may want to install jre too , here is the command for that
</code></pre>

> <pre style="padding-left: 30px;"><em><code>$ sudo apt-get install sun-java6-jre</code></em></pre>

<p style="padding-left: 30px;">
  On windows just download the java setup from this link : <a href="http://www.oracle.com/technetwork/java/javase/downloads/index.html">http://goo.gl/iIxCL</a>
</p>

<p style="padding-left: 30px;">
  Now if all goes well and your stars are aligned , eclipse will start up and you can get back to work , else you need to try the next step
</p>

2. So you installed java but did we set up the PATH variables so that our OS knows where java is? Now before that we need to check if already is setup correctly , for that we just need to run the command _java_ in a terminal , if setup correctly you will see a bunch of help commands related to java , else you will see a command not found error , in which case you need to set the the variables for eclipse to work , here are some links to help you with it : Windows : http://goo.gl/Z61Cj , Linux : http://goo.gl/dJpjR . Try running eclipse now.

3. So you installed java , we know java is running using step 2 , and you are still getting the same error? (This step is only for Linux users) . Now lets do some diagnostics , lets check if you have multiple version of java installed  , this can occur if you forgot to uninstall openJDK while installing Sun-Java. To check if you have multiple version installed run this command :

> <p style="padding-left: 30px;">
>   <em>update-alternatives &#8211;config java</em>
> </p>

<p style="padding-left: 30px;">
  If you do have multiple versions , you can use the command above to set Sun-Java as your default java or if you are like me , outright remove openJDK using the following command:
</p>

> <p style="padding-left: 30px;">
>   <em>sudo apt-get remove openjdk-6-jdk</em>
> </p>

<p style="padding-left: 30px;">
  Try running eclipse now.
</p>

4. Now for the last check in my check list , make sure you are running the correct and similar version of java and eclipse , don&#8217;t try to run the 32bit version of Java with 64bit version of eclipse or vice versa.  TO check the version of java installed use this command :

> <pre style="padding-left: 30px;"><code>java -d64 -version</code></pre>

If you are running a 64bit version of java you get some java info , else you get an error.

Now if your eclipse is still not running you need to contact an expert :-). Hope this long and at times confusing post help you . Logging off