document.addEventListener("DOMContentLoaded", () => {
    const backThisProject = document.getElementById("back-this-project");
    const modal = document.getElementById("modal");
    const iconCloseModal = document.getElementById("icon-close-modal");

// When the user clicks on Back this project button show the modal
    function showModal() {
        modal.style.display = "block"; 
    }

// When the user clicks on X close the modal
    function closeModal() {
        modal.style.display = "none";
    }

    backThisProject.addEventListener("click", showModal);
    iconCloseModal.addEventListener("click", closeModal);
             

// enter pledge

//show only pledge with no reward
    const radio0 = document.getElementById("radio-0");
    const pledgeWithNoReward = document.getElementById("enter-pledge-with-no-reward");
    const noRewardCard = document.getElementById("no-reward-card");

    function displayNoReward() {
        pledgeWithNoReward.style.display = "flex";
        noRewardCard.style.marginBottom = "0";
        noRewardCard.style.borderRadius = "8px 8px 0 0";
        enterPledgeBlackEdition.style.display = "none";
        enterPledgeBambooStand.style.display = "none";

        noRewardCard.style.border = "2px solid #3CB3AB";
        noRewardCard.style.borderBottom = "1px solid rgba(0, 0, 0, 0.15)";
        pledgeWithNoReward.style.border = "2px solid #3CB3AB";
        pledgeWithNoReward.style.borderTop = "0";

    if (enterPledgeBlackEdition.style.display) {
        blackEditionCard.style.border = "1px solid rgba(0, 0, 0, 0.15)";
        blackEditionCard.style.marginBottom = "24px";
        pledge75.style.fontWeight = "500";
    }

    if (enterPledgeBambooStand.style.display) {
        bambooStandCard.style.border = "1px solid rgba(0, 0, 0, 0.15)";
        bambooStandCard.style.marginBottom = "24px";
        pledge25.style.fontWeight = "500";
    }
}

    radio0.addEventListener("click", displayNoReward);

//show pledge only for Bamboo Stand
    const radio1 = document.getElementById("radio-1");
    const enterPledgeBambooStand = document.getElementById("enter-pledge-bamboo-stand");
    const bambooStandCard = document.getElementById("bamboo-stand-card");
    const pledge25 = document.getElementById("pledge-25");

    function displayBamboo() {
        enterPledgeBambooStand.style.display = "flex";
        bambooStandCard.style.marginBottom = "0";
        bambooStandCard.style.borderRadius = "8px 8px 0 0";
        enterPledgeBlackEdition.style.display = "none";
        pledgeWithNoReward.style.display = "none";
        pledge25.style.fontWeight = "700";

        bambooStandCard.style.border = "2px solid #3CB3AB";
        bambooStandCard.style.borderBottom = "1px solid rgba(0, 0, 0, 0.15)";
        enterPledgeBambooStand.style.border = "2px solid #3CB3AB";
        enterPledgeBambooStand.style.borderTop = "0";

        if (pledgeWithNoReward.style.display) {
              noRewardCard.style.border = "1px solid rgba(0, 0, 0, 0.15)";
              noRewardCard.style.marginBottom = "24px";
        }

        if (enterPledgeBlackEdition.style.display) {
          blackEditionCard.style.border = "1px solid rgba(0, 0, 0, 0.15)";
          blackEditionCard.style.marginBottom = "24px";
          pledge75.style.fontWeight = "500";
      }

    }
    
    radio1.addEventListener("click", displayBamboo);
    

//show pledge only for Black Edition Stand
    const radio2 = document.getElementById("radio-2");
    const enterPledgeBlackEdition = document.getElementById("enter-pledge-black-edition");
    const blackEditionCard = document.getElementById("black-edition-card");
    const pledge75 = document.getElementById("pledge-75");

    function displayBlackEdition() {
        enterPledgeBlackEdition.style.display = "flex";
        blackEditionCard.style.marginBottom = "0";
        blackEditionCard.style.borderRadius = "8px 8px 0 0";
        enterPledgeBambooStand.style.display = "none";
        pledgeWithNoReward.style.display = "none";
        pledge75.style.fontWeight = "700";

        blackEditionCard.style.border = "2px solid #3CB3AB";
        blackEditionCard.style.borderBottom = "1px solid rgba(0, 0, 0, 0.15)";
        enterPledgeBlackEdition.style.border = "2px solid #3CB3AB";
        enterPledgeBlackEdition.style.borderTop = "0";

        if (enterPledgeBambooStand.style.display) {
            bambooStandCard.style.border = "1px solid rgba(0, 0, 0, 0.15)";
            blackEditionCard.style.marginTop = "24px";
            pledge25.style.fontWeight = "500";
        }

        if (pledgeWithNoReward.style.display) {
            noRewardCard.style.border = "1px solid rgba(0, 0, 0, 0.15)";
            bambooStandCard.style.marginTop = "24px";
        }
        
    }

    radio2.addEventListener("click", displayBlackEdition);

//when user clicks on last radio button close all pledges
    const radio3 = document.getElementById("radio-3");

    function displayNone() {
        enterPledgeBambooStand.style.display = "none";
        enterPledgeBlackEdition.style.display = "none";
        pledgeWithNoReward.style.display = "none";

        if (enterPledgeBambooStand.style.display) {
            bambooStandCard.style.marginBottom = "24px";
            bambooStandCard.style.border = "1px solid rgba(0, 0, 0, 0.15)";
            pledge25.style.fontWeight = "500";
        }

        if (enterPledgeBlackEdition.style.display) {
          blackEditionCard.style.marginBottom = "24px";
          blackEditionCard.style.border = "1px solid rgba(0, 0, 0, 0.15)";
          pledge75.style.fontWeight = "500";
        }

        if (pledgeWithNoReward.style.display) {
            noRewardCard.style.marginBottom = "24px";
            noRewardCard.style.border = "1px solid rgba(0, 0, 0, 0.15)";
        }
    }

    radio3.addEventListener("click", displayNone);

// when user clicks on Select Reward button open modal and check matching radio
    const selectBamboo = document.getElementById("select-bamboo");

    function showModalAndCheckBamboo() {
        showModal();
        radio1.click();
    }

    selectBamboo.addEventListener("click", showModalAndCheckBamboo);

    const selectBlackEdition = document.getElementById("select-black-edition");

    function showModalAndCheckBlackEdition() {
        showModal();
        radio2.click();
    }

    selectBlackEdition.addEventListener("click", showModalAndCheckBlackEdition);

//show thanks modal on click Continue button
const btnContinue = document.querySelectorAll(".continue");
const modalThanks = document.getElementById("modal-thanks");
const btnGotIt = document.getElementById("got-it");

function showThanks() {
    modalThanks.style.display = "flex";
    modal.style.display = "none";
}

//close thanks modal on click Got it button
function closeThanksModal() {
    modalThanks.style.display = "none";
}

btnGotIt.addEventListener("click", closeThanksModal);

//bookmark
const bookmark = document.getElementById("bookmark");
const bigGrayButton = document.getElementById("big-gray-button");

function book() {
    bookmark.classList.add("bookmarked");
    bigGrayButton.classList.add("gray-button-value-color");
    bigGrayButton.innerHTML = "Bookmarked";
    bigGrayButton.style.marginLeft = "20px";
}

bookmark.addEventListener("click", book);
bigGrayButton.addEventListener("click", book);


// When the user clicks anywhere outside of the modals, close it
    window.onclick = function(event) {
        if (event.target == modal || event.target == modalThanks) {
        modal.style.display = "none";
        modalThanks.style.display = "none";
        }
    }

btnContinue[0].addEventListener("click", showThanks);
btnContinue[1].addEventListener("click", showThanks);
btnContinue[2].addEventListener("click", showThanks);

//progress bar
const greenScale = document.getElementById("green-scale");
const backedField = document.getElementById("backed");
const totalBackersField = document.getElementById("total-backers");

//bamboo stand result
function result1() {
    const bamboo = document.getElementById("bamboo-value").value;
    const bambooValue = parseFloat(bamboo);
    // const backedField = document.getElementById("backed");
    const backed = backedField.textContent;
    const substr = backed.substring(1);
    const str = substr.replace(/,/g,'');
    const backedValue = parseFloat(str);

    // const greenScale = document.getElementById("green-scale");

    let res = backedValue + bambooValue;
    if (res >= 100000) {
        res = 100000;
    }

    let result = res/1000;
    
//update green scale in %
    greenScale.style.width = result + "%";
    greenScale.style.maxWidth = "100%";

//add comma and $ to number and update backed field
    let comma = res.toLocaleString("en-US");
    let backedUpdate = "$" + comma;
    backedField.innerHTML = backedUpdate;

//total backers
    // const totalBackersField = document.getElementById("total-backers");
    const totalBackers = totalBackersField.textContent;
    const sub = totalBackers.replace(/,/g,'');
    const totalBackersValue = parseFloat(sub);

    let totalBackersIncrement = totalBackersValue + 1;

//add comma to number and update total backers field
   let totalBackersUpdate = totalBackersIncrement.toLocaleString("en-US");
   totalBackersField.innerHTML = totalBackersUpdate;

// decrease left numbers in home page and modal
    const bambooCounterField = document.getElementById("bamboo-counter");
    const bambooCounter = bambooCounterField.textContent;
    const leftCounter = parseFloat(bambooCounter);
    let leftCounterIncrement = leftCounter - 1;

    let leftCounterUpdate = leftCounterIncrement.toString();
    bambooCounterField.innerHTML = leftCounterUpdate;

    const modalBambooCounterField = document.getElementById("modal-bamboo-counter");
    const modalBambooCounter = modalBambooCounterField.textContent;
    const modalLeftCounter = parseFloat(modalBambooCounter);
    let modalLeftCounterIncrement = modalLeftCounter - 1;

    let modalLeftCounterUpdate = modalLeftCounterIncrement.toString();
    modalBambooCounterField.innerHTML = modalLeftCounterUpdate;
}

btnContinue[1].addEventListener("click", result1);

//black edition stand result
function result2() {
    const black = document.getElementById("black-edition-value").value;
    const blackValue = parseFloat(black);
    // const backedField = document.getElementById("backed");
    const backed = backedField.textContent;
    const substr = backed.substring(1);
    const str = substr.replace(/,/g,'');
    const backedValue = parseFloat(str);

    // const greenScale = document.getElementById("green-scale");

    let res = blackValue + backedValue;
    // console.log(res);

    if (res >= 100000) {
        res = 100000;
    }

    let result = res/1000;
    
//update green scale in %
    greenScale.style.width = result + "%";
    greenScale.style.maxWidth = "100%";

//add comma and $ to number and update backed field
    let comma = res.toLocaleString("en-US");
    let backedUpdate = "$" + comma;
    backedField.innerHTML = backedUpdate;

//total backers
    // const totalBackersField = document.getElementById("total-backers");
    const totalBackers = totalBackersField.textContent;
    const sub = totalBackers.replace(/,/g,'');
    const totalBackersValue = parseFloat(sub);

    let totalBackersIncrement = totalBackersValue + 1;

//add comma to number and update total backers field
   let totalBackersUpdate = totalBackersIncrement.toLocaleString("en-US");
   totalBackersField.innerHTML = totalBackersUpdate;

// decrease left numbers in home page and modal
   const blackCounterField = document.getElementById("black-counter");
   const blackCounter = blackCounterField.textContent;
   const leftCounter = parseFloat(blackCounter);
   let leftCounterIncrement = leftCounter - 1;

   let leftCounterUpdate = leftCounterIncrement.toString();
   blackCounterField.innerHTML = leftCounterUpdate;

   const modalBlackCounterField = document.getElementById("modal-black-counter");
   const modalBlackCounter = modalBlackCounterField.textContent;
   const modalLeftCounter = parseFloat(modalBlackCounter);
   let modalLeftCounterIncrement = modalLeftCounter - 1;

   let modalLeftCounterUpdate = modalLeftCounterIncrement.toString();
   modalBlackCounterField.innerHTML = modalLeftCounterUpdate;
}

btnContinue[2].addEventListener("click", result2);


//hamburger menu
const hamburger = document.getElementById("hamburger");
const burgerMenu = document.getElementById("burger-menu");

function showBurgerMenu() {

    if (hamburger.src.match("images/icon-hamburger.svg")) {
        hamburger.src = "images/icon-close-menu.svg";
        burgerMenu.style.display = "block";
    }
    else {
        hamburger.src = "images/icon-hamburger.svg";
        burgerMenu.style.display = "none";
    }
}        

// When the user clicks anywhere outside of the burger menu, close it
window.onclick = function(event) {

    if (event.target == burgerMenu) {
    burgerMenu.style.display = "none";
    hamburger.src = "images/icon-hamburger.svg";
    }
}

hamburger.addEventListener("click", showBurgerMenu);
});



                