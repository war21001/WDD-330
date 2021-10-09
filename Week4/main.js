const form = document.forms['hero'];
form.addEventListener('submit', makeHero, false);

function makeHero(event) {

    event.preventDefault(); // prevent the form from being submitted

    const hero = {}; // create an empty object

    hero.name = form.heroName.value; // create a name property based on the input field's value
    
    hero.realName = form.realName.value;

    hero.powers = [];
    for (let i=0; i < form.powers.length; i++) {
        if (form.powers[i].checked) {
            hero.powers.push(form.powers[i].value);
        }
    }
    hero.category = form.category.value;

    hero.age = form.age.value;

    hero.origin = form.origin.value;
    
    alert(JSON.stringify(hero)); // convert object to JSON string and display in alert dialog
    return hero;
}

