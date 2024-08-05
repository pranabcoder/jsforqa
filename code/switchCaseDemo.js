function checkDayOfWeek(dayNumber) {
    switch (dayNumber) {
        case 0:
            return 'Sunday';
        case 1:
            return 'Monday';
        case 2:
            return 'Tuesday';
        case 3:
            return 'Wednesday';
        case 4:
            return 'Thursday';
        case 5:
            return 'Friday';
        case 6:
            return 'Saturday';
        default:
            return 'Invalid day';
    }
}

// console.log(checkDayOfWeek(6)); // Sunday
// console.log(checkDayOfWeek(10)); // Invalid day

let browser = 'Opera';
switch (browser) {
    case 'Edge':
        console.log('You have got the Edge!');
        break;
    case 'Chrome':
        console.log('You have got the Chrome!');
        break;
    case 'Firefox':
        console.log('You have got the Firefox!');
        break;
    case 'Safari':
        console.log('You have got the Safari!');
        break;
    case 'Opera':
        console.log('Okay we support these browsers too');
        break;
    default:
        console.log('Please try another browser');
}

// For automation testing we have different browsers, environments, users, roles, here we can use switch case
// multi env - dev, qa, stage, uat, prod
// multi user - admin, user, guest, customer, seller, vendor
// multi role - manager, developer, tester, designer, architect, lead