
        var app = Vue.createApp({
            data() {
                return {
                    message: 'search the weather',
                    city: '',
                    forecast: [],
                    showcity: false,
                    cityshown:''
                }
            },

            methods: {
                // Bind events for weather search
                searchWeather: function () {
                    var that = this;
                    // Get the weather for three days
                    axios.get("http://api.weatherapi.com/v1/forecast.json?key=624b06a1cb9142b3855232733221002&days=3&q=" + this.city).then(
                        function (response) {
                            that.forecast = response.data.forecast.forecastday;
                            that.showcity = 'true';
                            that.cityshown = that.city;
                        }
                    ).catch(
                        console.log("error loc")
                    );
                },

                // Bind events for quick navigation
                changeCity: function (city) {
                    this.city = city;
                    this.searchWeather();
                    that.cityshown = that.city;
                }
            }
        }).mount('#app')