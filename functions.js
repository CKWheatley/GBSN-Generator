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

var template = $("#gen-text")

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

input.change(() => {
    if(type.find(select).val() == "Call"){
        template.html(`
        ${contact_name.find(label).html()} ${contact_name.find(input).val()}
        <br>
        ${details.find(label).html()} ${details.find(input).val()}
        <br>
        ${summary.find(label).html()} ${summary.find(textarea).val()}
        <br>
        ${action.find(label).html()} ${action.find(input).val()}
        <br>
        ${follow.find(label).html()} ${follow.find(input).val()}
        `)
    }else{
        template.html(`
        ${contact_name.find(label).html()} ${contact_name.find(input).val()}
        <br>
        ${summary.find(label).html()} ${summary.find(textarea).val()}
        <br>
        ${action.find(label).html()} ${action.find(input).val()}
        <br>
        ${follow.find(label).html()} ${follow.find(input).val()}
        `)
    }
    
})

/*
function copy(){
    template.select()
    document.execCommand("copy");
}

$("#copy").click(() => {
    copy()
})
*/