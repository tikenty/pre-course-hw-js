// Составь программу для let rule = "Еще не родился тот человек, который, поставил бы цель, и не смог бы стать программистом." Используй конструкцию switch case: если в строке знаков меньше 25 выдай в консоль "Все таки нет правил без исключения" и если больше 25 "У меня 100 пудов все получится", а если ровно 25, то «50 на 50»
//
// let rule = "Еще не родился тот человек, который поставил бы цель и не смог бы стать программистом.";
// 📋
// Пример:
//     switch (true) {
//         case rule.length < 25:
//             console.log("А что так можно было?");
//             break;
//         ...
//         default:...
//     }

let rule = "Еще не родился тот человек, который поставил бы цель и не смог бы стать программистом.";

function ruleLength(rule) {
    switch (true) {
        case rule.length < 25:
            return "Все таки нет правил без исключения";
        case rule.length > 25:
            return "У меня 100 пудов все получится";
        default:
            return "50 на 50";
    }
}

function launchRuleLength(rule) {
    console.log(ruleLength(rule));
    console.log(ruleLength("Еще не"));
    console.log(ruleLength("Еще не родился тот челове"));``
}

launchRuleLength(rule)