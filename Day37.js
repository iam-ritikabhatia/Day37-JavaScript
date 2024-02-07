<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Finding Log, using a custom base</title>
  </head>
  <body>
    <h2>
      We are using html file because node.js does not support prompt() function,
      prompt() function is used to get the input from the user
    </h2>

    <h3><b>Finding Log, using a custom base</b></h3>

    <h4>
      <b
        >We know that in JavaScript <mark>Math.log()</mark> method is only
        calculate the <mark>natural log</mark>, means the base is fixed which is
        <mark>e(approx 2.718)</mark></b
      >
    </h4>

    <h5>Here we are using a different approch</h5>

    <img src="CustomLog.webp" alt="" style="width: auto; max-width: 600px;">

    <div class="container">
      <input type="text" placeholder="Enter the value" id="Value" />
      <input type="text" placeholder="Enter the base" id="Base" />

      <h2 id="ans"></h2>
      <button onclick="calculate()">Calculate the Log</button>
    </div>

    <script>
      const calculate = function () {
        const x = document.getElementById("Value").value;
        const b = document.getElementById("Base").value;
        const answer = document.getElementById("ans");

        if (x > 0 & b > 0 & b != 1) {
          const lgx = Math.log(x);
          const lgb = Math.log(b);
          const lgcustom = lgx / lgb;

          answer.innerHTML = `The answer is ${lgcustom}`;
        } else {
            return alert("Value must be > 0, Base is not equal to 1, base is greater than 0");
        }
      };
    </script>
  </body>
</html>


