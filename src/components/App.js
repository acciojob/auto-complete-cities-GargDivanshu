import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import "./../styles/App.css";

const cities = [
  // Andhra Pradesh
  "Visakhapatnam", "Vijayawada", "Guntur", "Nellore", "Kurnool", "Kakinada", "Rajahmundry", "Tirupati", "Kadapa", "Anantapur",

  // Arunachal Pradesh
  "Itanagar", "Naharlagun", "Pasighat", "Daporijo", "Ziro", "Along", "Tezu", "Bomdila", "Aalo", "Khonsa",

  // Assam
  "Guwahati", "Silchar", "Dibrugarh", "Jorhat", "Nagaon", "Tinsukia", "Tezpur", "Bongaigaon", "Karimganj", "Hailakandi",

  // Bihar
  "Patna", "Gaya", "Bhagalpur", "Muzaffarpur", "Darbhanga", "Arrah", "Bihar Sharif", "Katihar", "Munger", "Chhapra",

  // Chhattisgarh
  "Raipur", "Bhilai", "Bilaspur", "Korba", "Durg", "Raigarh", "Jagdalpur", "Ambikapur", "Dhamtari", "Janjgir",

  // Goa
  "Panaji", "Margoa", "Vasco da Gama", "Mapusa", "Ponda", "Bicholim", "Curchorem", "Sanguem", "Quepem", "Cuncolim",

  // Gujarat
  "Ahmedabad", "Surat", "Vadodara", "Rajkot", "Bhavnagar", "Jamnagar", "Junagadh", "Gandhinagar", "Gandhidham", "Anand",

  // Haryana
  "Faridabad", "Gurgaon", "Panipat", "Ambala", "Yamunanagar", "Rohtak", "Hisar", "Karnal", "Sonipat", "Panchkula",

  // Himachal Pradesh
  "Shimla", "Solan", "Dharamshala", "Mandi", "Palampur", "Kullu", "Chamba", "Una", "Bilaspur", "Hamirpur",

  // Jharkhand
  "Ranchi", "Jamshedpur", "Dhanbad", "Bokaro", "Hazaribagh", "Deoghar", "Giridih", "Ramgarh", "Dumka", "Chaibasa",

  // Karnataka
  "Bangalore", "Mysore", "Hubli", "Mangalore", "Belgaum", "Gulbarga", "Davanagere", "Bellary", "Bijapur", "Shimoga",

  // Kerala
  "Thiruvananthapuram", "Kochi", "Kozhikode", "Thrissur", "Kollam", "Palakkad", "Alappuzha", "Kannur", "Kottayam", "Kasaragod",

  // Madhya Pradesh
  "Indore", "Bhopal", "Jabalpur", "Gwalior", "Ujjain", "Sagar", "Dewas", "Satna", "Ratlam", "Rewa",

  // Maharashtra
  "Mumbai", "Pune", "Nagpur", "Thane", "Nashik", "Kalyan-Dombivali", "Vasai-Virar", "Aurangabad", "Solapur", "Navi Mumbai",

  // Manipur
  "Imphal", "Thoubal", "Bishnupur", "Churachandpur", "Ukhrul", "Kakching", "Senapati", "Tamenglong", "Jiribam", "Chandel",

  // Meghalaya
  "Shillong", "Tura", "Jowai", "Baghmara", "Williamnagar", "Nongstoin", "Resubelpara", "Mairang", "Khliehriat", "Amlarem",

  // Mizoram
  "Aizawl", "Lunglei", "Saiha", "Champhai", "Kolasib", "Serchhip", "Lawngtlai", "Hnahthial", "Saitual", "Khawzawl",

  // Nagaland
  "Kohima", "Dimapur", "Mokokchung", "Tuensang", "Wokha", "Zunheboto", "Mon", "Phek", "Kiphire", "Longleng",

  // Odisha
  "Bhubaneswar", "Cuttack", "Rourkela", "Berhampur", "Sambalpur", "Puri", "Balasore", "Bhadrak", "Baripada", "Jharsuguda",

  // Punjab
  "Ludhiana", "Amritsar", "Jalandhar", "Patiala", "Bathinda", "Hoshiarpur", "Mohali", "Batala", "Pathankot", "Moga",

  // Rajasthan
  "Jaipur", "Jodhpur", "Kota", "Bikaner", "Ajmer", "Udaipur", "Bhilwara", "Alwar", "Bharatpur", "Sikar",

  // Sikkim
  "Gangtok", "Namchi", "Gyalshing", "Mangan", "Singtam", "Rangpo", "Nepanagar", "Ravangla", "Rhenock", "Jorethang",

  // Tamil Nadu
  "Chennai", "Coimbatore", "Madurai", "Tiruchirappalli", "Salem", "Tirunelveli", "Tiruppur", "Vellore", "Thoothukudi", "Nagercoil",

  // Telangana
  "Hyderabad", "Warangal", "Nizamabad", "Karimnagar", "Ramagundam", "Khammam", "Mahbubnagar", "Nalgonda", "Adilabad", "Siddipet",

  // Tripura
  "Agartala", "Dharmanagar", "Khowai", "Udaipur", "Ambassa", "Kailasahar", "Belonia", "Sonamura", "Santirbazar", "Kamalpur",

  // Uttar Pradesh
  "Lucknow", "Kanpur", "Ghaziabad", "Agra", "Varanasi", "Allahabad", "Meerut", "Bare" ]


