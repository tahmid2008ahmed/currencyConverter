const data = {
  API_KEY: "b9e665b8cfd1612235fe3cce",

  async getObj() {
    try {
      const res = await fetch(
        `https://v6.exchangerate-api.com/v6/${this.API_KEY}/latest/BDT`
      );
      const data = await res.json();
      console.log(data);
      return data.conversion_rates; // Return the conversion rates object
    } catch (err) {
      console.log("Error fetching currency data:", err);
    }
  },
};

export default data;
