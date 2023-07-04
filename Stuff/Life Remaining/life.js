function lifeInWeeks(age) {
    let yearsRemaining = 100 - age;

    let months = yearsRemaining * 12;

    let weeks = yearsRemaining * 52;

    let days = yearsRemaining * 365;

    console.log(months);

    console.log(weeks);

    console.log(days);

    console.log(
        "You Have " +
            days +
            " Days, " +
            weeks +
            " Weeks, And " +
            months +
            " Months Left."
    );
}

lifeInWeeks(21);
