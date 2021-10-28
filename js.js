function func1() {
    document.getElementById("code1").innerHTML = "<pre><code>&lt;!DOCTYPE html&gt;<p></p>&lt;html&gt;<p></p>&lt;head&gt;<p></p>    &lt;meta charset=&quot;utf-8&quot;&gt;<p></p>    &lt;title&gt;Підключення JS&lt;/title&gt;<p></p>    &lt;script&gt;<p></p>        // JavaScript-код<p></p>    &lt;/script&gt;<p></p>&lt;/head&gt;<p></p><br>&lt;body&gt;<p></p>    &lt;script&gt;<p></p>        // JavaScript-код<p></p>    &lt;/script&gt;<p></p>&lt;/body&gt;<p></p>&lt;/html&gt;</code></pre>"
}
function func2() {
    document.getElementById("code2").innerHTML = "<pre><code>&lt;!DOCTYPE html&gt;<p></p>&lt;html&gt;<p></p>&lt;head&gt;<p></p><br>&lt;script&gt;<p></p>    function myFunction() {<p></p>    document.getElementById(&quot;demo&quot;).innerHTML = &quot;Hello, visitor!&quot;;<p></p>}<p></p>&lt;/script&gt;<p></p><br>&lt;/head&gt;<p></p>&lt;body&gt;<p></p><br>&lt;p id=&quot;demo&quot;&gt;Hello, world!&lt;/p&gt;<p></p>&lt;button type=&quot;button&quot; onclick=&quot;myFunction()&quot;&gt;Натисни на мене!&lt;/button&gt;<p></p><br>&lt;/body&gt;<p></p>&lt;/html&gt;</code></pre>"
}
function func3() {
    document.getElementById("code3").innerHTML ="<pre><code>&lt;!doctype html&gt;<p></p>&lt;html&gt;<p></p>&lt;head&gt;<p></p>&lt;meta charset=&quot;utf-8&quot;&gt;<p></p>&lt;title&gt;Документ&lt;/title&gt;<p></p>&lt;script src=&quot;script.js&quot;&gt;&lt;/script&gt;<p></p>&lt;/head&gt;<p></p>&lt;body&gt;<p></p><br>&lt;/body&gt;<p></p>&lt;/html&gt;</code></pre>"
}
function func4() {
    document.getElementById("code4").innerHTML ="<pre><code>const num1 = 5;<p></p>const num2 = 3;<p></p><br>// додамо два числа<p></p>const sum = num1 + num2;<p></p><br>// відобразимо суму<p></p>console.log('The sum of ' + num1 + ' and ' + num2 + ' is: ' + sum);</code></pre>"
}
function func5() {
    document.getElementById("code5").innerHTML = "<pre><code>var price1 = 5;<p></p>var price2 = 6;<p></p>var total = price1 + price2;<p></p>console.log(total);</code></pre>"
}
function func6() {
    document.getElementById("code6").innerHTML = "<pre><code>let message;<p></p>message = 'Hello!';<p></p>console.log(message);<p></p>message = 'World!'; // значення змінено<p></p>console.log(message);</code></pre>"
}
function func7() {
    document.getElementById("code7").innerHTML = "<pre><code>const MY_FAV = 7;<p></p>MY_FAV = 20; // видасть помилку<p></p>console.log(&quot;Моє число: &quot; + MY_FAV); // відповідь: 7<p></p>const MY_FAV = 20; // спроба переназначити змінну - помилка</code></pre>"
}
function func8() {
    document.getElementById("code8").innerHTML = "<pre><code>let n = 123;<p></p>console.log(typeof(n));"
   }
function func9() {
    document.getElementById("code9").innerHTML = "<pre><code>// символ &quot;n&quot; в кінці означає, що це BigInt<p></p>const x = 1234567890123456789012345678901234567890n;<p></p>console.log(typeof(x));</code></pre>"
}
function func10() {
    document.getElementById("code10").innerHTML = "<pre><code>let name = &quot;Петро&quot;;<p></p>console.log(typeof(name));</code></pre>"
}
function func11() {
    document.getElementById("code11").innerHTML = "<pre><code>let x = true;<p></p>console.log(typeof(x));</code></pre>"
}
function func12() {
    document.getElementById("code12").innerHTML = "<pre><code>let x = null;<p></p>console.log(typeof(x));<p></p>//Це офіційно визнана помилка в typeof, ведуча початок з часів створення JavaScript і збережена для сумісності</code></pre>"
}
function func13() {
    document.getElementById("code13").innerHTML = "<pre><code>let x;<p></p>console.log(typeof(x));</code></pre>"
}
function func14() {
    document.getElementById("code14").innerHTML = "<pre><code>let user = {<p></p>    name: &quot;John&quot;,<p></p>    age: 30,<p></p>};<p></p>console.log(typeof(user));</code></pre>"
}
function func15() {
    document.getElementById("code15").innerHTML = "<pre><code>var sym = Symbol(&quot;foo&quot;);<p></p>console.log(typeof(sym));</code></pre>"
}

