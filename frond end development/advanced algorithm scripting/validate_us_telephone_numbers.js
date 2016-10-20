function telephoneCheck(str) {
    // Good luck
    var pattern = /^(?:(?:1?\d{10})|(^1?\s?)(([(]\d{3}[)])|(\d{3}))[-\s]?\d{3}[-\s]?\d{4})$/g;
    return pattern.test(str);
}

console.log(telephoneCheck("555-555-5555") + "\n" +
            telephoneCheck("(555)555-5555") + "\n" +
            telephoneCheck("(555) 555-5555") + "\n" +
            telephoneCheck("555 555 5555") + "\n" +
            telephoneCheck("5555555555") + "\n" +
            telephoneCheck("1 555 555 5555") + "\n" +
            telephoneCheck("2 757 622-7382") + "\n" +
            telephoneCheck("27576227382")
);
