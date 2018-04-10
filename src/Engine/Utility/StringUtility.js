var StringUtility = function () {
}

StringUtility.standartNumber = function (number) {// Hien thi number theo chuan{
    var tmp = "" + parseInt(number);
    if (tmp.length < 4 && tmp >= 0) {
        return tmp;
    }
    if (tmp.length == 4 && tmp < 0) return tmp;
    var tmp2 = "";
    for (var i = 0; i < tmp.length - 1; i++) {
        if (((i + 1) % 3) == 0) {
            tmp2 = "." + tmp.charAt(tmp.length - i - 1) + tmp2;
        }
        else {
            tmp2 = tmp.charAt(tmp.length - i - 1) + tmp2;
        }
    }
    tmp2 = tmp.charAt(0) + tmp2;
    return tmp2;
}

// hien thi user theo dang 12.001 M
StringUtility.rutGonNumBer = function (number) {
    var temp = "";
    if (number >= 1000000) {
        if (number >= 100000000) {
            number = number - number % 100000;
        }
        else {
            number = number - number % 10000;
        }
        number = number / 1000000;
        temp = number + " M";
    }
    else if (number >= 1000) {
        if (number >= 100000)
            number = number - number % 100;
        else {
            number = number - number % 10;
        }

        number = number / 1000;
        temp = number + " K";
    } else {
        temp = number + "";
    }
    return temp;
}

StringUtility.rutGonName = function (name) {
    if (name.length <= 12) {
        return name;
    }
    else
        return name.substr(0, 12);
};

StringUtility.formatNumberSymbol = function (number) {
    var retVal = "";
    if (number < 0)
        retVal = "-";
    number = Math.floor(Math.abs(number));

    if (number >= 1000000000) {
        return retVal + StringUtility.numberConvert(number, 1000000000) + "B";
    }
    else if (number >= 1000000) {
        return retVal + StringUtility.numberConvert(number, 1000000) + "M";
    }
    else if (number >= 1000) {
        return retVal + StringUtility.numberConvert(number, 1000) + "K";
    } else {
        retVal = retVal + number;
    }
    return retVal;
}

StringUtility.pointNumber = function (number) {
    if (typeof number === 'undefined')
        return "";
    var ret = Math.floor(Math.abs(number));
    return ret.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

StringUtility.numberConvert = function (number, div) {
    var a = parseInt(number / (div / 100));
    var b = parseInt(a / 100);

    a = a - b * 100;
    if (a == 0) {
        return "" + b;
    }
    else {
        if (a > 9) {
            if (a % 10 == 0) {
                return b + "." + a / 10;
            }
            else {
                return b + "." + a;
            }
        }
        else {
            return b + ".0" + a;
        }
    }
}

StringUtility.replaceAll = function (text, searchText, replaceText) {
    return text.split(searchText).join(replaceText);
}

StringUtility.subStringText = function (text, lb) {
    if (typeof lb === 'undefined') return text;

    var str = lb.getString();
    if (text <= str.length) return text;

    return text.substring(0, str.length - 3) + "...";
}

StringUtility.checkStringNormal = function (text) {
    var reg = new RegExp("^([a-zA-Z0-9.,?!]{1,})$");
    return reg.test(text);
}
StringUtility.convertToUnicode = function (text) {
    text = text.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ẩ|ậ|ẫ|ă|ặ|ằ|ắ|ẳ|ẵ/g, "a");
    text = text.replace(/è|é|ẹ|ẻ|ẽ|ê|ế|ề|ệ|ể|ễ/g, "e");
    text = text.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    text = text.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ổ|ộ|ỗ|ơ|ờ|ớ|ợ|ỡ|ở/g, "o");
    text = text.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ử|ự/g, "u");
    text = text.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    text = text.replace(/đ/g, "d");
    return text;
}

StringUtility.rutGonString = function (name, len) {
    if (name.length <= len) {
        return name;
    } else {
        return name.substr(0, len - 2) + "..";
    }
};