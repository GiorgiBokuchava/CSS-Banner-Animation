document.addEventListener("DOMContentLoaded", () => {
    const footer = document.querySelector(".footer");
    const headline = document.getElementById("txt_headline_890");
    const stripeRed = document.getElementById("stripe_red");
    const stripeBlue = document.getElementById("stripe_blue");
    const stripeYellow = document.getElementById("stripe_yellow");
    const stripeGreen = document.getElementById("stripe_green");
    const stripes = [stripeRed, stripeBlue, stripeYellow, stripeGreen];
    const endTxt = document.getElementById("end-text");
    const price890 = document.getElementById("price-890");
    const chichenPaprikaTxt = document.getElementById("chicken-paprika");
    const background1 = document.getElementById("bg_frame1");
    const meal1 = document.getElementById("meal1-png");
    const background2 = document.getElementById("bg_frame3");
    const meal2 = document.getElementById("meal2-png");
    const cheesburgerTxt = document.getElementById("cheeseburgerTxt");
    const background3 = document.getElementById("bg_frame4");
    const meal3 = document.getElementById("meal3-png");
    const fishBurgerTxt = document.getElementById("fish-burgerTxt");
    const background4 = document.getElementById("bg_frame5");
    const button = document.getElementById("button-cta");

    function runAnimations() {
        // Footer fades in
        animate(footer, 'fadeIn', 100, '500ms');

        // Headline scales up
        animate(headline, 'expandHeadline', 400, '300ms');

        // Stripes fade in one by one
        stripes.forEach((stripe, i) => {
            animate(stripe, 'fadeInStripes', 750 + i * 80, '260ms');
        });

        // Headline scales out downwards
        animate(headline, 'shrinkHeadline', 2450, '320ms');

        // Expand end text and price to the left side
        animate(endTxt, 'expandEndTxtToLeft', 2770, '350ms');
        animate(price890, 'expandPrice', 2770, '350ms');

        // Fade in chicken paprika text
        animate(chichenPaprikaTxt, 'fadeInProductTxt', 3230, '400ms');

        // Transition to the next product
        animate(background1, 'scaleFadeOut', 4750, '420ms');
        animate(meal1, 'scaleFadeOut', 4750, '420ms');
        animate(endTxt, 'pulseEndTxt', 4750, '420ms');
        animate(background2, 'fadeIn', 4750, '420ms');
        animate(meal2, 'fadeIn', 4750, '420ms');

        // Stripes move out of the view
        stripes.forEach((stripe) => {
            animate(stripe, 'moveStripes', 4750, '300ms');
        });

        // Re-animate stripes and cheeseburger text
        setTimeout(() => {
            stripes.forEach((stripe) => {
                animate(stripe, 'fadeInStripes', 0, '300ms');
            });
            chichenPaprikaTxt.style.display = 'none';
            animate(cheesburgerTxt, 'fadeInProductTxt', 680, '400ms');
        }, 5350);

        // Transition to fish burger: fade out current elements and fade in new ones
        animate(background2, 'scaleFadeOut', 6860, '420ms');
        animate(meal2, 'scaleFadeOut', 6860, '420ms');
        animate(endTxt, 'pulseEndTxt', 6860, '420ms');
        animate(background3, 'fadeIn', 6860, '420ms');
        animate(meal3, 'fadeIn', 6860, '420ms');
        
        // Move stripes out of the view
        stripes.forEach((stripe) => {
            animate(stripe, 'moveStripes', 6860, '300ms');
        });
        
        // Re-animate stripes and fish burger text after a delay
        setTimeout(() => {
            stripes.forEach((stripe) => {
                animate(stripe, 'fadeInStripes', 0, '300ms');
            });
            cheesburgerTxt.style.display = 'none';
            animate(fishBurgerTxt, 'fadeInProductTxt', 680, '400ms');
        }, 7460);

        // Fade out the last meal and background
        animate(background3, 'scaleFadeOut', 9060, '350ms');
        animate(meal3, 'scaleFadeOut', 9060, '350ms');
        setTimeout(() => {
            background4.style.zIndex = '1';
        }, 9060);
        animate(background4, 'fadeIn', 9060, '350ms');

        // Stripes move again
        stripes.forEach((stripe) => {
            animate(stripe, 'moveStripes', 9060, '300ms');
        });

        // Hide fish burger text and price after a delay
        setTimeout(() => {
            fishBurgerTxt.style.display = 'none';
            price890.style.display = 'none';
        }, 9400);

        // Animate the button and end text to appear
        animate(button, 'slideIn', 9415, '350ms');
        animate(endTxt, 'scaleEndText', 9580, '285ms');

        // Pulse animation for the button
        animate(button, 'pulseButton', 10350, '240ms');
        animate(button, 'pulseButton', 10970, '240ms');

        // Fade out end text, button, footer, and background
        animate(endTxt, 'fadeOut', 11770, '230ms');
        animate(button, 'fadeOut', 11770, '230ms');
        animate(footer, 'fadeOut', 11770, '230ms');
        animate(background4, 'fadeOut', 11770, '230ms');

        // Clear styles after the animation completes
        clearStyles();
    }

    // Initial run of animations
    runAnimations();

    // Run animations every 12 seconds
    setInterval(runAnimations, 12000);

    // Function to clear styles
    function clearStyles() {
        const elementsToReset = [footer, headline, endTxt, price890, chichenPaprikaTxt, background1, meal1, background2, meal2, cheesburgerTxt, background3, meal3, fishBurgerTxt, background4, button, ...stripes];
        elementsToReset.forEach((element) => {
            element.style.animation = '';
            element.style.transform = '';
            element.style.opacity = '';
        });
        chichenPaprikaTxt.style.display = '';
        cheesburgerTxt.style.display = '';
        fishBurgerTxt.style.display = '';
        price890.style.display = '';
    }
});

function animate(element, animation, delay, duration = '400ms', options = 'forwards') {
    setTimeout(() => {
        // Reset the animation
        element.style.animation = 'none';
        element.offsetHeight;
        element.style.animation = '';

        element.style.animation = `${animation} ${duration} ${options}`;
    }, delay);
}

// Measured voltages (in Volts)
const voltages = [4.5, 4.6, 4.4, 4.7, 4.8, 4.5, 4.2, 4.6, 4.3, 4.6,
                  4.5, 4.7, 4.9, 4.6, 4.4, 4.3, 4.5, 4.6, 4.8, 4.7];

// Sort the voltages in ascending order
const sortedVoltages = voltages.slice().sort((a, b) => a - b);

// Calculate the mean
const mean = sortedVoltages.reduce((sum, value) => sum + value, 0) / sortedVoltages.length;

// Calculate Xi - Xmean for each value and log the results
console.log("Sorted Voltages and Deviations (Xi - Xmean):");
sortedVoltages.forEach((value, index) => {
    console.log(`X${index + 1} (${value}) - Xmean: ${(value - mean).toFixed(4)}, ---------- ${(value - mean)*(value - mean).toFixed(4)}`);
});

// Calculate the variance
const variance = sortedVoltages.reduce((sum, value) => sum + Math.pow(value - mean, 2), 0) / (sortedVoltages.length - 1);
console.log(`\nVariance: ${variance.toFixed(4)}`);