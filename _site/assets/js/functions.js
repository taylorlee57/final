function clearFilters(){
  $(".closing-icon").remove();
  $(".active_tag").removeClass('active_tag');
  $('.card').show();
}

function showContactForm(){

}

function toggleTags(button, tag){
  if(button.attr('class').indexOf('active_tag') > -1){
    button.removeClass("active_tag");
    button.html(tag);
  } else {
    button.html(tag + '<i class="material-icons left closing-icon">close</i>');
    button.addClass("active_tag");
  }
}

function addActiveTags(buttons){
  var active_tags = [];
  for(var j=0; j < buttons.length; j++){
    current_button = $(buttons[j]);
    if(current_button.attr('class').indexOf('active_tag') > -1){
      active_tags.push(current_button.attr('val'));
    }
  }
  return active_tags;
}

function showProjects(projects, active_tags){
  projects.each(function(i){
    var project = $(projects[i]);
    project.hide();

    $.each(active_tags, function(k){
      var active_tag = active_tags[k],
      projectContainsTag = project.attr('tags').indexOf(active_tag) > -1;

      if(projectContainsTag){
        project.show();
      }
    })
  })

  var activeTagsAreEmpty = active_tags.length === 0;

  if(activeTagsAreEmpty){
    projects.show();
  }
}

function hideCloseIcons(element){
  element.children().remove('i');
}

function assignColors(pagename, color){
  // debugger
  $('body').css('background-color', color);
  $('.card-action a').css('color', color);
  // debugger
  $('.nav-wrapper').css('background-color', color);
  $("a:contains('" + pagename + "')").parent().css('background-color', color);
  $("a:contains('" + pagename + "')").css('color', "white");
}

filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
