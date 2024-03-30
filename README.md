# 1. How to create A simple quiz app
Hello, in this lesson, we would lear how to use HTML, CSS and Javascript to create a simple quiz app.

# 2. What we would learn in this lesson

- How to format code in **html**
- How to Style with **CSS**
- How to do simple calculations with **javascript** to determine participant score

# 3. Things you need to know before embarking on this project

1. You need to have basic knowledge of html and css
2. You need to have a moderate understanding of how javascript works
3. Familarize yourself with the following tags:
    - *label*
    - *span*
    - *id*
    - *class*
    - *button*
    - *name*
    - *input* (**radio**)

# Preview Image of App
**![Alternate text]** ![Image of App]
![Reference Image](.//Resources/image/desktop1.png)
*Picture1: Desktop view

![Reference Image](.//Resources/image/desktop2.png)
*Picture2: Desktop view

![Reference Image](.//Resources/image/desktop3.png)
*Picture3: Desktop view

![Reference Image](.//Resources/image/mobile1.png)
*Picture4: Mobile view

![Reference Image](.//Resources/image/mobile2.png)
*Picture5: Mobile view

![Reference Image](.//Resources/image/mobile3.png)
*Picture6: Mobile view

See below for preview of code.
```html
    <div id="cont1" class="container1">

        <div class="bubbles">
            <span style="--i:11"></span>
            <span style="--i:12"></span>
            <span style="--i:13"></span>
            <span style="--i:14"></span>
            <span style="--i:15"></span>
            <span style="--i:16"></span>
            <span style="--i:19"></span>
            <span style="--i:18"></span>
            <span style="--i:17"></span>
            <span style="--i:22"></span>
            <span style="--i:24"></span>
            <span style="--i:25"></span>
            <span style="--i:19"></span>
            <span style="--i:18"></span>
            <span style="--i:17"></span>
            <span style="--i:16"></span>
            <span style="--i:11"></span>
            <span style="--i:12"></span>
            <span style="--i:13"></span>
            <span style="--i:14"></span>
            <span style="--i:15"></span>
            <span style="--i:16"></span>
            <span style="--i:19"></span>
            <span style="--i:18"></span>
            <span style="--i:17"></span>
            <span style="--i:22"></span>
            <span style="--i:24"></span>
            <span style="--i:25"></span>
            <span style="--i:19"></span>
            <span style="--i:18"></span>
            <span style="--i:17"></span>
            <span style="--i:16"></span>


        </div>

        <div class="home1">
            <h2>Mid-Semester Quiz Challenge</h2><br>
            <h3>This is a multiple choice quiz</h3>
            <p>Time allowd is 15 Minutes !!!</p><br>
            <p>Fill in your details below and click the start button to begin</p>
        
            <form>
                <p>Please enter your full name</p>
                <input id="name11" type="text" placeholder="Input your name here"><br><br>
            </form>

            <div class="btns">
                <button class="btn1" onclick="myFunction()">Start</button>
            </div>
        </div>
    </div>

    <div id="cont2" style="display: none;" class="container2">
        <form name="quizForm">
            <ol>
                <li>Which property applies a color to text?</li>
            <input type="checkbox" name="q1" value="wrong">text-color <br>
            <input type="checkbox" name="q1" value="wrong">background-color <br>
            <input type="checkbox" name="q1" value="correct">color <br><br>
                
                <li>What does HTML stand for?</li>
            <input type="checkbox" name="q2" value="correct">Hyper Text Markup Language <br>
            <input type="checkbox" name="q2" value="wrong">Home Tool Markup Language <br>
            <input type="checkbox" name="q2" value="wrong">Hyperlinks and Text Markup Language <br><br>

                <li>Who is making the Web standards?</li>
            <input type="checkbox" name="q3" value="wrong">Mozilla <br>
            <input type="checkbox" name="q3" value="wrong">Microsoft <br>
            <input type="checkbox" name="q3" value="correct">The World Wide Web Consortium <br><br>

                <li>How do you make a list that lists its items with squares?</li>
            <input type="checkbox" name="q4" value="wrong">type: 2 <br>
            <input type="checkbox" name="q4" value="correct">list-style-type: square <br>
            <input type="checkbox" name="q4" value="wrong">type: square <br>
            <input type="checkbox" name="q4" value="wrong">list-type: square <br><br>

                <li>What does css stand for?</li>            
            <input type="checkbox" name="q5" value="wrong">Creative style sheets <br>
            <input type="checkbox" name="q5" value="wrong">Computer style &heets <br>
            <input type="checkbox" name="q5" value="correct">Cascading style &heets <br>
            <input type="checkbox" name="q5" value="wrong">Colorful style &heets <br><br>
            </ol>
        </form>

        <div class="btns">
            <button class="btn1" onclick="myFunction1()">Next</button>
        </div>
    </div>

    <div id="cont3" style="display: none;" class="container3">
        <form name="quizForm">
            <ol start="6">
                <li>Javascript is an _______ language?</li>
            <input type="checkbox" name="q6" value="correct">Object-Oriented <br>
            <input type="checkbox" name="q6" value="male">Object-Based <br>
            <input type="checkbox" name="q6" value="male">Procedural <br>
            <input type="checkbox" name="q6" value="male">None of the above <br><br>
                
                <li>Which of the following keywords is used to define a variable in Javascript?</li>
            <input type="checkbox" name="q7" value="male">var <br>
            <input type="checkbox" name="q7" value="male">let <br>
            <input type="checkbox" name="q7" value="correct">Both A and B <br>
            <input type="checkbox" name="q7" value="male">None of the above <br><br>

                <li>Which of the following methods is used to access HTML elements using Javascript?</li>
            <input type="checkbox" name="q8" value="male">getElementbyId() <br>
            <input type="checkbox" name="q8" value="male">getElementByClassName() <br>
            <input type="checkbox" name="q8" value="correct">Both A and B <br>
            <input type="checkbox" name="q8" value="male">None of the above <br><br>

                <li>Upon encountering empty statements, what does the Javascript Interpreter do?</li>
            <input type="checkbox" name="q9" value="male">Throws an error <br>
            <input type="checkbox" name="q9" value="correct">Ignores the statement <br>
            <input type="checkbox" name="q9" value="male">Gives a warning <br>
            <input type="checkbox" name="q9" value="male">None of the above <br><br>

                <li>Which of the following methods can be used to display data in some form using Javascript?</li>            
            <input type="checkbox" name="q10" value="male">document.write() <br>
            <input type="checkbox" name="q10" value="male">console.log() <br>
            <input type="checkbox" name="q10" value="male">window.alert() <br>
            <input type="checkbox" name="q10" value="correct">All of the above <br><br>
            </ol>
        </form>

        <div class="btns">
            <button class="btn1" onclick="previouss()">Previous</button>
            <button class="btn1" onclick="myFunction3()">Submit</button>
        </div>
    </div>

    <div id="cont4" style="display: none;" class="container5">
        <h1>Congratulations</h1><br>
        <span id="show" class="resp"></span><br><br>
        
        <div class="btns">
            <button class="btn1" onclick="myFunction4()">Done</button>
        </div>
    </div>


    <script src=".//project.js"></script>
```