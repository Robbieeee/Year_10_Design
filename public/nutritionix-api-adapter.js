console.log("From the file");

const apiId = "25789af7"
const apiKey = "633de0b2e8a705a22bc91ed65701a6f2"

function getItemData(searchTerm, callback) {
  $.ajax({
    url: `https://api.nutritionix.com/v1_1/search/${searchTerm}?appId=${apiId}&appKey=${apiKey}`,
    type: 'get',
    success: function(data) {
      console.log(data);
      callback(data)
    }
  })
}


function getNutritionData(element, callback) {
	$.ajax({
    url: `https://api.nutritionix.com/v1_1/item?id=${element.dataset.itemId}&appId=${apiId}&appKey=${apiKey}`,
    type: 'get',
    success: function(data) {
      console.log(data);
      callback(data, element)
    }
  })
}