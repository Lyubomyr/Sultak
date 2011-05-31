/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function() {
  $('#makeFriends').click(function(event){
    getSessionIds();
    event.preventDefault(); // Prevent link from following its href
  });
});




function getSessionIds(){
    data = []
    $.ajax({
        url:"/pages/session_ids.json",
        dataType: "json",
        success: function(response) {
            data = response;
        }
    });
    return data;
}
