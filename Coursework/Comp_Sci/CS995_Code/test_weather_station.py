import unittest
import weather_station

"""
File created: <test_weather_station.py>;
Program: test <weather_station.py> functionality
"""


class TestWeatherStation(unittest.TestCase):
    """
    Class: perform unit tests on functions of <weather_station.py>
    """

    def test_str_to_int(self):
        """
        Function: test <str_to_int> function in weather_station.py
        """
        itr = weather_station.str_to_int("five")

    def test_str_to_float(self):
        """
        Function: test <str_to_float> function in weather_station.py
        """
        flt = weather_station.str_to_float("five")

    def test_month_to_int(self):
        """
        Function: test <month_to_int> function in weather_station.py
        """
        itr = weather_station.month_to_int("May")

    def test_weather_station(self):
        """
        Function: test <from_json>, <years> and <maximum_per_year> member
        functions of <WeatherStation>
        """
        json_data = {
            "23008": [
                {
                    "Timestamp": "Feb 2011",
                    "Value": "159.6"
                },
                {
                    "Timestamp": "Mar 2011",
                    "Value": "78.6"
                }
            ]
        }
        main_test = weather_station.WeatherStation("23008")
        main_test.from_json(json_data)

        main_test.years(json_data)
        main_test.maximum_per_year(json_data)


if __name__ == "__main__":
    # Run tests
    unittest.main()