class App extends Component {
  static propTypes = {
    suggestions: PropTypes.instanceOf(Array),
  };

  static defaultProps = {
    suggestions: [],
  };

  constructor(props) {
    super(props);

    this.state = {
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: "",
    };
  }

  onChange = (e) => {
    const userInput = e.currentTarget.value;

    const filteredSuggestions = cities.filter(
      (city) => city.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    this.setState({
      activeSuggestion: 0,
      filteredSuggestions,
      showSuggestions: true,
      userInput,
    });
  };

  onClick = (e) => {
    this.setState({
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: e.currentTarget.innerText,
    });
  };

  onKeyDown = (e) => {
    const { activeSuggestion, filteredSuggestions } = this.state;

    if (e.keyCode === 13) {
      this.setState({
        activeSuggestion: 0,
        showSuggestions: false,
        userInput: filteredSuggestions[activeSuggestion],
      });
    } else if (e.keyCode === 38) {
      if (activeSuggestion === 0) {
        return;
      }

      this.setState({ activeSuggestion: activeSuggestion - 1 });
    } else if (e.keyCode === 40) {
      if (activeSuggestion - 1 === filteredSuggestions.length) {
        return;
      }

      this.setState({ activeSuggestion: activeSuggestion + 1 });
    }
  };

  render() {
    const {
      onChange,
      onClick,
      onKeyDown,
      state: {
        activeSuggestion,
        filteredSuggestions,
        showSuggestions,
        userInput,
      },
    } = this;

    let suggestionsListComponent;

    if (showSuggestions && userInput) {
      if (filteredSuggestions.length) {
        suggestionsListComponent = (
          <ul className="suggestions">
            {filteredSuggestions.map((suggestion, index) => {
              let className;

              if (index === activeSuggestion) {
                className = "suggestion-active";
              }

              return (
                <li
                  className={className}
                  key={suggestion}
                  onClick={onClick}
                >
                  {suggestion}
                </li>
              );
            })}
          </ul>
        );
      } else {
        suggestionsListComponent = (
          <div className="no-suggestions">
            <em>No suggestions, you're on your own!</em>
          </div>
        );
      }
    }

    return (
      <Fragment>
        <p>Search cities of India:</p>
        <input
          type="text"
          onChange={onChange}
          onKeyDown={onKeyDown}
          value={userInput}
        />

        {suggestionsListComponent}
      </Fragment>
    );
  }
}

export default App;
