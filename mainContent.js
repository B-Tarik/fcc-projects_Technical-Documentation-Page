import React from "react";

const Main = () => {
  
  return (
    <main role="main" id="main-doc">
      <section role="region" className="main-section" id="Introduction">
        <header role="banners"><h2 tabIndex="0">Introduction</h2></header>
        <article role="article">
          <p><strong>JavaScript</strong> is a cross-platform, object-oriented <strong>scripting language</strong>. It is a small and lightweight language. Inside a host environment (for example, a web browser), JavaScript can be connected to the objects of its environment to provide programmatic control over them.</p>

          <p>JavaScript contains a standard library of <strong>objects</strong>, such as Array, Date, and Math, and a core set of language elements such as operators, control structures, and statements. Core JavaScript can be extended for a variety of purposes by supplementing it with additional objects; for example:</p>

          <ul>
            <li><a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIsl" target="_blank">Client-side</a> JavaScript extends the core language by supplying objects to control a browser and its <a href="https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model" target="_blank">Document Object Model</a> (DOM). For example, client-side extensions allow an application to place elements on an HTML form and respond to user events such as mouse clicks, form input, and page navigation.</li>
            <li><a href="https://developer.mozilla.org/en-US/docs/Learn/Server-side" target="_blank">Server-side</a> JavaScript extends the core language by supplying objects relevant to running JavaScript on a server. For example, server-side extensions allow an application to communicate with a database, provide continuity of information from one invocation to another of the application, or perform file manipulations on a server.</li>
          </ul>
        </article>
      </section>
      <section role="region" className="main-section" id="What_you_should_already_know">
        <header role="banners"><h2 tabIndex="0">What you should already know</h2></header>
        <article role="article">
          <p>This guide assumes you have the following basic background:</p>
          <ul>
            <li>A general understanding of the Internet and the <a href="https://developer.mozilla.org/en-US/docs/Glossary/World_Wide_Web" target="_blank">World Wide Web</a> (WWW).</li>
            <li>Good working knowledge of <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank">HyperText Markup Language</a> (HTML).</li>
            <li>Some programming experience. If you are new to programming, try one of the tutorials linked on the main page about JavaScript.</li>
          </ul>
        </article>
      </section>
      <section role="region" className="main-section" id="JavaScript_and_Java">
        <header role="banners"><h2 tabIndex="0">JavaScript and Java</h2></header>
        <article role="article">
          <p>JavaScript and Java are similar in some ways but <strong>fundamentally different</strong> in some others. The JavaScript language resembles Java but does not have Java's static typing and strong type checking. JavaScript follows most Java expression syntax, naming conventions and basic control-flow constructs which was the reason why it was renamed from LiveScript to JavaScript.</p>

          <p>In contrast to Java's <strong>compile-time</strong> system of classes built by declarations, JavaScript supports a <strong>runtime system</strong> based on a small number of data types representing numeric, Boolean, and string values. JavaScript has a <a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes" target="_blank">prototype-based</a> object model instead of the more common <strong>class-based </strong>object model. The prototype-based model provides dynamic inheritance; that is, what is inherited can vary for individual objects. JavaScript also supports functions without any special declarative requirements. Functions can be properties of objects, executing as loosely typed methods.</p>
          <p>JavaScript is a very <strong>free-form</strong> language compared to Java. You do not have to declare all variables, classes, and methods. You do not have to be concerned with whether methods are <strong>public</strong>, <strong>private</strong>, or <strong>protected</strong>, and you do not have to implement interfaces. Variables, parameters, and function return types are not explicitly typed.</p>
        </article>
      </section>
      <section role="region" className="main-section" id="Hello_world">
        <header role="banners"><h2 tabIndex="0">Hello world</h2></header>
        <article role="article"> 
          <p>To get started with writing JavaScript, open the Scratchpad and write your first "Hello world" JavaScript code:</p>
          <code><span className="pink">function</span><span className="green"> greetMe</span><span className="gold">(</span><span className="orange">yourName</span><span className="gold">)</span><span className="gold"> {'{'}</span><br/>
            &nbsp;&nbsp;<span className="green">alert</span><span className="pink">(</span><span className="yellow">"Hello "</span> <span className="pink">+</span> <span className="white">yourName</span><span className="pink">)</span>;<br/>
            <span className="gold">}</span><br/>
            <span className="green">greetMe</span><span className="gold">(</span><span className="yellow">"World"</span><span className="gold">)</span>;
          </code>

          <p>Select the code in the pad and hit <i>Ctrl+R</i> to watch it unfold in your browser!</p>
        </article>
      </section>
      <section role="region" className="main-section" id="Variables">
        <header role="banners"><h2 tabIndex="0">Variables</h2></header>
        <article role="article">
          <p>
            You use variables as symbolic names for values in your application. The names of variables, called identifiers, conform to certain rules.
          </p>
          <p>
            A JavaScript identifier must start with a letter, underscore <span className="grayBg">_</span>, or dollar sign <span className="grayBg">$</span>; subsequent characters can also be digits <span className="grayBg">0-9</span>. Because JavaScript is case sensitive, letters include the characters "A" through "Z" (uppercase) and the characters "a" through "z" (lowercase).
          </p>
          <p>
            You can use ISO 8859-1 or Unicode letters such as å and ü in identifiers. You can also use the Unicode escape sequences as characters in identifiers.

            Some examples of legal names are Number_hits, temp99, and _name.
          </p>
        </article>

      </section>
      <section role="region" className="main-section" id="Declaring_variables">
        <header role="banners"><h2 tabIndex="0">Declaring variables</h2></header>
        <article role="article">
          <p>You can declare a variable in three ways:

            With the keyword var. For example, </p>
          <code><span className="pink">var</span> <span className="white">x</span> <span className="pink">=</span> <span className="purple">42.</span></code> 
          <p>This syntax can be used to declare both local and global variables.

            By simply assigning it a value. For example, </p>
          <code><span className="white">x</span> <span className="pink">=</span> <span className="purple">42.</span></code> 
          <p>This always declares a global variable. It generates a strict JavaScript warning. You shouldn't use this variant.


            With the keyword let. For example,</p>
          <code><span className="pink">let</span> <span className="white">y</span> <span className="pink">=</span> <span className="purple">13.</span></code>
          <p>This syntax can be used to declare a block scope local variable. See Variable scope below.
          </p>
        </article>
      </section>
      <section role="region" className="main-section" id="Variable_scope">
        <header role="banners"><h2 tabIndex="0">Variable scope</h2></header>
        <article role="article">
          <p> When you declare a variable outside of any function, it is called a <strong>global variable</strong>, because it is available to any other code in the current document. When you declare a variable within a function, it is called a local variable, because it is available only within that function.</p>

          <p>JavaScript before ECMAScript 2015 does not have block statement scope; rather, a variable declared within a block is local to the function (or global scope) that the block resides within. For example the following code will log 5, because the scope of x is the function (or global context) within which x is declared, not the block, which in this case is an if statement.</p>
          <code><span className="pink">if</span> <span className="gold">(</span><span className="purple">true</span><span className="gold">)</span> <span className="gold">{'{'}</span><br/>
            &nbsp;&nbsp;<span className="pink">var</span> <span className="white">x</span> <span className="pink">=</span> <span className="purple">5</span>;<br/>
            <span className="gold">}</span><br/>
            <span className="blue">console</span>.<span className="blue">log</span><span className="gold">(</span><span className="white">x</span><span className="gold">)</span>; <span className="gray">// 5</span></code>
          <p>This behavior changes, when using the let declaration introduced in ECMAScript 2015.</p>

          <code><span className="pink">if</span> <span className="gold">(</span><span className="purple">true</span><span className="gold">)</span> <span className="gold">{'{'}</span><br/>
            &nbsp;&nbsp;<span className="pink">let</span> <span className="white">y</span> <span className="pink">=</span> <span className="purple">5</span>;<br/>
            <span className="gold">}</span><br/>
            <span className="blue">console</span>.<span className="blue">log</span><span className="gold">(</span><span className="white">y</span><span className="gold">)</span>;  
            <span className="gray"> // ReferenceError: y is not defined</span></code>
        </article>
      </section>
      <section className="main-section" id="Global_variables">
        <header role="banners"><h2 tabIndex="0">Global variables</h2></header>
        <article role="article">
          <p>Global variables are in fact properties of the global object. In web pages the global object is <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window" target="_blank">window</a>, so you can set and access global variables using the window.variable syntax.</p>

          <p>Consequently, you can access global variables declared in one window or frame from another window or frame by specifying the window or frame name. For example, if a variable called phoneNumber is declared in a document, you can refer to this variable from an iframe as parent.phoneNumber.</p>
        </article>
      </section>
      <section role="region" className="main-section" id="Constants">
        <header role="banners"><h2 tabIndex="0">Constants</h2></header>
        <article role="article">
          <p>You can create a read-only, named constant with the const keyword. The syntax of a constant identifier is the same as for a variable identifier: it must start with a letter, underscore or dollar sign and can contain alphabetic, numeric, or underscore characters.</p>

          <code><span className="pink">const</span> <span className="white">PI</span> <span className="pink">=</span> <span className="purple">3.14</span>;</code>
          <p>A constant cannot change value through assignment or be re-declared while the script is running. It has to be initialized to a value.</p>

          <p>The scope rules for constants are the same as those for let block scope variables. If the const keyword is omitted, the identifier is assumed to represent a variable.</p>

          <p>You cannot declare a constant with the same name as a function or variable in the same scope. For example:</p>

          <code><span className="gray">// THIS WILL CAUSE AN ERROR</span><br/>
            <span className="pink">function</span> <span className="green">f</span><span className="gold">() {}</span>;<br/>
            <span className="pink">const</span> <span className="white">f</span> <span className="pink">=</span> <span className="purple">5</span>;<br/>
            <span className="gray">// THIS WILL CAUSE AN ERROR ALSO</span><br/>
            <span className="pink">function</span> <span className="green">f</span><span className="gold">() {'{'}</span><br/>
            &nbsp;&nbsp;<span className="pink">const</span> <span className="white">g</span> <span className="pink">=</span> <span className="purple">5</span>;<br/>
            &nbsp;&nbsp;<span className="pink">var</span> <span className="white">g</span>;<br/>
            <span className="gray"> //statements</span><br/>
            <span className="gold">}</span></code>
          <p>However, object attributes are not protected, so the following statement is executed without problems.</p>
          <code><span className="pink">const</span> <span className="white">MY_OBJECT</span> <span className="pink">=</span> <span className="gold">{'{'}</span><span className="yellow">"key"</span><span className="pink">:</span> <span className="yellow">"value"</span><span className="gold">}</span>;<br/>
            <span className="purple">MY_OBJECT</span>.key <span className="pink">=</span> <span className="yellow">"otherValue"</span>;</code>
        </article>
      </section>
      <section role="region" className="main-section" id="Data_types">
        <header role="banners"><h2 tabIndex="0">Data types</h2></header>
        <article role="article">
          <p>The latest ECMAScript standard defines seven data types:<br/>
            Six data types that are primitives:</p>
          <ul>
            <li><strong>Boolean</strong>. <strong>true</strong> and <strong>false</strong>.</li>
            <li><strong>null</strong>. A special keyword denoting a null value. Because JavaScript is case-sensitive, null is not the same as Null, NULL, or any other variant.</li>
            <li><strong>undefined</strong>. A top-level property whose value is undefined.</li>
            <li><strong>Number</strong>. 42 or 3.14159.</li>
            <li><strong>String</strong>. "Howdy"</li>
            <li><strong>Symbol</strong> (new in ECMAScript 2015). A data type whose instances are unique and immutable.</li>
            <li>and <strong>Object</strong></li></ul>
          <p>Although these data types are a relatively small amount, they enable you to perform useful functions with your applications. Objects and functions are the other fundamental elements in the language. You can think of objects as named containers for values, and functions as procedures that your application can perform.</p>
        </article>
      </section>
      <section role="region" className="main-section" id="if...else_statement">
        <header role="banners"><h2 tabIndex="0">if...else statement</h2></header>
        <article role="article">
          <p>Use the if statement to execute a statement if a logical condition is true. Use the optional else clause to execute a statement if the condition is false. An if statement looks as follows:</p>

          <code><span className="pink">if</span> <span className="gold">(</span><span className="white">condition</span><span className="gold">) {'{'}</span><br/>
            &nbsp;&nbsp;<span className="white">statement_1</span>;<br/>
            <span className="gold">}</span> <span className="pink">else</span> <span className="gold">{'{'}</span><br/>
            &nbsp;&nbsp;<span className="white">statement_2</span>;<br/>
            <span className="gold">}</span></code>
          <p>condition can be any expression that evaluates to true or false. See Boolean for an explanation of what evaluates to true and false. If condition evaluates to true, statement_1 is executed; otherwise, statement_2 is executed. statement_1 and statement_2 can be any statement, including further nested if statements.</p>
          <p>
            You may also compound the statements using else if to have multiple conditions tested in sequence, as follows:
          </p>
          <code><span className="pink">if</span> <span className="gold">(</span><span className="white">condition_1</span><span className="gold">) {'{'}</span><br/>
            &nbsp;&nbsp;<span className="white">statement_1</span>;<br/>
            <span className="gold">} </span><span className="pink">else if</span> <span className="gold">(</span><span className="white">condition_2</span><span className="gold">) {'{'}</span><br/>
            &nbsp;&nbsp;<span className="white">statement_2</span>;<br/>
            <span className="gold">} </span><span className="pink">else if</span> <span className="gold">(</span><span className="white">condition_n</span><span className="gold">) {'{'}</span><br/>
            &nbsp;&nbsp;<span className="white">statement_n</span>;<br/>
            <span className="gold">} </span><span className="pink">else</span> <span className="gold">{'{'}</span><br/>
            &nbsp;&nbsp;<span className="white">statement_last</span>;<br/>
            <span className="gold">} </span></code>
          <p>In the case of multiple conditions only the first logical condition which evaluates to true will be executed. To execute multiple statements, group them within a block statement <span className="grayBg">{'{'} ... }</span> . In general, it's good practice to always use block statements, especially when nesting if statements:</p>

          <code><span className="pink">if</span> <span className="gold">(</span><span className="white">condition</span><span className="gold">) {'{'}</span><br/>
            &nbsp;&nbsp;<span className="white">statement_1_runs_if_condition_is_true</span>;<br/>
            &nbsp;&nbsp;<span className="white">statement_2_runs_if_condition_is_true</span>;<br/>
            <span className="gold">}</span> <span className="pink">else</span> <span className="gold">{'{'}</span><br/>
            &nbsp;&nbsp;<span className="white">statement_3_runs_if_condition_is_false</span>;<br/>
            &nbsp;&nbsp;<span className="white">statement_4_runs_if_condition_is_false</span>;<br/>
            <span className="gold">}</span></code>
          <p>It is advisable to not use simple assignments in a conditional expression, because the assignment can be confused with equality when glancing over the code. For example, do not use the following code:</p>
          <code><span className="pink">if</span> <span className="gold">(</span><span className="white">x <span className="pink">=</span> y</span><span className="gold">) {'{'}</span><br/>
            &nbsp;&nbsp;<span className="gray">/* statements here */</span><br/>
            <span className="gold">}</span></code>
          <p>If you need to use an assignment in a conditional expression, a common practice is to put additional parentheses around the assignment. For example:</p>

          <code><span className="pink">if</span> <span className="gold">(</span><span className="pink">(</span><span className="white">x <span className="pink">=</span> y</span><span className="pink">)</span><span className="gold">)</span> <span className="gold">{'{'}</span><br/>
            &nbsp;&nbsp;<span className="gray">/* statements here */</span><br/>
            <span className="gold">}</span></code>
        </article>
      </section>
      <section role="region" className="main-section" id="while_statement">
        <header role="banners"><h2 tabIndex="0">while statement</h2></header>
        <article role="article">
          <p>A while statement executes its statements as long as a specified condition evaluates to true. A while statement looks as follows:</p>

          <code><span className="pink">while</span> <span className="gold">(</span><span className="white">condition</span><span className="gold">)</span><br/>
            &nbsp;&nbsp;<span className="white">statement</span></code>
          <p>If the condition becomes false, statement within the loop stops executing and control passes to the statement following the loop.</p>

          <p>The condition test occurs before statement in the loop is executed. If the condition returns true, statement is executed and the condition is tested again. If the condition returns false, execution stops and control is passed to the statement following while.</p>

          <p>To execute multiple statements, use a block statement <span className="grayBg">{'{'} ... }</span> to group those statements.</p>

          <p>Example:<br/>
            The following while loop iterates as long as n is less than three:</p>

          <code><span className="pink">var</span> <span className="white">n</span> <span className="pink">=</span> <span className="purple">0</span>;<br/>
            <span className="pink">var</span> <span className="white">x</span> <span className="pink">=</span> <span className="purple">0</span>;<br/>
            <span className="pink">while</span> <span className="gold">(</span><span className="white">n</span><span className="gold">) {'{'}</span><br/>
            &nbsp;&nbsp;<span className="white">n</span><span className="pink">++</span>;<br/>
            &nbsp;&nbsp;<span className="white">x</span> <span className="pink">+=</span> <span className="white">n</span>;<br/>
            <span className="gold">}</span></code>
          <p>With each iteration, the loop increments n and adds that value to x. Therefore, x and n take on the following values:</p>
          <ul>
            <li>After the first pass: n = 1 and x = 1</li>
            <li>After the second pass: n = 2 and x = 3</li>
            <li>After the third pass: n = 3 and x = 6</li>
          </ul>
          <p>After completing the third pass, the condition n &lt; 3 is no longer true, so the loop terminates.</p>
        </article>
      </section>
      <section role="region" className="main-section" id="Function_declarations">
        <header role="banners"><h2 tabIndex="0">Function declarations</h2></header>
        <article role="article"> 
          <p>A function definition (also called a function declaration, or function statement) consists of the function keyword, followed by:</p>
          <ul>
            <li>The name of the function.</li>
            <li>A list of arguments to the function, enclosed in parentheses and separated by commas.</li>
            <li>The JavaScript statements that define the function, enclosed in curly brackets, <span className="grayBg">{'{'} }</span>.</li>
          </ul>
          <p>For example, the following code defines a simple function named square:</p>

          <code><span className="pink">function</span> <span className="green">square</span><span className="gold">(</span><span className="orange">number</span><span className="gold">) {'{'}</span><br/>
            &nbsp;&nbsp;<span className="pink">return</span> <span className="white">number</span> <span className="pink">*</span> <span className="white">number</span>;<br/>
            <span className="gold">}</span></code>
          <p>The function square takes one argument, called number. The function consists of one statement that says to return the argument of the function (that is, number) multiplied by itself. The return statement specifies the value returned by the function.
          </p>
          <code><span className="pink">return</span> <span className="white">number</span> <span className="pink">*</span> <span className="white">number</span>;</code>
          <p>Primitive parameters (such as a number) are passed to functions by value; the value is passed to the function, but if the function changes the value of the parameter, this change is not reflected globally or in the calling function.</p>
        </article>
      </section>
      <section role="region" className="main-section" id="Reference">
        <header role="banners"><h2 tabIndex="0">Reference</h2></header>
        <article role="article">
          <p>
            All the documentation in this page is taken from <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide" target="_blank">MDN</a>

          </p>
        </article>
      </section>
    </main>
  )
}

export default Main;
