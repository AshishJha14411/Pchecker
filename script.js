{/* <h3 class="SubHeading">Please Enter the values which needs to be checked for palindrome.</h3>
<textarea name="textArea" id="textArea" cols="40" rows="2" placeholder="Enter the values here"></textarea>
<p class="output"></p> */}

function palinCheck() {
    let inputComp = document.querySelector("#textArea")
    let inputData = inputComp.value
    let cleanedData = inputData.split(" ").join("")
    let reverseValue = cleanedData.split("").reverse().join("")
    console.log(reverseValue)
    console.log(cleanedData)
    if(cleanedData.length !== reverseValue.length){
        document.querySelector(".output").innerHTML = `The Word of ${inputData} is not Palindrome`
    }else if(cleanedData!==reverseValue){
        document.querySelector(".output").innerHTML = `The Word of ${inputData} is not Palindrome`
    }else if(cleanedData===reverseValue){
        document.querySelector(".output").innerHTML = `The Word of ${inputData} is palindrome`
    }
}

