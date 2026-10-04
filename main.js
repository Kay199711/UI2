/* =========================
   QUESTIONNAIRE
========================= */

const questionnaireForm =
    document.getElementById("questionnaireForm");

if (questionnaireForm) {

    questionnaireForm.addEventListener("submit", function(event) {

        event.preventDefault();


        // Get the user's answers

        const answer1 =
            document.querySelector(
                'input[name="question1"]:checked'
            ).value;

        const answer2 =
            document.querySelector(
                'input[name="question2"]:checked'
            ).value;

        const answer3 =
            document.querySelector(
                'input[name="question3"]:checked'
            ).value;


        // Count the answers

        let scores = {
            modern: 0,
            art: 0,
            graphic: 0,
            objects: 0
        };


        scores[answer1]++;
        scores[answer2]++;
        scores[answer3]++;


        // Find the highest score

        let recommendation = "modern";
        let highest = scores.modern;


        if (scores.art > highest) {

            recommendation = "art";
            highest = scores.art;

        }


        if (scores.graphic > highest) {

            recommendation = "graphic";
            highest = scores.graphic;

        }


        if (scores.objects > highest) {

            recommendation = "objects";
            highest = scores.objects;

        }


        // Save the result

        localStorage.setItem(
            "wolfsonianRecommendation",
            recommendation
        );


        // Go to recommendation page

        window.location.href =
            "recommendation.html";

    });

}


/* =========================
   RECOMMENDATION
========================= */

const recommendationTitle =
    document.getElementById("recommendationTitle");


if (recommendationTitle) {

    const result =
        localStorage.getItem(
            "wolfsonianRecommendation"
        );


    const title =
        document.getElementById(
            "recommendationTitle"
        );

    const text =
        document.getElementById(
            "recommendationText"
        );

    const symbol =
        document.getElementById(
            "recommendationSymbol"
        );


    if (result === "modern") {

        title.textContent =
            "Modern Design & Architecture";

        text.textContent =
            "You may enjoy exhibits that focus on modern design, geometric shapes, architecture, and clean visual styles.";

        symbol.textContent = "◇";

    }

    else if (result === "art") {

        title.textContent =
            "Art & Decorative Design";

        text.textContent =
            "You may enjoy creative exhibits with decorative objects, patterns, artistic details, and craftsmanship.";

        symbol.textContent = "★";

    }

    else if (result === "graphic") {

        title.textContent =
            "Posters & Visual Stories";

        text.textContent =
            "You may enjoy exhibits that use posters, graphics, images, and visual storytelling.";

        symbol.textContent = "▣";

    }

    else if (result === "objects") {

        title.textContent =
            "Objects & Innovation";

        text.textContent =
            "You may enjoy exhibits that explore everyday objects, inventions, technology, and functional design.";

        symbol.textContent = "⚙";

    }

}


/* =========================
   TICKET CHECKOUT
========================= */

const ticketType =
    document.getElementById("ticketType");

const totalPrice =
    document.getElementById("totalPrice");


if (ticketType && totalPrice) {

    const prices = {

        adult: 12,

        senior: 8,

        student: 8,

        child: 8,

        member: 0,

        florida: 0,

        military: 0,

        friday: 0

    };


    ticketType.addEventListener(
        "change",
        function() {

            const selected =
                ticketType.value;

            const price =
                prices[selected];

            totalPrice.textContent =
                "$" + price.toFixed(2);

        }
    );

}


/* =========================
   PAYMENT
========================= */

const paymentForm =
    document.getElementById("paymentForm");

const successMessage =
    document.getElementById("successMessage");


if (paymentForm && successMessage) {

    paymentForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            // Hide the form

            paymentForm.style.display =
                "none";


            // Show success message

            successMessage.style.display =
                "block";

        }
    );

}