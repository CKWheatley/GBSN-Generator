// JavaScript Document

var type = $("#contact-type")
var title = $("#title")
var contact_name = $("#contact-name")
var details = $("#contact-details")
var summary = $("#summary")
var action = $("#action-required")
var follow = $("#follow-up-required")

var label = $("label")
var input = $("input")
var select = $("select")
var textarea = $("textarea")

var desc_template = $("#desc-gen-text")
var title_template = $("#title-gen-text")
var action_template = $("#action-gen-text")

select.change(() => {
    if(type.find(select).val() == "Call"){
        title.find(label).html("Title (Call Topic):")
        contact_name.find(label).html("Caller's Full Name:")
        details.find(label).html("Contact Number:")
        details.removeClass("hidden")
    }else{
        title.find(label).html(" Title (Email Topic):")
        contact_name.find(label).html("Contacts Full Name:")
        details.addClass("hidden")
        details.find(label).html("")
        details.find(input).val("")
    }
})

function update(){
    if(type.find(select).val() == "Call"){
        title_template.html(`${title.find(input).val()}`)

        desc_template.html(`${contact_name.find(label).html()} ${contact_name.find(input).val()}
${details.find(label).html()} ${details.find(input).val()}
${summary.find(label).html()} ${summary.find(textarea).val()}`)

        action_template.html(`${action.find(label).html()} ${action.find(input).val()}
${follow.find(label).html()} ${follow.find(input).val()}`)

// if action and follow is empty then dont populate.
// add if form condition
// complete crm task notes thing
    }
    else{
        title_template.html(`${title.find(input).val()}`)
        desc_template.html(`${contact_name.find(label).html()} ${contact_name.find(input).val()}
${summary.find(label).html()} ${summary.find(textarea).val()}
`)
        action_template.html(`${action.find(label).html()} ${action.find(input).val()}
${follow.find(label).html()} ${follow.find(input).val()}`)
    }
}
input.change(() => {
    update()

})
textarea.change(() => {
    update()
})


function copy(value){
    value.select()
    document.execCommand("copy");
}

$("#desc-copy").click(() => {
    copy(desc_template)
})
$("#title-copy").click(() => {
    copy(title_template)
})
$("#action-copy").click(() => {
    copy(action_template)
})

/*
$(desc_template).each(function () {
    this.setAttribute("style", "height:" + (this.scrollHeight) + "px;overflow-y:hidden;");
  }).on("input", function () {
    this.style.height = "auto";
    this.style.height = (this.scrollHeight) + "px";
  });

https://stackoverflow.com/questions/454202/creating-a-textarea-with-auto-resize
*/

// add char counter function to check whether it will go over the message limit. Figure it out by spamming letters in msg then store as var.val().length