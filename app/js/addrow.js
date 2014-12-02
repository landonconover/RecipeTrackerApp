// JavaScript Document
// add button to work
var rowNum = 0;
function addRow(frm) {
rowNum ++;
var row = '<p id="rowNum'+rowNum+'">Qty <input type=number" name="qty[]" size="4" value="'+frm.add_qty.value+'"> Ingredient name: <input type="text" name="name[]" value="'+frm.add_name.value+'"> <input type="button" value="Remove" onclick="removeRow('+rowNum+');"></p>';
json('#itemRows').append(row);
frm.add_qty.value = '';
frm.add_name.value = '';
}