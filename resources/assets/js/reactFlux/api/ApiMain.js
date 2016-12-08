import 'whatwg-fetch';
import 'babel-polyfill';

const API_URL = '/api';
const API_HEADERS = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  //'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
};
const RESPONSE_SUCCESS = "success";

let ApiMain = {
  getInitialStateFromView() {
    return JSON.parse(document.getElementById('initial-state').innerHTML);
  },

  fetchYears(year) {
    return fetch(`${API_URL}/get_years`,
    {
      method: 'GET',
      headers: API_HEADERS,
    })
    .then((response) => response.json())
  },

  fetchMakes(make) {
    return fetch(`${API_URL}/get_makes`,
    {
      method: 'GET',
      headers: API_HEADERS,
    })
    .then((response) => response.json())
  },

  fetchModels(make) {
    return fetch(`${API_URL}/get_models/${make}` ,
    {
      method: 'GET',
      headers: API_HEADERS,
    })
    .then((response) => response.json())
  },

  saveLeadForm(leadInfo, cb) {
    let data = {
      name: leadInfo.full_name,
      email: leadInfo.email,
      telephone: leadInfo.telephone,
      line: leadInfo.line,
      postal: leadInfo.postal,
      year: leadInfo.selectedYear,
      car_make_id: leadInfo.selectedMake,
      car_model_id: leadInfo.selectedModel,
      transmission: leadInfo.selectedTransmission,
      color: leadInfo.selectedColor,
      mileage: leadInfo.mileage,
    };
    return fetch(`${API_URL}/lead_form`,
    {
      method: 'POST',
      headers: API_HEADERS,
      body: JSON.stringify(data)
    })
    .then(function(response){ 
      return response.json();
    }).then(function(data) {
      if (data.message && data.message == RESPONSE_SUCCESS && cb) {
        cb();
      }
      return data;
    });
  },
}
export default ApiMain;