$(document).ready(function() {
    $("#all-rows").text($("tr").length - 1)
        //console.log()
});

function createNewRow() {
    let table = $("#table1");
    let tr = $("<tr></tr>")
    table.append(tr);
    let td1 = $("<td></td>")
    tr.append(td1)

    let id = $("tr").length;

    let btnDelete = $("<button></button>")
    btnDelete.addClass('btn')
    btnDelete.addClass('btn-danger')
    btnDelete.addClass('me-1')
        //<i class="fa fa-trash"></i>
    let delIcon = $("<i></i>")
    delIcon.addClass("fa")
    delIcon.addClass("fa-trash")
    btnDelete.text(" Delete")
    btnDelete.prepend(delIcon)

    btnDelete.val(id)
    btnDelete.attr({
        "onclick": "deleteRow(this)"
    })
    console.log(btnDelete)
    td1.append(btnDelete)

    let btnClone = $("<button></button>")
    btnClone.addClass('btn')
    btnClone.addClass('btn-primary')
    let copyIcon = $("<i></i>")
    copyIcon.addClass("fa")
    copyIcon.addClass("fa-copy")
    btnClone.text(" Clone")
    btnClone.prepend(copyIcon)
    btnClone.val(id)
    btnClone.attr({
        "onclick": "CloneRow(this)"
    })
    td1.append(btnClone)

    let td2 = $("<td></td>")
    tr.append(td2)
    let inputNumber = $("<input></input>")

    inputNumber.addClass('ms-2')
    td2.append(inputNumber)


    let td3 = $("<td></td>")
    tr.append(td3)
    let inputType = $("<input></input>")

    inputType.addClass('ms-2')
    td3.append(inputType)




    let td4 = $("<td></td>")
    tr.append(td4)
    let div1 = $("<div></div>")
    td4.append(div1)
    div1.addClass('form-check')
    div1.addClass('form-check-inline')
        //div1.addClass('ms-5')
    let radio1 = $("<input></input>")
    div1.append(radio1)
    radio1.addClass("form-check-input")
    radio1.attr({
        "value": "new",
        "name": `inlineRadioOptions${id}`,
        "type": "radio"
    });
    let label1 = $("<label></label>")
    div1.append(label1)
    label1.addClass("form-check-label")
    label1.text("new")
    label1.attr({
        "for": `inlineRadio${id}`
    })


    let div2 = $("<div></div>")
    td4.append(div2)
    div2.addClass('form-check')
    div2.addClass('form-check-inline')
        //div1.addClass('ms-5')
    let radio2 = $("<input></input>")
    div2.append(radio2)
    radio2.addClass("form-check-input")
    radio2.attr({
        "value": "In progress",
        "name": `inlineRadioOptions${id}`,
        "type": "radio"
    });
    let label2 = $("<label></label>")
    div2.append(label2)
    label2.addClass("form-check-label")
    label2.text("In progress")
    label2.attr({
        "for": `inlineRadio${id}`
    })

    let div3 = $("<div></div>")
    td4.append(div3)
    div3.addClass('form-check')
    div3.addClass('form-check-inline')
        //div1.addClass('ms-5')
    let radio3 = $("<input></input>")
    div3.append(radio3)
    radio3.addClass("form-check-input")
    radio3.attr({
        "value": "confirmed",
        "name": `inlineRadioOptions${id}`,
        "type": "radio"
    });
    let label3 = $("<label></label>")
    div3.append(label3)
    label3.addClass("form-check-label")
    label3.text("confirmed")
    label3.attr({
        "for": `inlineRadio${id}`
    })

    return tr

}

function handleSubmit() {

    let newRow = createNewRow()
    $("#table1").prepend(newRow)
    let numOfRows = $("tr").length - 1
    let confirmedRows = $('input[value="confirmed"]:checked').length
    $("#all-rows").text(numOfRows)
    $("#not-confirmed").text(numOfRows - confirmedRows)


}


function deleteRow(o) {

    var p = o.parentNode.parentNode;
    p.parentNode.removeChild(p);
    let numOfRows = $("tr").length - 1
    let confirmedRows = $('input[value="confirmed"]:checked').length
    $("#all-rows").text(numOfRows)
    $("#not-confirmed").text(numOfRows - confirmedRows)
}

function CloneRow(o) {

    let newRow = createNewRow()
    let cloned = $(o).parents().closest('tr')
    newRow.insertAfter(cloned);
    let clonedNumber = cloned.children().eq(1).children().eq(0).val()
    let clonedType = cloned.children().eq(2).children().eq(0).val()
    let isNew = cloned.children().eq(3).children().eq(0).children().eq(0).is(':checked')
    let isProgress = cloned.children().eq(3).children().eq(1).children().eq(0).is(':checked')
    let isConfirmed = cloned.children().eq(3).children().eq(2).children().eq(0).is(':checked')
        //console.log(cloned.children().eq(3).children().eq(2).children().eq(0).is(':checked'))
        //$('#someid').prop('disabled', true);
        //$("#radio_1").prop("checked", true);
    newRow.children().eq(3).children().eq(0).children().eq(0).prop("checked", isNew);
    newRow.children().eq(3).children().eq(1).children().eq(0).prop("checked", isProgress);
    newRow.children().eq(3).children().eq(2).children().eq(0).prop("checked", isConfirmed);
    if (isConfirmed) {
        newRow.children().eq(1).children().eq(0).prop('disabled', true)
        newRow.children().eq(2).children().eq(0).prop('disabled', true)
    }
    newRow.children().eq(1).children().eq(0).val(clonedNumber)
    newRow.children().eq(2).children().eq(0).val(clonedType)

    let numOfRows = $("tr").length - 1
    let confirmedRows = $('input[value="confirmed"]:checked').length
    $("#all-rows").text(numOfRows)
    $("#not-confirmed").text(numOfRows - confirmedRows)

}