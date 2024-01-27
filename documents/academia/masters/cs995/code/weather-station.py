"""
Module dependencies
"""
import json
import operator

"""
File created: <weather_station.py>;
Program: read, reconfigure and display weather station data from a JSON file
"""


def str_to_int(inp):
    """
    Function: convert string input to an integer
    """
    out = ""
    try:
        out = int(inp)
    except ValueError:
        out = -1
        print("Input valid characters")
    return out


def str_to_float(inp):
    """
    Function: convert string input to a float
    """
    out = ""
    try:
        out = float(inp)
    except ValueError:
        out = -1.0
        print("Input valid characters")
    return out


def month_to_int(inp):
    """
    Function: convert string (month prefix (Aaa)) input to an integer
    """
    out = ""
    months = {
        "Jan": 1,
        "Feb": 2,
        "Mar": 3,
        "Apr": 4,
        "May": 5,
        "Jun": 6,
        "Jul": 7,
        "Aug": 8,
        "Sep": 9,
        "Oct": 10,
        "Nov": 11,
        "Dec": 12
    }
    if inp not in months.keys():
        out = -1
        print("Input valid string correspondence")
    else:
        out = str(months[inp])
    return out


class Measurement:
    """
    Class: format attributes of each weather station measurement
    """

    def __init__(self, year=0, month=0, value=0.):
        self.year = int(year)
        self.month = int(month)
        self.value = float(value)

    def __repr__(self):
        stats_m = "{"
        stats_m += f"Year: {self.year}, "
        stats_m += f"Month: {self.month}, "
        stats_m += f"Value: {self.value}mm"
        stats_m += "}"
        return stats_m

    def from_strings(self, year_str, month_str, value_str):
        """
        Member Function: call conversion functions to convert year, month
        and value values, and verify
        """
        self.year = str_to_int(year_str)
        self.month = month_to_int(month_str)
        self.value = str_to_float(value_str)
        if (
                type(self.year) == int and
                type(self.month) == int and
                type(self.value) == float
        ):
            return True
        else:
            return False


class WeatherStation:
    """
    Class: use Measurement class to comprehensively format JSON data
    """

    def __init__(self, station_id):
        self.station_id = int(station_id)
        self.measurements = []

    def __repr__(self):
        stats_ws = f"Station ID: {self.station_id}\n"
        stats_ws += f"Measurements: {self.measurements}"
        return stats_ws

    def measurements_summary(self):
        """
        Function: produce re-formatted summary table for each weather station
        Irrelevant as there is only one weather station, but for my own leisure
        """
        stats_sum = "Station ID: " + str(self.station_id) + "\n"
        stats_sum += "Year" + "\t" + "Month" + "\t" + "Value"
        for value in self.measurements:
            stats_sum += "\n"
            stats_sum += (
                            str(value.year) +
                            "\t" + str(value.month) +
                            "\t" + str(value.value) + "mm"
            )
        return stats_sum

    def from_json(self, json_data):
        """
        Member Function: accept and format JSON data
        """
        self.measurements.clear
        measurement = Measurement()
        for measurement in json_data["23008"]:
            year_str = measurement["Timestamp"][4:8]
            month_str = measurement["Timestamp"][0:3]
            value_str = measurement["Value"]
            # measurement.from_json(json_measurement)
            self.measurements.append(measurement)
        return self.measurements
        # Verifying only one key in json data, 1 req.:
        if len(json_data) == 1:
            from_strings(year_str, month_str, value_str)
            return year
            return month
            return value
            return True
        else:
            return False

    def years(self, json_data):
        """
        Member Function: return `list` of years from JSON data
        """
        yrs = []
        for yr in json_data["23008"]:
            yrs.append(yr["Timestamp"][4:8])
        return yrs
        # Simplified version but technically not a `list`:
        """
        for yr in json_data["23008"]:
            print(yr["Timestamp"][4:8])
        """

    def maximum_per_year(self, json_data):
        """
        Member Function: return dict w/ each year corresponding to greatest
        rainfall amount during that year
        """
        val_per_yr = {}
        for maximum in json_data["23008"]:
            yr = int(maximum["Timestamp"][4:8])
            val = float(maximum["Value"])
            val_per_yr[yr] = val
        return val_per_yr
        # Additionally, to return the year w/ overall greatest value:
        """
        yr_greatest = max(val_per_yr.items(), key=operator.itemgetter(1))[0]
        return yr_greatest
        """


def json_read(file_name):
    """
    Function: importing json data from file
    """
    json_file = open(file_name, "r", encoding="utf-8")
    json_data = json.load(json_file)
    json_file.close()
    return json_data


"""
Program: open and read JSON data and pass to WeatherStation class
"""
if __name__ == "__main__":
    # Loading JSON data and assigning values
    json_data = json_read("../Data/rainfall.json")

    # Creating data objects and populating from JSON
    weather_station = WeatherStation("23008")
    for json_record in json_data:
        weather_station.from_json(json_record)
        measurements.append(weather_station)

    # Printing weather station statistics results
    print(weather_station)
    print(weather_station.years(json_data))
    print(weather_station.maximum_per_year(json_data))


"""
Author's playground;
some misc. manual testing
"""
"""
weather_station = WeatherStation(226696)
weather_station.measurements.append(Measurement(2012, "Jan", 30.))
weather_station.measurements.append(Measurement(2012, "Feb", 40.))
print("Weather Station Statistics:")
print(weather_station)
print("Weather Station Statistics (Re-Formatted):")
print(weather_station.measurements_summary())

json_data = json_read("../Data/rainfall.json")

for measurement in json_data["23008"][11:23]:
    print("Month: " + measurement["Timestamp"][0:3])
    print("Year: " + measurement["Timestamp"][4:8])
    print("Value: " + measurement["Value"] + "mm\n")

val_per_yr = {}
for measurement in json_data["23008"]:
    yr = int(measurement["Timestamp"][4:8])
    val = float(measurement["Value"])
    val_per_yr[yr] = val

print(val_per_yr)
print(
        "The year with the greatest rainfall was "
        + str(max(val_per_yr.items(), key=operator.itemgetter(1))[0])
)
"""
