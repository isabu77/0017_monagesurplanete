monthNames = new Array(13)
monthNames[1] = "Janvier"
monthNames[2] = "Février"
monthNames[3] = "Mars"
monthNames[4] = "Avril"
monthNames[5] = "Mai"
monthNames[6] = "Juin"
monthNames[7] = "Juillet"
monthNames[8] = "Août"
monthNames[9] = "Septembre"
monthNames[10] = "Octobre"
monthNames[11] = "Novembre"
monthNames[12] = "Décembre"

dayNames = new Array(8)
dayNames[1] = "Dimanche"
dayNames[2] = "Lundi"
dayNames[3] = "Mardi"
dayNames[4] = "Mercredi"
dayNames[5] = "Jeudi"
dayNames[6] = "Vendredi"
dayNames[7] = "Samedi"

function getLongDate(dateObj) {
    theDay = dayNames[dateObj.getDay() + 1]
    theMonth = monthNames[dateObj.getMonth() + 1]
    theDate = dateObj.getDate()
    theYear = dateObj.getFullYear();

    return "" + theDay + ", " + theMonth + " " + theDate + ", " + theYear
}

function getAgeInYear(age) {
    // supprimer les décimales
    return age.toFixed(0).toString() + " ans";
}

// Function to return 0 if result is <1
function int_zero(x) {
    if (x < 1)
        return 0;
    else
        return parseInt(x, 10);
}

function getAgeInYearAndDays(age, divyear, divdays, coef) {
    var days = int_zero(coef * age / divdays) / coef;
    var years = int_zero(coef * age / divyear) / coef;
    // une seule décimale
    return years.toFixed(1).toString() + " an(s) ou " + days.toFixed(1).toString() + " jour(s)";
}

function calculAge(form) {
    today = (new Date()).getTime();

    var birthyear = form.year.value;
    var birthmonth = form.month.value - 1;
    var birthday = form.day.value;
    var birthdate = (new Date(birthyear, birthmonth, birthday)).getTime();


    //	age EN JOURS
    age = (today - birthdate) / (1000 * 3600 * 24);
    if (age > 0.0) {
        //	Terre
        form.earth_year.value = getAgeInYearAndDays(age, 365.26, 1, 10);
        //  Venus
        form.venus_year.value = getAgeInYearAndDays(age, 224.7, 243, 10);
        //  Mercure
        form.mercury_year.value = getAgeInYearAndDays(age, 87.97, 58.6, 10);
        //  Jupiter
        form.jupiter_year.value = getAgeInYearAndDays(age, 4332.71, 0.41, 100);
        //	Mars
        form.mars_year.value = getAgeInYearAndDays(age, 686.98, 1.03, 10);
        //	Saturne
        form.saturn_year.value = getAgeInYearAndDays(age, 10759.5, 0.45, 100);
        //  Pluton
        //form.pluto_year.value = getAgeInYearAndDays(age, 90800, 1, 1000);
        //	Uranus
        form.uranus_year.value = getAgeInYearAndDays(age, 30685, 0.72, 100);
        //	Neptune
        form.neptune_year.value = getAgeInYearAndDays(age, 60190, 0.67, 100);
    }

}