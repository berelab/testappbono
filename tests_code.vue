    methods: {
        normalize: function (city) {
            let nCity = city.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f-\s-\.]/g, "");
            return nCity;
        }
    },