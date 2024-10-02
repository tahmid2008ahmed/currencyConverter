import data from "./data.js";

const UI = {
  loadSelectors() {
    const givenCurrencyRate = document.getElementById("givenCurrencyRate");
    const convertedCurrencyRate = document.getElementById(
      "convertedCurrencyRate"
    );
    const givenCurrency = document.getElementById("givenCurrency");
    const convertedCurrency = document.getElementById("convertedCurrency");

    const showingGivenCurrencyMoney =
      document.getElementById("givenCurrencyMoney");
    const showingConvertedCurrencyMoney = document.getElementById(
      "convertedCurrencyMoney"
    );
    const buttonElm = document.getElementById("convertButton");

    return {
      givenCurrencyRate,
      convertedCurrencyRate,
      givenCurrency,
      convertedCurrency,
      showingGivenCurrencyMoney,
      showingConvertedCurrencyMoney,
      buttonElm,
    };
  },

  //country name beacuse this API don't have country name
  currencyCodeToCountry: {
    AED: "United Arab Emirates Dirham",
    AFN: "Afghan Afghani",
    ALL: "Albanian Lek",
    AMD: "Armenian Dram",
    ANG: "Netherlands Antillean Guilder",
    AOA: "Angolan Kwanza",
    ARS: "Argentine Peso",
    AUD: "Australian Dollar",
    AWG: "Aruban Florin",
    AZN: "Azerbaijani Manat",
    BAM: "Bosnia-Herzegovina Convertible Mark",
    BBD: "Barbadian Dollar",
    BDT: "Bangladeshi Taka",
    BGN: "Bulgarian Lev",
    BHD: "Bahraini Dinar",
    BIF: "Burundian Franc",
    BMD: "Bermudian Dollar",
    BND: "Brunei Dollar",
    BOB: "Bolivian Boliviano",
    BRL: "Brazilian Real",
    BSD: "Bahamian Dollar",
    BTN: "Bhutanese Ngultrum",
    BWP: "Botswana Pula",
    BYN: "Belarusian Ruble",
    BZD: "Belize Dollar",
    CAD: "Canadian Dollar",
    CDF: "Congolese Franc",
    CHF: "Swiss Franc",
    CLP: "Chilean Peso",
    CNY: "Chinese Yuan",
    COP: "Colombian Peso",
    CRC: "Costa Rican Colón",
    CUP: "Cuban Peso",
    CVE: "Cape Verdean Escudo",
    CZK: "Czech Koruna",
    DKK: "Danish Krone",
    DOP: "Dominican Peso",
    DZD: "Algerian Dinar",
    EGP: "Egyptian Pound",
    ERN: "Eritrean Nakfa",
    ETB: "Ethiopian Birr",
    EUR: "Euro",
    FJD: "Fijian Dollar",
    FKP: "Falkland Islands Pound",
    FOK: "Faroese Króna",
    GBP: "British Pound Sterling",
    GEL: "Georgian Lari",
    GGP: "Guernsey Pound",
    GHS: "Ghanaian Cedi",
    GIP: "Gibraltar Pound",
    GMD: "Gambian Dalasi",
    GNF: "Guinean Franc",
    GTQ: "Guatemalan Quetzal",
    GYD: "Guyanese Dollar",
    HKD: "Hong Kong Dollar",
    HNL: "Honduran Lempira",
    HRK: "Croatian Kuna",
    HTG: "Haitian Gourde",
    HUF: "Hungarian Forint",
    IDR: "Indonesian Rupiah",
    ILS: "Israeli New Shekel",
    IMP: "Isle of Man Pound",
    INR: "Indian Rupee",
    IQD: "Iraqi Dinar",
    IRR: "Iranian Rial",
    ISK: "Icelandic Króna",
    JMD: "Jamaican Dollar",
    JOD: "Jordanian Dinar",
    JPY: "Japanese Yen",
    KES: "Kenyan Shilling",
    KGS: "Kyrgyzstani Som",
    KHR: "Cambodian Riel",
    KPW: "North Korean Won",
    KRW: "South Korean Won",
    KWD: "Kuwaiti Dinar",
    KYD: "Cayman Islands Dollar",
    KZT: "Kazakhstani Tenge",
    LAK: "Lao Kip",
    LBP: "Lebanese Pound",
    LKR: "Sri Lankan Rupee",
    LRD: "Liberian Dollar",
    LSL: "Lesotho Loti",
    LYD: "Libyan Dinar",
    MAD: "Moroccan Dirham",
    MDL: "Moldovan Leu",
    MGA: "Malagasy Ariary",
    MKD: "Macedonian Denar",
    MMK: "Myanma Kyat",
    MNT: "Mongolian Tögrög",
    MRU: "Mauritanian Ouguiya",
    MUR: "Mauritian Rupee",
    MVR: "Maldivian Rufiyaa",
    MWK: "Malawian Kwacha",
    MXN: "Mexican Peso",
    MYR: "Malaysian Ringgit",
    MZN: "Mozambican Metical",
    NAD: "Namibian Dollar",
    NGN: "Nigerian Naira",
    NOK: "Norwegian Krone",
    NPR: "Nepalese Rupee",
    NZD: "New Zealand Dollar",
    OMR: "Omani Rial",
    PAB: "Panamanian Balboa",
    PEN: "Peruvian Sol",
    PGK: "Papua New Guinean Kina",
    PHP: "Philippine Peso",
    PKR: "Pakistani Rupee",
    PLN: "Polish Zloty",
    PYG: "Paraguayan Guarani",
    QAR: "Qatari Rial",
    RON: "Romanian Leu",
    RSD: "Serbian Dinar",
    RUB: "Russian Ruble",
    RWF: "Rwandan Franc",
    SAR: "Saudi Riyal",
    SBD: "Solomon Islands Dollar",
    SCR: "Seychellois Rupee",
    SDG: "Sudanese Pound",
    SEK: "Swedish Krona",
    SGD: "Singapore Dollar",
    SHP: "Saint Helena Pound",
    SLL: "Sierra Leonean Leone",
    SOS: "Somali Shilling",
    SRD: "Surinamese Dollar",
    SSP: "South Sudanese Pound",
    STN: "São Tomé and Príncipe Dobra",
    SVC: "Salvadoran Colón",
    SZL: "Swazi Lilangeni",
    THB: "Thai Baht",
    TJS: "Tajikistani Somoni",
    TMT: "Turkmenistani Manat",
    TND: "Tunisian Dinar",
    TOP: "Tongan Paʻanga",
    TRY: "Turkish Lira",
    TTD: "Trinidad and Tobago Dollar",
    TWD: "New Taiwan Dollar",
    TZS: "Tanzanian Shilling",
    UAH: "Ukrainian Hryvnia",
    UGX: "Ugandan Shilling",
    USD: "United States Dollar",
    UYU: "Uruguayan Peso",
    UZS: "Uzbekistani Som",
    VEF: "Venezuelan Bolívar",
    VND: "Vietnamese Dong",
    VUV: "Vanuatu Vatu",
    WST: "Samoan Tala",
    XAF: "Central African CFA Franc",
    XCD: "East Caribbean Dollar",
    XDR: "Special Drawing Rights",
    XOF: "West African CFA Franc",
    XPF: "CFP Franc",
    YER: "Yemeni Rial",
    ZAR: "South African Rand",
    ZMW: "Zambian Kwacha",
    ZWL: "Zimbabwean Dollar",
  },

  populateOptions(obj) {
    const { givenCurrency, convertedCurrency } = this.loadSelectors();

    // Iterate through the keys of obj and create option elements with currency codes and names
    Object.keys(obj).forEach((key) => {
      const optionGiven = document.createElement("option");
      optionGiven.value = key;
      optionGiven.textContent = `${key} - ${
        this.currencyCodeToCountry[key] || "Unknown"
      }`; // Currency code and country name

      const optionConverted = document.createElement("option");
      optionConverted.value = key;
      optionConverted.textContent = `${key} - ${
        this.currencyCodeToCountry[key] || "Unknown"
      }`; // Currency code and country name

      // Append the options to the select elements
      givenCurrency.appendChild(optionGiven);
      convertedCurrency.appendChild(optionConverted);
    });
  },

  convertCurrency() {
    const {
      givenCurrencyRate,
      convertedCurrencyRate,
      givenCurrency,
      convertedCurrency,
    } = this.loadSelectors();

    // Get the input value and selected currency codes
    const amountToConvert = parseFloat(givenCurrencyRate.value);
    const fromCurrency = givenCurrency.value;
    const toCurrency = convertedCurrency.value;

    // Retrieve the conversion rates
    const rates = data.getObj();
    rates.then((conversionRates) => {
      if (conversionRates) {
        // Calculate the converted amount
        const convertedAmount =
          (amountToConvert / conversionRates[fromCurrency]) *
          conversionRates[toCurrency];

        // Display the converted amount
        convertedCurrencyRate.value = convertedAmount.toFixed(2);

        // dispaly result
        const { showingGivenCurrencyMoney, showingConvertedCurrencyMoney } =
          this.loadSelectors();
        showingGivenCurrencyMoney.textContent = `${amountToConvert} ${fromCurrency}`;
        showingConvertedCurrencyMoney.textContent = `${convertedAmount.toFixed(
          2
        )} ${toCurrency}`;
      }
    });
  },

  showMassge() {
    const { givenCurrencyRate } = this.loadSelectors();
    if (givenCurrencyRate.value === "") {
      alert("Please, select necessary info.");
      return true;
    }
    return false;
  },

  async init() {
    // Fetch the currency conversion rates as soon as the page loads
    const obj = await data.getObj();
    console.log(obj);

    // Populate the select options with currency codes
    this.populateOptions(obj);

    const { buttonElm } = this.loadSelectors();

    // Add event listener for the convert button (optional, for further functionality)
    buttonElm.addEventListener("click", (e) => {
      e.preventDefault();

      if (this.showMassge()) return;

      this.convertCurrency();
    });
  },
};

export default UI;
